// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.17 <0.9.0;

import { Base_Test } from "@ronin/test/Base.t.sol";
import { console } from "forge-std/console.sol";

import { TransparentUpgradeableProxyV2 } from "@ronin/contracts/extensions/TransparentUpgradeableProxyV2.sol";
import { MainchainGatewayV3 } from "@ronin/contracts/mainchain/MainchainGatewayV3.sol";
import { IMainchainGatewayV3 } from "@ronin/contracts/interfaces/IMainchainGatewayV3.sol";
import { Token } from "@ronin/contracts/libraries/Token.sol";
import { Transfer as TransferPackage } from "@ronin/contracts/libraries/Transfer.sol";
import { IWETH } from "@ronin/contracts/interfaces/IWETH.sol";
import { SignatureConsumer } from "@ronin/contracts/interfaces/consumers/SignatureConsumer.sol";
import { WETH } from "solady/tokens/WETH.sol";
import { MockERC721 } from "solady/../test/utils/mocks/MockERC721.sol";
import { ErrInvalidRequest } from "@ronin/contracts/utils/CommonErrors.sol";

contract MockBridgeManager {
  function getTotalWeight() external pure returns (uint256) {
    return 1;
  }

  function getBridgeOperatorWeight(address /*bridgeOperator*/) external pure returns (uint96 weight) {
    return 1;
  }
}

