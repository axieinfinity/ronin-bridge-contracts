// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { console2 } from "forge-std/console2.sol";
import { StdStyle } from "forge-std/StdStyle.sol";
import { BaseMigration } from "foundry-deployment-kit/BaseMigration.s.sol";
import { RoninBridgeManager } from "@ronin/contracts/ronin/gateway/RoninBridgeManager.sol";
import { IMainchainGatewayV3 } from "@ronin/contracts/interfaces/IMainchainGatewayV3.sol";
import { GlobalProposal } from "@ronin/contracts/libraries/GlobalProposal.sol";
import { Token } from "@ronin/contracts/libraries/Token.sol";
import { Contract } from "../utils/Contract.sol";
import { BridgeMigration } from "../BridgeMigration.sol";
import { Network } from "../utils/Network.sol";
import { Contract } from "../utils/Contract.sol";
import { IGeneralConfigExtended } from "../IGeneralConfigExtended.sol";

import "./maptoken-pixel-configs.s.sol";

contract Migration__20240201_MapTokenPixelMainchainTestnet is BridgeMigration, Migration__MapToken_Pixel_Config {
  RoninBridgeManager internal _roninBridgeManager;
  address internal _mainchainGatewayV3;
  address internal _mainchainBridgeManager;

  function setUp() public override {
    super.setUp();

    _roninBridgeManager = RoninBridgeManager(_config.getAddressFromCurrentNetwork(Contract.RoninBridgeManager.key()));
    _mainchainGatewayV3 = _config.getAddress(
      _config.getCompanionNetwork(_config.getNetworkByChainId(block.chainid)).key(),
      Contract.MainchainGatewayV3.key()
    );
    _mainchainBridgeManager = _config.getAddress(
      _config.getCompanionNetwork(_config.getNetworkByChainId(block.chainid)).key(),
      Contract.MainchainBridgeManager.key()
    );
  }

  function run() public {
    address[] memory mainchainTokens = new address[](1);
    address[] memory roninTokens = new address[](1);
    Token.Standard[] memory standards = new Token.Standard[](1);

    uint256 expiredTime = block.timestamp + 10 minutes;
    address[] memory targets = new address[](1);
    uint256[] memory values = new uint256[](1);
    bytes[] memory calldatas = new bytes[](1);
    uint256[] memory gasAmounts = new uint256[](1);

    // ================ PIXEL ERC-20 ======================

    mainchainTokens[0] = _pixelMainchainToken;
    roninTokens[0] = _pixelNewRoninToken;
    standards[0] = Token.Standard.ERC20;

    // function mapTokens(
    //   address[] calldata _mainchainTokens,
    //   address[] calldata _roninTokens,
    //   Token.Standard[] calldata _standards
    // )

    bytes memory innerData = abi.encodeCall(IMainchainGatewayV3.mapTokens, (
      mainchainTokens,
      roninTokens,
      standards
    ));

    bytes memory proxyData = abi.encodeWithSignature("functionDelegateCall(bytes)", innerData);

    targets[0] = _mainchainGatewayV3;
    values[0] = 0;
    calldatas[0] = proxyData;
    gasAmounts[0] = 1_000_000;

    // ================ VERIFY AND EXECUTE PROPOSAL ===============

    _verifyMainchainProposalGasAmount(targets, values, calldatas, gasAmounts);

    uint256 chainId = _config.getCompanionNetwork(_config.getNetworkByChainId(block.chainid)).chainId();

    vm.broadcast(_governor);
    _roninBridgeManager.propose(
      chainId,
      expiredTime,
      targets,
      values,
      calldatas,
      gasAmounts
    );
  }
}
