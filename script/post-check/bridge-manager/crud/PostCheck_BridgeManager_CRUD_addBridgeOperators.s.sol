// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IBridgeManager } from "@ronin/contracts/interfaces/bridge/IBridgeManager.sol";
import { BasePostCheck } from "script/post-check/BasePostCheck.s.sol";
import { LibArray } from "script/libraries/LibArray.sol";

abstract contract PostCheck_BridgeManager_CRUD_AddBridgeOperators is BasePostCheck {
  using LibArray for *;

  uint256 private voteWeight = 100;
  string private seedStr = vm.toString(seed);
  address private any = makeAddr(string.concat("any", seedStr));
  address private operator = makeAddr(string.concat("operator-", seedStr));
  address private governor = makeAddr(string.concat("governor-", seedStr));

  function validate_RevertWhen_NotSelfCalled_addBridgeOperators() private {
    vm.prank(any);
    bool[] memory addeds = IBridgeManager(_manager[block.chainid]).addBridgeOperators(
      voteWeight.toSingletonArray().toUint96sUnsafe(), operator.toSingletonArray(), governor.toSingletonArray()
    );
    assertFalse(addeds[0], "addeds[0] == true");
  }

  function validate_RevertWhen_SelfCalled_TheListHasDuplicate_addBridgeOperators() private {
    vm.prank(_manager[block.chainid]);
    bool[] memory addeds = IBridgeManager(_manager[block.chainid]).addBridgeOperators(
      voteWeight.toSingletonArray().toUint96sUnsafe(), operator.toSingletonArray(), operator.toSingletonArray()
    );
    assertFalse(addeds[0], "addeds[0] == true");

    vm.prank(_manager[block.chainid]);
    addeds = IBridgeManager(_manager[block.chainid]).addBridgeOperators(
      voteWeight.toSingletonArray().toUint96sUnsafe(), governor.toSingletonArray(), governor.toSingletonArray()
    );
    assertFalse(addeds[0], "addeds[0] == true");

    vm.prank(_manager[block.chainid]);
    addeds = IBridgeManager(_manager[block.chainid]).addBridgeOperators(
      voteWeight.toSingletonArray().toUint96sUnsafe(),
      governor.toSingletonArray().extend(operator.toSingletonArray()),
      operator.toSingletonArray().extend(governor.toSingletonArray())
    );
    assertFalse(addeds[0], "addeds[0] == true");
  }

  function validate_RevertWhen_SelfCalled_InputArrayLengthMismatch_addBridgeOperators() private {
    vm.prank(_manager[block.chainid]);
    vm.expectRevert();
    IBridgeManager(_manager[block.chainid]).addBridgeOperators(
      voteWeight.toSingletonArray().toUint96sUnsafe(),
      governor.toSingletonArray(),
      operator.toSingletonArray().extend(governor.toSingletonArray())
    );
  }

  function validate_RevertWhen_SelfCalled_ContainsNullVoteWeight_addBridgeOperators() private { 
    vm.prank(_manager[block.chainid]);
    vm.expectRevert();
    IBridgeManager(_manager[block.chainid]).addBridgeOperators(
      uint256(0).toSingletonArray().toUint96sUnsafe(),
      governor.toSingletonArray(),
      operator.toSingletonArray().extend(governor.toSingletonArray())
    );
  }

  function validate_addBridgeOperators() private { 
    
  }
}
