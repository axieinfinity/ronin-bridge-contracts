// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Migration__MapToken_Pixel_Config {
  address constant _pixelOldRoninToken = address(0xfBca6b939E2c4D86477a1E836372f9936ABB8245);
  address constant _pixelNewRoninToken = address(0x253eF7651433ca9cA5dE487e1661a27080E85A83);
  address constant _pixelMainchainToken = address(0x49337E7414F8B968EA5478B68F1b6D0A2706cba1);

  // The decimal of PIXEL token is 18
  uint256 constant _highTierThreshold = 100_000_000 ether;
  uint256 constant _lockedThreshold = 400_000_000 ether;
  // The MAX_PERCENTAGE is 100_0000
  uint256 constant _unlockFeePercentages = 10; // 0.001%. Max percentage is 1e6 so 10 is 0.001% (`10 / 1e6 = 0.001 * 100`)
  uint256 constant _dailyWithdrawalLimit = 300_000_000 ether;

  uint256 constant _pixelMinThreshold = 10 ether;

  address internal _governor = 0xd24D87DDc1917165435b306aAC68D99e0F49A3Fa; // TODO: replace by address of the SV governor
}