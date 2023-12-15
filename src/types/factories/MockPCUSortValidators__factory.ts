/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockPCUSortValidators,
  MockPCUSortValidatorsInterface,
} from "../MockPCUSortValidators";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_precompile",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ErrCallPrecompiled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_validators",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_weights",
        type: "uint256[]",
      },
    ],
    name: "callPrecompile",
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
    inputs: [],
    name: "precompileSortValidatorsAddress",
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
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setPrecompileSortValidatorAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161049f38038061049f83398101604081905261002f91610050565b600080546001600160a01b0319166001600160a01b03831617905550610080565b60006020828403121561006257600080fd5b81516001600160a01b038116811461007957600080fd5b9392505050565b6104108061008f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063326bc856146100465780638d559c3814610078578063f40e88ca14610098575b600080fd5b6100766100543660046101fe565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b005b6000546040516001600160a01b0390911681526020015b60405180910390f35b6100ab6100a636600461027a565b6100b8565b60405161008f919061032a565b60606101278585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060408051602080890282810182019093528882529093508892508791829185019084908082843760009201919091525061013092505050565b95945050505050565b606060006101466000546001600160a01b031690565b90506000600190506000858560405160240161016392919061033d565b60408051601f19818403018152919052602080820180516001600160e01b031663788341af60e01b17905281518851929350916000916101a391906103aa565b6101ae9060406103c7565b90506020830181878483895afa6101c457600094505b503d6101cf57600093505b602086019550836101f357604051630fc2632160e01b815260040160405180910390fd5b505050505092915050565b60006020828403121561021057600080fd5b81356001600160a01b038116811461022757600080fd5b9392505050565b60008083601f84011261024057600080fd5b50813567ffffffffffffffff81111561025857600080fd5b6020830191508360208260051b850101111561027357600080fd5b9250929050565b6000806000806040858703121561029057600080fd5b843567ffffffffffffffff808211156102a857600080fd5b6102b48883890161022e565b909650945060208701359150808211156102cd57600080fd5b506102da8782880161022e565b95989497509550505050565b600081518084526020808501945080840160005b8381101561031f5781516001600160a01b0316875295820195908201906001016102fa565b509495945050505050565b60208152600061022760208301846102e6565b60408152600061035060408301856102e6565b82810360208481019190915284518083528582019282019060005b818110156103875784518352938301939183019160010161036b565b5090979650505050505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176103c1576103c1610394565b92915050565b808201808211156103c1576103c161039456fea2646970667358221220b8e52e0e48eb335c02c663edbd2441c8bc4d867a8d79fa0f37193a491b0aa8bb64736f6c63430008110033";

type MockPCUSortValidatorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockPCUSortValidatorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockPCUSortValidators__factory extends ContractFactory {
  constructor(...args: MockPCUSortValidatorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _precompile: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockPCUSortValidators> {
    return super.deploy(
      _precompile,
      overrides || {}
    ) as Promise<MockPCUSortValidators>;
  }
  getDeployTransaction(
    _precompile: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_precompile, overrides || {});
  }
  attach(address: string): MockPCUSortValidators {
    return super.attach(address) as MockPCUSortValidators;
  }
  connect(signer: Signer): MockPCUSortValidators__factory {
    return super.connect(signer) as MockPCUSortValidators__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockPCUSortValidatorsInterface {
    return new utils.Interface(_abi) as MockPCUSortValidatorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPCUSortValidators {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockPCUSortValidators;
  }
}