contract MainchainGateway_BulkTransaction_Test is Base_Test {
  event DepositRequested(bytes32 receiptHash, TransferPackage.Receipt receipt);
  event Transfer(address indexed from, address indexed to, uint256 indexed id);

  MainchainGatewayV3 internal _mainchainGateway;
  WETH internal _weth;
  MockERC721 internal _mockERC721;

  address internal sender = address(2);
  address internal recipient = address(1);

  function setUp() public virtual {
    address mainchainGatewayImpl = address(new MainchainGatewayV3());
    address _proxyAdmin = vm.addr(1);
    address _roleSetter = vm.addr(1);
    _weth = new WETH();
    _mockERC721 = new MockERC721();

    address[][3] memory _addresses;
    _addresses[0] = new address[](2);
    _addresses[0][0] = address(_weth);
    _addresses[0][1] = address(_mockERC721);

    _addresses[1] = new address[](2);
    _addresses[1][0] = address(1);
    _addresses[1][1] = address(1);

    _addresses[2] = new address[](2);
    _addresses[2][0] = address(1);
    _addresses[2][1] = address(1);

    uint256[][4] memory _thresholds;
    _thresholds[0] = new uint256[](2);
    _thresholds[0][0] = uint256(100000);
    _thresholds[0][1] = uint256(100000);

    _thresholds[1] = new uint256[](2);
    _thresholds[1][0] = uint256(100000);
    _thresholds[1][1] = uint256(100000);

    _thresholds[2] = new uint256[](2);
    _thresholds[2][0] = uint256(0);
    _thresholds[2][1] = uint256(0);

    _thresholds[3] = new uint256[](2);
    _thresholds[3][0] = uint256(100000);
    _thresholds[3][1] = uint256(100000);

    Token.Standard[] memory _standards = new Token.Standard[](2);
    _standards[0] = Token.Standard.ERC20;
    _standards[1] = Token.Standard.ERC721;

    /*
      function initialize(
        address _roleSetter,
        IWETH _wrappedToken,
        uint256 _roninChainId,
        uint256 _numerator,
        uint256 _highTierVWNumerator,
        uint256 _denominator,
        // _addresses[0]: mainchainTokens
        // _addresses[1]: roninTokens
        // _addresses[2]: withdrawalUnlockers
        address[][3] calldata _addresses,
        // _thresholds[0]: highTierThreshold
        // _thresholds[1]: lockedThreshold
        // _thresholds[2]: unlockFeePercentages
        // _thresholds[3]: dailyWithdrawalLimit
        uint256[][4] calldata _thresholds,
        Token.Standard[] calldata _standards
      )
    */
    bytes memory _data = abi.encodeCall(
      MainchainGatewayV3.initialize,
      (
        _roleSetter,
        IWETH(address(_weth)),
        2021,
        7,
        9,
        10,
        _addresses,
        _thresholds,
        _standards
      )
    );

    _mainchainGateway = MainchainGatewayV3(
      payable(address(
        new TransparentUpgradeableProxyV2(mainchainGatewayImpl, _proxyAdmin, _data)
      ))
    );

    _mainchainGateway.initializeV2(address(new MockBridgeManager()));
  }

  function test_RevertWhen_2NativeTokenDepositRequests() external {
    TransferPackage.Request memory _request = TransferPackage.Request({
      recipientAddr: recipient,
      tokenAddr: address(0),
      info: Token.Info({erc: Token.Standard.ERC20, id: 0, quantity: 100})
    });

    TransferPackage.Request[] memory _requests = new TransferPackage.Request[](2);
    _requests[0] = _request;
    _requests[1] = _request;

    vm.expectRevert(IMainchainGatewayV3.ErrMoreThanOneNativeTokenRequests.selector);
    _mainchainGateway.bulkRequestDepositFor{value: 100}(_requests);
  }

  function test_RevertWhen_NonNativeRequestWithMsgValue() external {
    vm.deal(sender, 100);

    _mockERC721.mint(sender, 0);
    _mockERC721.mint(sender, 1);
    vm.startPrank(sender);

    _mockERC721.setApprovalForAll(address(_mainchainGateway), true);

    TransferPackage.Request memory _request1 = TransferPackage.Request({
      recipientAddr: recipient,
      tokenAddr: address(_mockERC721),
      info: Token.Info({erc: Token.Standard.ERC721, id: 0, quantity: 0})
    });

    TransferPackage.Request memory _request2 = TransferPackage.Request({
      recipientAddr: recipient,
      tokenAddr: address(_mockERC721),
      info: Token.Info({erc: Token.Standard.ERC721, id: 1, quantity: 0})
    });

    TransferPackage.Request[] memory _requests = new TransferPackage.Request[](2);
    _requests[0] = _request1;
    _requests[1] = _request2;

    vm.expectRevert(ErrInvalidRequest.selector);
    _mainchainGateway.bulkRequestDepositFor{value: 100}(_requests);

    vm.expectRevert(ErrInvalidRequest.selector);
    _mainchainGateway.requestDepositFor{value: 100}(_request1);

    vm.stopPrank();
  }

  function test_BulkDeposit_ERC721() external {
    _mockERC721.mint(sender, 0);
    _mockERC721.mint(sender, 1);
    vm.startPrank(sender);

    _mockERC721.setApprovalForAll(address(_mainchainGateway), true);

    TransferPackage.Request memory _request1 = TransferPackage.Request({
      recipientAddr: recipient,
      tokenAddr: address(_mockERC721),
      info: Token.Info({erc: Token.Standard.ERC721, id: 0, quantity: 0})
    });

    TransferPackage.Request memory _request2 = TransferPackage.Request({
      recipientAddr: recipient,
      tokenAddr: address(_mockERC721),
      info: Token.Info({erc: Token.Standard.ERC721, id: 1, quantity: 0})
    });

    TransferPackage.Request[] memory _requests = new TransferPackage.Request[](2);
    _requests[0] = _request1;
    _requests[1] = _request2;

    TransferPackage.Receipt memory _receipt1 = TransferPackage.into_deposit_receipt(
      _request1,
      sender,
      0,
      recipient,
      2021
    );
    TransferPackage.Receipt memory _receipt2 = TransferPackage.into_deposit_receipt(
      _request2,
      sender,
      1,
      recipient,
      2021
    );
    vm.expectEmit(true, true, true, true);
    emit Transfer(sender, address(_mainchainGateway), 0);
    vm.expectEmit(false, false, false, true);
    emit DepositRequested(TransferPackage.hash(_receipt1), _receipt1);
    vm.expectEmit(true, true, true, true);
    emit Transfer(sender, address(_mainchainGateway), 1);
    vm.expectEmit(false, false, false, true);
    emit DepositRequested(TransferPackage.hash(_receipt2), _receipt2);

    _mainchainGateway.bulkRequestDepositFor(_requests);

    assertEq(_mockERC721.ownerOf(0), address(_mainchainGateway));
    assertEq(_mockERC721.ownerOf(1), address(_mainchainGateway));

    vm.stopPrank();
  }

  function test_BulkDeposit_ERC20() external {
    vm.deal(sender, 100);

    vm.startPrank(sender);
    _weth.deposit{value: 100}();
    _weth.approve(address(_mainchainGateway), 100);

    console.log(address(_weth));

    TransferPackage.Request memory _request1 = TransferPackage.Request({
      recipientAddr: recipient,
      tokenAddr: address(_weth),
      info: Token.Info({erc: Token.Standard.ERC20, id: 0, quantity: 30})
    });

    TransferPackage.Request memory _request2 = TransferPackage.Request({
      recipientAddr: recipient,
      tokenAddr: address(_weth),
      info: Token.Info({erc: Token.Standard.ERC20, id: 0, quantity: 70})
    });
    TransferPackage.Request[] memory _requests = new TransferPackage.Request[](2);
    _requests[0] = _request1;
    _requests[1] = _request2;

    _mainchainGateway.bulkRequestDepositFor(_requests);
    // gateway automatically withdraw ETH from received WETH
    assertEq(address(_mainchainGateway).balance, 100);

    vm.stopPrank();
  }

  function test_BulkDeposit_ERC721AndNativeToken() external {
    vm.deal(sender, 100);

    _mockERC721.mint(sender, 0);
    _mockERC721.mint(sender, 1);
    vm.startPrank(sender);

    _mockERC721.setApprovalForAll(address(_mainchainGateway), true);

    TransferPackage.Request memory _request1 = TransferPackage.Request({
      recipientAddr: recipient,
      tokenAddr: address(0),
      info: Token.Info({erc: Token.Standard.ERC20, id: 0, quantity: 100})
    });

    TransferPackage.Request memory _request2 = TransferPackage.Request({
      recipientAddr: recipient,
      tokenAddr: address(_mockERC721),
      info: Token.Info({erc: Token.Standard.ERC721, id: 1, quantity: 0})
    });
    TransferPackage.Request[] memory _requests = new TransferPackage.Request[](2);
    _requests[0] = _request1;
    _requests[1] = _request2;

    _request1.tokenAddr = address(_weth);
    TransferPackage.Receipt memory _receipt1 = TransferPackage.into_deposit_receipt(
      _request1,
      sender,
      0,
      recipient,
      2021
    );
    _request1.tokenAddr = address(0);
    TransferPackage.Receipt memory _receipt2 = TransferPackage.into_deposit_receipt(
      _request2,
      sender,
      1,
      recipient,
      2021
    );
    vm.expectEmit(false, false, false, true);
    emit DepositRequested(TransferPackage.hash(_receipt1), _receipt1);
    vm.expectEmit(true, true, true, true);
    emit Transfer(sender, address(_mainchainGateway), 1);
    vm.expectEmit(false, false, false, true);
    emit DepositRequested(TransferPackage.hash(_receipt2), _receipt2);

    _mainchainGateway.bulkRequestDepositFor{value: 100}(_requests);

    assertEq(address(_mainchainGateway).balance, 100);
    assertEq(_mockERC721.ownerOf(1), address(_mainchainGateway));

    vm.stopPrank();
  }

  function test_RevertWhen_ReceiptsAndSignaturesLengthsMismatch() external {
    TransferPackage.Receipt memory _receipt = TransferPackage.Receipt({
      id: 0,
      kind: TransferPackage.Kind.Withdrawal,
      mainchain: Token.Owner({
        addr: sender,
        tokenAddr: address(_mockERC721),
        chainId: 0
      }),
      ronin: Token.Owner({
        addr: sender,
        tokenAddr: recipient,
        chainId: 2021
      }),
      info: Token.Info({
        erc: Token.Standard.ERC721,
        id: 4,
        quantity: 0
      })
    });

    TransferPackage.Receipt[] memory _receipts = new TransferPackage.Receipt[](1);
    _receipts[0] = _receipt;
    SignatureConsumer.Signature[][] memory _signatures = new SignatureConsumer.Signature[][](2);

    vm.expectRevert(IMainchainGatewayV3.ErrReceiptAndSignatureLengthsMismatch.selector);
    _mainchainGateway.bulkSubmitWithdrawal(_receipts, _signatures);
  }

  // The MockBridgeManager accepts every recovered address as the bridge operator, so we only
  // need to input a valid ECDSA signature without needing to care for the recoved address.
  function test_BulkSubmitWithdrawal() external {
    vm.deal(address(_mainchainGateway), 100);

    TransferPackage.Receipt memory _receipt1 = TransferPackage.Receipt({
      id: 0,
      kind: TransferPackage.Kind.Withdrawal,
      mainchain: Token.Owner({
        addr: sender,
        tokenAddr: address(_mockERC721),
        chainId: 31337
      }),
      ronin: Token.Owner({
        addr: sender,
        tokenAddr: recipient,
        chainId: 2021
      }),
      info: Token.Info({
        erc: Token.Standard.ERC721,
        id: 4,
        quantity: 0
      })
    });

    TransferPackage.Receipt memory _receipt2 = TransferPackage.Receipt({
      id: 1,
      kind: TransferPackage.Kind.Withdrawal,
      mainchain: Token.Owner({
        addr: sender,
        tokenAddr: address(_mockERC721),
        chainId: 31337
      }),
      ronin: Token.Owner({
        addr: sender,
        tokenAddr: recipient,
        chainId: 2021
      }),
      info: Token.Info({
        erc: Token.Standard.ERC721,
        id: 5,
        quantity: 0
      })
    });

    TransferPackage.Receipt memory _receipt3 = TransferPackage.Receipt({
      id: 2,
      kind: TransferPackage.Kind.Withdrawal,
      mainchain: Token.Owner({
        addr: sender,
        tokenAddr: address(_weth),
        chainId: 31337
      }),
      ronin: Token.Owner({
        addr: sender,
        tokenAddr: recipient,
        chainId: 2021
      }),
      info: Token.Info({
        erc: Token.Standard.ERC20,
        id: 0,
        quantity: 100
      })
    });

    TransferPackage.Receipt[] memory _receipts = new TransferPackage.Receipt[](3);
    _receipts[0] = _receipt1;
    _receipts[1] = _receipt2;
    _receipts[2] = _receipt3;

    // Random but valid signatures, random addresses will be recovered
    SignatureConsumer.Signature[][] memory _signatures = new SignatureConsumer.Signature[][](3);
    _signatures[0] = new SignatureConsumer.Signature[](1);
    _signatures[0][0] = SignatureConsumer.Signature({
      v: uint8(28),
      r: bytes32(0x1ab286bd68e39f0d7bfa0b98dd78c0054074621bd300f7e8ad56f3e320404fd5),
      s: bytes32(0x71051dfefae2e64042d50783537b35ad9edef35f61fb0149a07d5360e7232170)
    });
    _signatures[1] = _signatures[0];
    _signatures[2] = _signatures[0];

    _mainchainGateway.bulkSubmitWithdrawal(_receipts, _signatures);
    assertEq(sender.balance, 100);
    assertEq(_mockERC721.ownerOf(4), sender);
    assertEq(_mockERC721.ownerOf(5), sender);
  }
}
