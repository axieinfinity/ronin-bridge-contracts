/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockLogicValidatorSetV2,
  MockLogicValidatorSetV2Interface,
} from "../MockLogicValidatorSetV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "version",
        type: "string",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [],
    name: "currentPeriod",
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
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "wrapUpEpoch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101f0806100206000396000f3fe6080604052600436106100385760003560e01c8063060406181461009957806354fd4d50146100bc57806372e46810146100ed57600080fd5b36610094577feb7115a99b4ff3975015662e8f8d0434763af973215290ec6d1f8068233ff79f61007d6040805180820190915260028152612b1960f11b602082015290565b60405161008a9190610123565b60405180910390a1005b600080fd5b3480156100a557600080fd5b506000546040519081526020015b60405180910390f35b3480156100c857600080fd5b5060408051808201825260028152612b1960f11b602082015290516100b39190610123565b6100f56100f7565b005b610102606443610171565b60000361012157600160008082825461011b9190610193565b90915550505b565b600060208083528351808285015260005b8181101561015057858101830151858201604001528201610134565b506000604082860101526040601f19601f8301168501019250505092915050565b60008261018e57634e487b7160e01b600052601260045260246000fd5b500690565b808201808211156101b457634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220277cf19b5129fa882c02d338a12c167a9cc89bce021830530903884f9461590864736f6c63430008110033";

type MockLogicValidatorSetV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockLogicValidatorSetV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockLogicValidatorSetV2__factory extends ContractFactory {
  constructor(...args: MockLogicValidatorSetV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockLogicValidatorSetV2> {
    return super.deploy(overrides || {}) as Promise<MockLogicValidatorSetV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockLogicValidatorSetV2 {
    return super.attach(address) as MockLogicValidatorSetV2;
  }
  connect(signer: Signer): MockLogicValidatorSetV2__factory {
    return super.connect(signer) as MockLogicValidatorSetV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockLogicValidatorSetV2Interface {
    return new utils.Interface(_abi) as MockLogicValidatorSetV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockLogicValidatorSetV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockLogicValidatorSetV2;
  }
}
