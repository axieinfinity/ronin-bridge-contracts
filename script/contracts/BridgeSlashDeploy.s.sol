// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { BridgeSlash } from "@ronin/contracts/ronin/gateway/BridgeSlash.sol";
import { Contract } from "../utils/Contract.sol";
import { ISharedArgument } from "../interfaces/ISharedArgument.sol";
import { Migration } from "../Migration.s.sol";

import { BridgeTrackingDeploy } from "./BridgeTrackingDeploy.s.sol";
import { RoninBridgeManagerDeploy } from "./RoninBridgeManagerDeploy.s.sol";

contract BridgeSlashDeploy is Migration {
  function _defaultArguments() internal virtual override returns (bytes memory args) {
    ISharedArgument.BridgeSlashParam memory param = config.sharedArguments().bridgeSlash;

    args = abi.encodeCall(
      BridgeSlash.initialize,
      (param.validatorContract, param.bridgeManagerContract, param.bridgeTrackingContract, param.dposGA)
    );
  }

  function run() public virtual returns (BridgeSlash) {
    return BridgeSlash(_deployProxy(Contract.BridgeSlash.key()));
  }
}
