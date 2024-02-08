// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { BasePostCheck } from "./BasePostCheck.s.sol";

abstract contract PostCheck_StorageSlot is BasePostCheck {
  function validate_BridgeManager_StorageSlot() internal onPostCheck("validate_BridgeManager_StorageSlot") { }

  function validate_BridgeReward_StorageSlot() internal onPostCheck("validate_BridgeReward_StorageSlot") { }

  function validate_BridgeSlash_StorageSlot() internal onPostCheck("validateBridgeSlash_StorageSlot") { }

  function validate_BridgeTracking_StorageSlot() internal onPostCheck("validate_BridgeTracking_StorageSlot") { }
}
