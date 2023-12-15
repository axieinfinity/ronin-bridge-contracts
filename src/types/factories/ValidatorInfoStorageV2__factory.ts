/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ValidatorInfoStorageV2,
  ValidatorInfoStorageV2Interface,
} from "../ValidatorInfoStorageV2";

const _abi = [
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
    name: "ErrInvalidMaxPrioritizedValidatorNumber",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "MaxPrioritizedValidatorNumberUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "MaxValidatorNumberUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "getBlockProducers",
    outputs: [
      {
        internalType: "address[]",
        name: "_result",
        type: "address[]",
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
    name: "getValidators",
    outputs: [
      {
        internalType: "address[]",
        name: "_validatorList",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isBlockProducer",
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
  {
    inputs: [],
    name: "maxPrioritizedValidatorNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "_maximumPrioritizedValidatorNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxValidatorNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "_maximumValidatorNumber",
        type: "uint256",
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
        name: "_number",
        type: "uint256",
      },
    ],
    name: "setMaxPrioritizedValidatorNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_max",
        type: "uint256",
      },
    ],
    name: "setMaxValidatorNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBlockProducers",
    outputs: [
      {
        internalType: "uint256",
        name: "_total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "validatorCount",
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
];

export class ValidatorInfoStorageV2__factory {
  static readonly abi = _abi;
  static createInterface(): ValidatorInfoStorageV2Interface {
    return new utils.Interface(_abi) as ValidatorInfoStorageV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidatorInfoStorageV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ValidatorInfoStorageV2;
  }
}
