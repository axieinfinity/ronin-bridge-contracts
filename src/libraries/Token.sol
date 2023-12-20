// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "../interfaces/IWETH.sol";
import "../interfaces/IERC20Mintable.sol";
import "../interfaces/IERC721Mintable.sol";
import "../interfaces/IERC1155Mintable.sol";

library Token {
  /// @dev Error indicating that the provided information is invalid.
  error ErrInvalidInfo();

  /// @dev Error indicating that the minting of ERC20 tokens has failed.
  error ErrERC20MintingFailed();

  /// @dev Error indicating that the minting of ERC721 tokens has failed.
  error ErrERC721MintingFailed();

  /// @dev Error indicating that the minting of ERC1155 tokens has failed.
  error ErrERC1155MintingFailed();

  /// @dev Error indicating that an unsupported standard is encountered.
  error ErrUnsupportedStandard();

  /**
   * @dev Error indicating that the `transfer` has failed.
   * @param tokenInfo Info of the token including ERC standard, id or quantity.
   * @param to Receiver of the token value.
   * @param token Address of the token.
   */
  error ErrTokenCouldNotTransfer(Info tokenInfo, address to, address token);

  /**
   * @dev Error indicating that the `transferFrom` has failed.
   * @param tokenInfo Info of the token including ERC standard, id or quantity.
   * @param from Owner of the token value.
   * @param to Receiver of the token value.
   * @param token Address of the token.
   */
  error ErrTokenCouldNotTransferFrom(Info tokenInfo, address from, address to, address token);

  enum Standard {
    ERC20,
    ERC721,
    ERC1155
  }

  struct Info {
    Standard erc;
    // For ERC20:  the id must be 0 and the quantity is larger than 0.
    // For ERC721: the quantity must be 0.
    // For ERC1155: the quantity is larger than 0.
    uint256 id;
    uint256 quantity;
  }

  // keccak256("TokenInfo(uint8 erc,uint256 id,uint256 quantity)");
  bytes32 public constant INFO_TYPE_HASH = 0x1e2b74b2a792d5c0f0b6e59b037fa9d43d84fbb759337f0112fcc15ca414fc8d;

  /**
   * @dev Returns token info struct hash.
   */
  function hash(Info memory _info) internal pure returns (bytes32 digest) {
    // keccak256(abi.encode(INFO_TYPE_HASH, _info.erc, _info.id, _info.quantity))
    assembly {
      let ptr := mload(0x40)
      mstore(ptr, INFO_TYPE_HASH)
      mstore(add(ptr, 0x20), mload(_info)) // _info.erc
      mstore(add(ptr, 0x40), mload(add(_info, 0x20))) // _info.id
      mstore(add(ptr, 0x60), mload(add(_info, 0x40))) // _info.quantity
      digest := keccak256(ptr, 0x80)
    }
  }

  /**
   * @dev Validates the token info.
   */
  function validate(Info memory _info) internal pure {
    if (
      !((_info.erc == Standard.ERC20 && _info.quantity > 0 && _info.id == 0) ||
        (_info.erc == Standard.ERC721 && _info.quantity == 0) ||
        (_info.erc == Standard.ERC1155 && _info.quantity > 0))
    ) revert ErrInvalidInfo();
  }

  /**
   * @dev Transfer asset from.
   *
   * Requirements:
   * - The `_from` address must approve for the contract using this library.
   *
   */
  function transferFrom(Info memory _info, address _from, address _to, address _token) internal {
    bool _success;
    bytes memory _data;
    if (_info.erc == Standard.ERC20) {
      (_success, _data) = _token.call(abi.encodeCall(IERC20.transferFrom, (_from, _to, _info.quantity)));
      _success = _success && (_data.length == 0 || abi.decode(_data, (bool)));
    } else if (_info.erc == Standard.ERC721) {
      (_success, ) = _token.call(abi.encodeCall(IERC721.transferFrom, (_from, _to, _info.id)));
    } else if (_info.erc == Standard.ERC1155) {
      (_success, ) = _token.call(abi.encodeCall(IERC1155.safeTransferFrom, (_from, _to, _info.id, _info.quantity, "")));
    } else revert ErrUnsupportedStandard();

    if (!_success) revert ErrTokenCouldNotTransferFrom(_info, _from, _to, _token);
  }

  /**
   * @dev Transfers ERC721 token and returns the result.
   */
  function tryTransferERC721(address _token, address _to, uint256 _id) internal returns (bool _success) {
    (_success, ) = _token.call(abi.encodeCall(IERC721.transferFrom, (address(this), _to, _id)));
  }

  /**
   * @dev Transfers ERC20 token and returns the result.
   */
  function tryTransferERC20(address _token, address _to, uint256 _quantity) internal returns (bool _success) {
    bytes memory _data;
    (_success, _data) = _token.call(abi.encodeCall(IERC20.transfer, (_to, _quantity)));
    _success = _success && (_data.length == 0 || abi.decode(_data, (bool)));
  }

  /**
   * @dev Transfers ERC1155 token and returns the result.
   */
  function tryTransferERC1155(address _token, address _to, uint256 _id, uint256 _quantity) internal returns (bool _success) {
    // safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data)
    (_success, ) = _token.call(abi.encodeCall(IERC1155.safeTransferFrom, (
      address(this),
      _to,
      _id,
      _quantity,
      "")));
  }

  /**
   * @dev Transfer assets from current address to `_to` address.
   */
  function transfer(Info memory _info, address _to, address _token) internal {
    bool _success;
    if (_info.erc == Standard.ERC20) {
      _success = tryTransferERC20(_token, _to, _info.quantity);
    } else if (_info.erc == Standard.ERC721) {
      _success = tryTransferERC721(_token, _to, _info.id);
    } else if (_info.erc == Standard.ERC1155) {
      _success = tryTransferERC1155(_token, _to, _info.id, _info.quantity);
    } else revert ErrUnsupportedStandard();

    if (!_success) revert ErrTokenCouldNotTransfer(_info, _to, _token);
  }

  /**
   * @dev Tries minting and transfering assets.
   *
   * @notice Prioritizes transfer native token if the token is wrapped.
   *
   */
  function handleAssetTransfer(
    Info memory _info,
    address payable _to,
    address _token,
    IWETH _wrappedNativeToken
  ) internal {
    bool _success;
    if (_token == address(_wrappedNativeToken)) {
      // Try sending the native token before transferring the wrapped token
      if (!_to.send(_info.quantity)) {
        _wrappedNativeToken.deposit{ value: _info.quantity }();
        transfer(_info, _to, _token);
      }
    } else if (_info.erc == Token.Standard.ERC20) {
      uint256 _balance = IERC20(_token).balanceOf(address(this));

      if (_balance < _info.quantity) {
        (_success, ) = _token.call(abi.encodeCall(IERC20Mintable.mint, (address(this), _info.quantity - _balance)));
        if (!_success) revert ErrERC20MintingFailed();
      }

      transfer(_info, _to, _token);
    } else if (_info.erc == Token.Standard.ERC721) {
      if (!tryTransferERC721(_token, _to, _info.id)) {
        (_success, ) = _token.call(abi.encodeCall(IERC721Mintable.mint, (_to, _info.id)));
        if (!_success) revert ErrERC721MintingFailed();
      }
    } else if (_info.erc == Token.Standard.ERC1155) {
      uint256 _balance = IERC1155(_token).balanceOf(address(this), _info.id);

      if (_balance < _info.quantity) {
        (_success, ) = _token.call(abi.encodeCall(IERC1155Mintable.mint, (address(this), _info.id, _info.quantity - _balance, "")));
        if (!_success) revert ErrERC1155MintingFailed();
      }

      transfer(_info, _to, _token);
    } else revert ErrUnsupportedStandard();
  }

  struct Owner {
    address addr;
    address tokenAddr;
    uint256 chainId;
  }

  // keccak256("TokenOwner(address addr,address tokenAddr,uint256 chainId)");
  bytes32 public constant OWNER_TYPE_HASH = 0x353bdd8d69b9e3185b3972e08b03845c0c14a21a390215302776a7a34b0e8764;

  /**
   * @dev Returns ownership struct hash.
   */
  function hash(Owner memory _owner) internal pure returns (bytes32 digest) {
    // keccak256(abi.encode(OWNER_TYPE_HASH, _owner.addr, _owner.tokenAddr, _owner.chainId))
    assembly {
      let ptr := mload(0x40)
      mstore(ptr, OWNER_TYPE_HASH)
      mstore(add(ptr, 0x20), mload(_owner)) // _owner.addr
      mstore(add(ptr, 0x40), mload(add(_owner, 0x20))) // _owner.tokenAddr
      mstore(add(ptr, 0x60), mload(add(_owner, 0x40))) // _owner.chainId
      digest := keccak256(ptr, 0x80)
    }
  }
}
