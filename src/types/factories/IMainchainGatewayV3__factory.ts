/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMainchainGatewayV3,
  IMainchainGatewayV3Interface,
} from "../IMainchainGatewayV3";

const _abi = [
  {
    inputs: [],
    name: "ErrQueryForApprovedWithdrawal",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrQueryForInsufficientVoteWeight",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrQueryForProcessedWithdrawal",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrReachedDailyWithdrawalLimit",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "receiptHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "enum Transfer.Kind",
            name: "kind",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "mainchain",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "ronin",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Token.Standard",
                name: "erc",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "quantity",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Info",
            name: "info",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Transfer.Receipt",
        name: "receipt",
        type: "tuple",
      },
    ],
    name: "DepositRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "mainchainTokens",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "roninTokens",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "enum Token.Standard[]",
        name: "standards",
        type: "uint8[]",
      },
    ],
    name: "TokenMapped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "receiptHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "enum Transfer.Kind",
            name: "kind",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "mainchain",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "ronin",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Token.Standard",
                name: "erc",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "quantity",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Info",
            name: "info",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Transfer.Receipt",
        name: "receipt",
        type: "tuple",
      },
    ],
    name: "WithdrawalLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "receiptHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "enum Transfer.Kind",
            name: "kind",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "mainchain",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "ronin",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Token.Standard",
                name: "erc",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "quantity",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Info",
            name: "info",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Transfer.Receipt",
        name: "receipt",
        type: "tuple",
      },
    ],
    name: "WithdrawalUnlocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "receiptHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "enum Transfer.Kind",
            name: "kind",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "mainchain",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "ronin",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Token.Standard",
                name: "erc",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "quantity",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Info",
            name: "info",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Transfer.Receipt",
        name: "receipt",
        type: "tuple",
      },
    ],
    name: "Withdrew",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IWETH",
        name: "weth",
        type: "address",
      },
    ],
    name: "WrappedNativeTokenContractUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mainchainToken",
        type: "address",
      },
    ],
    name: "getRoninToken",
    outputs: [
      {
        components: [
          {
            internalType: "enum Token.Standard",
            name: "erc",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "tokenAddr",
            type: "address",
          },
        ],
        internalType: "struct MappedTokenConsumer.MappedToken",
        name: "_token",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_mainchainTokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_roninTokens",
        type: "address[]",
      },
      {
        internalType: "enum Token.Standard[]",
        name: "_standards",
        type: "uint8[]",
      },
    ],
    name: "mapTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_mainchainTokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_roninTokens",
        type: "address[]",
      },
      {
        internalType: "enum Token.Standard[]",
        name: "_standards",
        type: "uint8[]",
      },
      {
        internalType: "uint256[][4]",
        name: "_thresholds",
        type: "uint256[][4]",
      },
    ],
    name: "mapTokensAndThresholds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "recipientAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenAddr",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum Token.Standard",
                name: "erc",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "quantity",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Info",
            name: "info",
            type: "tuple",
          },
        ],
        internalType: "struct Transfer.Request",
        name: "_request",
        type: "tuple",
      },
    ],
    name: "requestDepositFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IWETH",
        name: "_wrappedToken",
        type: "address",
      },
    ],
    name: "setWrappedNativeTokenContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "enum Transfer.Kind",
            name: "kind",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "mainchain",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "ronin",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Token.Standard",
                name: "erc",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "quantity",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Info",
            name: "info",
            type: "tuple",
          },
        ],
        internalType: "struct Transfer.Receipt",
        name: "_receipt",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct SignatureConsumer.Signature[]",
        name: "_signatures",
        type: "tuple[]",
      },
    ],
    name: "submitWithdrawal",
    outputs: [
      {
        internalType: "bool",
        name: "_locked",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "enum Transfer.Kind",
            name: "kind",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "mainchain",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Owner",
            name: "ronin",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Token.Standard",
                name: "erc",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "quantity",
                type: "uint256",
              },
            ],
            internalType: "struct Token.Info",
            name: "info",
            type: "tuple",
          },
        ],
        internalType: "struct Transfer.Receipt",
        name: "_receipt",
        type: "tuple",
      },
    ],
    name: "unlockWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "withdrawalId",
        type: "uint256",
      },
    ],
    name: "withdrawalHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "withdrawalId",
        type: "uint256",
      },
    ],
    name: "withdrawalLocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IMainchainGatewayV3__factory {
  static readonly abi = _abi;
  static createInterface(): IMainchainGatewayV3Interface {
    return new utils.Interface(_abi) as IMainchainGatewayV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMainchainGatewayV3 {
    return new Contract(address, _abi, signerOrProvider) as IMainchainGatewayV3;
  }
}
