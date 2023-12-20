// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC1155Mintable {
  function mint(address _to, uint256 _id, uint256 _amount, bytes memory _data) external returns (bool);
}
