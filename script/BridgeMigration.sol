// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { console2 } from "forge-std/console2.sol";
import { BaseMigration } from "foundry-deployment-kit/BaseMigration.s.sol";
import { GeneralConfigExtended } from "./GeneralConfigExtended.sol";
import { RoninBridgeManager } from "@ronin/contracts/ronin/gateway/RoninBridgeManager.sol";
import { ErrorHandler } from "@ronin/contracts/libraries/ErrorHandler.sol";
import { IGeneralConfigExtended } from "./IGeneralConfigExtended.sol";
import { Network } from "./utils/Network.sol";
import { Contract } from "./utils/Contract.sol";
import { DefaultNetwork } from "foundry-deployment-kit/utils/DefaultNetwork.sol";
import { TNetwork } from "foundry-deployment-kit/types/Types.sol";

contract BridgeMigration is BaseMigration {
  using ErrorHandler for bool;

  error ErrProposalOutOfGas(bytes4 sig, uint256 expectedGas);

  IGeneralConfigExtended internal constant _config = IGeneralConfigExtended(address(CONFIG));

  function _configByteCode() internal virtual override returns (bytes memory) {
    return abi.encodePacked(type(GeneralConfigExtended).creationCode);
  }

  function _sharedArguments() internal virtual override returns (bytes memory rawArgs) {
    return "";
  }

  function _verifyRoninProposalGasAmount(
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory calldatas,
    uint256[] memory gasAmounts
  ) internal {
    address roninBridgeManager = _config.getAddressFromCurrentNetwork(Contract.RoninBridgeManager.key());
    uint256 snapshotId = vm.snapshot();
    vm.startPrank(address(roninBridgeManager));
    _verifyProposalGasAmount(roninBridgeManager, targets, values, calldatas, gasAmounts);
    vm.stopPrank();
    vm.revertTo(snapshotId);
  }

  function _verifyMainchainProposalGasAmount(
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory calldatas,
    uint256[] memory gasAmounts
  ) internal {
    TNetwork roninNetwork = _config.getNetworkByChainId(block.chainid);
    TNetwork companionNetwork =  _config.getCompanionNetwork(roninNetwork).key();

    _config.createFork(companionNetwork);
    _config.switchTo(companionNetwork);

    address mainchainBridgeManager = _config.getAddressFromCurrentNetwork(Contract.MainchainBridgeManager.key());
    uint256 snapshotId = vm.snapshot();

    vm.startPrank(address(mainchainBridgeManager));
    _verifyProposalGasAmount(mainchainBridgeManager, targets, values, calldatas, gasAmounts);
    vm.stopPrank();
    vm.revertTo(snapshotId);

    _config.switchTo(roninNetwork);
  }

 function _verifyProposalGasAmount(
    address bridgeManager,
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory calldatas,
    uint256[] memory gasAmounts
  ) private {
    console2.log("Verifying proposal gas amount...");

    for (uint256 i; i < targets.length; i++) {
      vm.deal(address(bridgeManager), values[i]);
      uint256 gasUsed = gasleft();
      (bool success, bytes memory returnOrRevertData) = targets[i].call{value: values[i]}(calldatas[i]);
      gasUsed = gasUsed - gasleft();
      success.handleRevert(bytes4(calldatas[i]), returnOrRevertData);

      console2.log("Call", i, ": gasUsed", gasUsed);
      if (gasUsed > gasAmounts[i]) {
        revert ErrProposalOutOfGas(bytes4(calldatas[i]), gasUsed);
      }
    }
  }
}
