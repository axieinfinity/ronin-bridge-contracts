/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  SlashDoubleSign,
  SlashDoubleSignInterface,
} from "../SlashDoubleSign";

const _abi = [
  {
    inputs: [],
    name: "ErrCallPrecompiled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum ContractType",
        name: "contractType",
        type: "uint8",
      },
    ],
    name: "ErrContractTypeNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrEvidenceAlreadySubmitted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "msgSig",
        type: "bytes4",
      },
      {
        internalType: "enum RoleAccess",
        name: "expectedRole",
        type: "uint8",
      },
    ],
    name: "ErrUnauthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "ErrZeroCodeContract",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum ContractType",
        name: "contractType",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "ContractUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "slashDoubleSignAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "doubleSigningJailUntilBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "doubleSigningOffsetLimitBlock",
        type: "uint256",
      },
    ],
    name: "DoubleSignSlashingConfigsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum IBaseSlash.SlashType",
        name: "slashType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
    ],
    name: "Slashed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "enum ContractType",
        name: "contractType",
        type: "uint8",
      },
    ],
    name: "getContract",
    outputs: [
      {
        internalType: "address",
        name: "contract_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDoubleSignSlashingConfigs",
    outputs: [
      {
        internalType: "uint256",
        name: "slashDoubleSignAmount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "doubleSigningJailUntilBlock_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "doubleSigningOffsetLimitBlock_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "precompileValidateDoubleSignAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum ContractType",
        name: "contractType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "setContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_slashAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_jailUntilBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offsetLimitBlock",
        type: "uint256",
      },
    ],
    name: "setDoubleSignSlashingConfigs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_consensusAddr",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_header1",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_header2",
        type: "bytes",
      },
    ],
    name: "slashDoubleSign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class SlashDoubleSign__factory {
  static readonly abi = _abi;
  static createInterface(): SlashDoubleSignInterface {
    return new utils.Interface(_abi) as SlashDoubleSignInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SlashDoubleSign {
    return new Contract(address, _abi, signerOrProvider) as SlashDoubleSign;
  }
}
