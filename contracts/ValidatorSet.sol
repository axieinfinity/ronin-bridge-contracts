// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";
import "./interfaces/IValidatorSet.sol";
import "./interfaces/IStaking.sol";
import "./ValidatorSetStorage.sol";

/**
 * @title Set of validators in current epoch
 * @notice This contract maintains set of validator in the current epoch of Ronin network
 */
contract ValidatorSet is ValidatorSetStorage {
  using EnumerableMap for EnumerableMap.AddressToUintMap;

  uint256 public constant INIT_NUM_OF_CABINETS = 21;
  uint256 public constant INIT_EPOCH_LENGTH = 200;

  uint256 numOfCabinets;
  uint256 epochLength;
  uint256 lastUpdated;

  IStaking stakingContract;

  event ValidatorSetUpdated();
  event ValidatorJailed(address indexed validator);
  /// @dev Event for each time the validators deposit mining reward
  event ValidatorDeposited(address indexed validator, uint256 amount);
  /// @dev Event for the in-jail validators deposit mining reward
  event DeprecatedDeposit(address indexed validator, uint256 amount);

  modifier onlyCoinbase() {
    require(tx.origin == block.coinbase, "Only coinbase");
    _;
  }

  modifier onlyValidator() {
    require(isValidator(msg.sender), "Only validator");
    _;
  }

  modifier noEmptyDeposit() {
    require(msg.value > 0, "No empty deposit");
    _;
  }

  modifier atEpochEnding() {
    require((block.number + 1) % epochLength == 0, "Only at the end of the epoch");
    _;
  }

  constructor(IStaking _stakingContract) {
    stakingContract = _stakingContract;
    numOfCabinets = INIT_NUM_OF_CABINETS;
    epochLength = INIT_EPOCH_LENGTH;
  }

  function updateValidators() external onlyValidator atEpochEnding returns (address[] memory) {
    // 1. fetch new validator set from staking contract
    IStaking.ValidatorCandidate[] memory _upcommingValidatorSet = stakingContract.updateValidatorSet();

    // 2. update last updated
    lastUpdated = block.number;

    // 3. update new validator set  
    _doUpdateState(_upcommingValidatorSet);
    emit ValidatorSetUpdated();

    // 4. return new validator set
    return getValidators();
  }

  function getLastUpdated() external view returns (uint256 height) {
    return lastUpdated;
  }

  function depositReward() external payable onlyCoinbase {
    uint256 _value = msg.value;
    address _valAddr = tx.origin;
    Validator storage _validator = _getValidator(_valAddr);

    // 1. check if validator is in current epoch
    if (currentValidatorIndexesMap.contains(_valAddr)) {
      // 2. check if validator is in jail
      if (_validator.jailed) {
        emit DeprecatedDeposit(_valAddr, _value);
      } else {
        stakingContract.onDeposit();
      }
    }

    // 3. if get deposit from deprecated validators
    emit DeprecatedDeposit(_valAddr, _value);
  }

  function slashMisdemeanor(address validator) external {
    revert("Unimplemented");
  }

  /// TODO:
  function slashFelony(address validator) external {
    revert("Unimplemented");
  }

  /// TODO:
  function slashDoubleSign(address validator) external {
    revert("Unimplemented");
  }

  function getValidators() public view returns (address[] memory) {
    uint256 size = currentValidatorIndexesMap.length();
    address[] memory validatorAddresses = new address[](size);
    for (uint256 i = 0; i < size; i++) {
      Validator memory _v = _getValidatorAtMiningIndex(i);
      validatorAddresses[i] = _v.consensusAddr;
    }
    return validatorAddresses;
  }

  function isValidator(address _addr) public view returns (bool) {
    return validatorSetMap[_addr] > 0;
  }

  function isWorkingValidator(address _addr) public view returns (bool) {
    Validator memory _v = _getValidator(_addr);
    return (!_v.jailed);
  }

  function isCurrentValidator(address _addr) public view returns (bool) {
    return currentValidatorIndexesMap.contains(_addr);
  }

  ///
  /// INTERNAL FUNCTIONS
  ///

  function _doUpdateState(IStaking.ValidatorCandidate[] memory _incomingValidatorSet) private {
    uint256 n = currentValidatorIndexesMap.length();
    uint256 m = _incomingValidatorSet.length;
    uint256 k = n < m ? n : m;

    // keep the validators that already in the exact order and update wrong validators
    // incoming set:  [ ========= ]
    // current set:   [ =====     ]
    // updating part:   ^^^^^
    for (uint256 i = 0; i < k; ++i) {
      Validator memory _oldValidator = _getValidatorAtMiningIndex(i); 
      if (!_isSameValidator(_incomingValidatorSet[i], _oldValidator)) {
        _setValidatorAtMiningIndex(i, _incomingValidatorSet[i]);
      }
    }

    // in case the incoming set is longer, update the set by appending to the current set
    // incoming set:  [ ========= ]
    // current set:   [ =====     ]
    // updating part:        ^^^^
    if (m > n) {
      for (uint256 i = n; i < m; ++i) {
        _setValidatorAtMiningIndex(i, _incomingValidatorSet[i]);
      }
    }

    // in case the current set is longer, delete trailing members in the current set
    // incoming set:  [ ===       ]
    // current set:   [ ========= ]
    // updating part:      ^^^^^^
    if (n > m) {
      for (uint256 i = m; i < n; ++i) {
        _removeValidatorAtMiningIndex(i);
      }
    }
  }
}
