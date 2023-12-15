/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RoninTrustedOrganization,
  RoninTrustedOrganizationInterface,
} from "../RoninTrustedOrganization";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "ErrBridgeVoterIsAlreadyAdded",
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
    name: "ErrConsensusAddressIsAlreadyAdded",
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
    name: "ErrConsensusAddressIsNotAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "msgSig",
        type: "bytes4",
      },
    ],
    name: "ErrDuplicated",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrEmptyArray",
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
    name: "ErrGovernorAddressIsAlreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidRequest",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "msgSig",
        type: "bytes4",
      },
    ],
    name: "ErrInvalidThreshold",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "msgSig",
        type: "bytes4",
      },
    ],
    name: "ErrInvalidVoteWeight",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrQueryForDupplicated",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrQueryForNonExistentConsensusAddress",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "numerator",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousNumerator",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousDenominator",
        type: "uint256",
      },
    ],
    name: "ThresholdUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "consensusAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridgeVoter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedBlock",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IRoninTrustedOrganization.TrustedOrganization[]",
        name: "orgs",
        type: "tuple[]",
      },
    ],
    name: "TrustedOrganizationsAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "orgs",
        type: "address[]",
      },
    ],
    name: "TrustedOrganizationsRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "consensusAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridgeVoter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedBlock",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IRoninTrustedOrganization.TrustedOrganization[]",
        name: "orgs",
        type: "tuple[]",
      },
    ],
    name: "TrustedOrganizationsUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "consensusAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridgeVoter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedBlock",
            type: "uint256",
          },
        ],
        internalType: "struct IRoninTrustedOrganization.TrustedOrganization[]",
        name: "_list",
        type: "tuple[]",
      },
    ],
    name: "addTrustedOrganizations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_voteWeight",
        type: "uint256",
      },
    ],
    name: "checkThreshold",
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
    name: "countTrustedOrganizations",
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
    name: "getAllTrustedOrganizations",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "consensusAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridgeVoter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedBlock",
            type: "uint256",
          },
        ],
        internalType: "struct IRoninTrustedOrganization.TrustedOrganization[]",
        name: "_list",
        type: "tuple[]",
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
    name: "getBridgeVoterWeight",
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
        internalType: "address[]",
        name: "_list",
        type: "address[]",
      },
    ],
    name: "getBridgeVoterWeights",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_res",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_consensusAddr",
        type: "address",
      },
    ],
    name: "getConsensusWeight",
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
        internalType: "address[]",
        name: "_list",
        type: "address[]",
      },
    ],
    name: "getConsensusWeights",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_res",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_governor",
        type: "address",
      },
    ],
    name: "getGovernorWeight",
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
        internalType: "address[]",
        name: "_list",
        type: "address[]",
      },
    ],
    name: "getGovernorWeights",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_res",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "num_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denom_",
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
        name: "_consensusAddr",
        type: "address",
      },
    ],
    name: "getTrustedOrganization",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "consensusAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridgeVoter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedBlock",
            type: "uint256",
          },
        ],
        internalType: "struct IRoninTrustedOrganization.TrustedOrganization",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256",
      },
    ],
    name: "getTrustedOrganizationAt",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "consensusAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridgeVoter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedBlock",
            type: "uint256",
          },
        ],
        internalType: "struct IRoninTrustedOrganization.TrustedOrganization",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "consensusAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridgeVoter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedBlock",
            type: "uint256",
          },
        ],
        internalType: "struct IRoninTrustedOrganization.TrustedOrganization[]",
        name: "_trustedOrgs",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "__num",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "__denom",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumVoteWeight",
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
        internalType: "address[]",
        name: "_list",
        type: "address[]",
      },
    ],
    name: "removeTrustedOrganizations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numerator",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_denominator",
        type: "uint256",
      },
    ],
    name: "setThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_list",
        type: "address[]",
      },
    ],
    name: "sumBridgeVoterWeights",
    outputs: [
      {
        internalType: "uint256",
        name: "_res",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_list",
        type: "address[]",
      },
    ],
    name: "sumConsensusWeights",
    outputs: [
      {
        internalType: "uint256",
        name: "_res",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_list",
        type: "address[]",
      },
    ],
    name: "sumGovernorWeights",
    outputs: [
      {
        internalType: "uint256",
        name: "_res",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalWeights",
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
        components: [
          {
            internalType: "address",
            name: "consensusAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "bridgeVoter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedBlock",
            type: "uint256",
          },
        ],
        internalType: "struct IRoninTrustedOrganization.TrustedOrganization[]",
        name: "_list",
        type: "tuple[]",
      },
    ],
    name: "updateTrustedOrganizations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611eb3806100206000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063b505a07c116100b8578063d9d5dadb1161007c578063d9d5dadb146102d5578063dafae408146102e8578063db6693a21461030b578063e75235b81461032b578063e8c0685e14610336578063f09267c21461034957600080fd5b8063b505a07c14610256578063b9c3620914610269578063cacf8fb514610291578063cc7e6b3b14610299578063d78392f8146102ac57600080fd5b80635f14a1c31161010a5780635f14a1c3146101fa578063708236251461020d5780637c37103c146102205780637de5dedd14610233578063926323d51461023b578063a85c7d6e1461024357600080fd5b80630ed285df14610147578063150740051461015c57806341feed1c1461017a578063520fce62146101b157806356241911146101d1575b600080fd5b61015a6101553660046119d3565b61035c565b005b610164610372565b6040516101719190611a52565b60405180910390f35b6101a3610188366004611abc565b6001600160a01b031660009081526005602052604090205490565b604051908152602001610171565b6101c46101bf366004611ad7565b61055e565b6040516101719190611b4c565b6101a36101df366004611abc565b6001600160a01b031660009081526007602052604090205490565b6101a3610208366004611ad7565b610629565b6101c461021b366004611ad7565b61068e565b61015a61022e366004611b84565b610752565b6101a3610880565b6003546101a3565b61015a610251366004611ad7565b6108bd565b61015a6102643660046119d3565b610967565b61027c610277366004611bd5565b610a06565b60408051928352602083019190915201610171565b6009546101a3565b6101c46102a7366004611ad7565b610a27565b6101a36102ba366004611abc565b6001600160a01b031660009081526006602052604090205490565b6101a36102e3366004611ad7565b610aeb565b6102fb6102f6366004611bf7565b610b50565b6040519015158152602001610171565b61031e610319366004611abc565b610b77565b6040516101719190611c10565b60015460025461027c565b6101a3610344366004611ad7565b610c16565b61031e610357366004611bf7565b610c7b565b610364610d81565b61036e8282610ddd565b5050565b60095460609067ffffffffffffffff81111561039057610390611c24565b6040519080825280602002602001820160405280156103e957816020015b6040805160a0810182526000808252602080830182905292820181905260608201819052608082015282526000199092019101816103ae5790505b5090506000805b8251811015610559576009818154811061040c5761040c611c3a565b9060005260206000200160009054906101000a90046001600160a01b031691508183828151811061043f5761043f611c3a565b60209081029190910101516001600160a01b039091169052600a80548290811061046b5761046b611c3a565b9060005260206000200160009054906101000a90046001600160a01b031683828151811061049b5761049b611c3a565b6020026020010151602001906001600160a01b031690816001600160a01b031681525050600b81815481106104d2576104d2611c3a565b9060005260206000200160009054906101000a90046001600160a01b031683828151811061050257610502611c3a565b6020908102919091018101516001600160a01b03928316604091820152918416600090815260059091522054835184908390811061054257610542611c3a565b6020908102919091010151606001526001016103f0565b505090565b60608167ffffffffffffffff81111561057957610579611c24565b6040519080825280602002602001820160405280156105a2578160200160208202803683370190505b50905060005b815181101561062257600560008585848181106105c7576105c7611c3a565b90506020020160208101906105dc9190611abc565b6001600160a01b03166001600160a01b031681526020019081526020016000205482828151811061060f5761060f611c3a565b60209081029190910101526001016105a8565b5092915050565b6000805b82811015610622576006600085858481811061064b5761064b611c3a565b90506020020160208101906106609190611abc565b6001600160a01b031681526020810191909152604001600020546106849083611c66565b915060010161062d565b60608167ffffffffffffffff8111156106a9576106a9611c24565b6040519080825280602002602001820160405280156106d2578160200160208202803683370190505b50905060005b815181101561062257600760008585848181106106f7576106f7611c3a565b905060200201602081019061070c9190611abc565b6001600160a01b03166001600160a01b031681526020019081526020016000205482828151811061073f5761073f611c3a565b60209081029190910101526001016106d8565b600054610100900460ff16158080156107725750600054600160ff909116105b8061078c5750303b15801561078c575060005460ff166001145b6107f45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610817576000805461ff0019166101001790555b8315610827576108278585610ddd565b6108318383610e52565b50508015610879576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b6000600254600160025460035460015461089a9190611c79565b6108a49190611c66565b6108ae9190611c90565b6108b89190611ca3565b905090565b6108c5610d81565b60008190036108e7576040516316ee9d3b60e11b815260040160405180910390fd5b60005b818110156109295761092183838381811061090757610907611c3a565b905060200201602081019061091c9190611abc565b610ee8565b6001016108ea565b507f121945697ac30ee0fc67821492cb685c65f0ea4d7f1b710fde44d6e2237f43a7828260405161095b929190611cc5565b60405180910390a15050565b61096f610d81565b6000819003610991576040516316ee9d3b60e11b815260040160405180910390fd5b60005b818110156109d4576109cc8383838181106109b1576109b1611c3a565b905060a002018036038101906109c79190611d11565b61124a565b600101610994565b507fe887c8106c09d1770c0ef0bf8ca62c54766f18b07506801865501783376cbeda828260405161095b929190611da2565b600080610a11610d81565b610a1b8484610e52565b915091505b9250929050565b60608167ffffffffffffffff811115610a4257610a42611c24565b604051908082528060200260200182016040528015610a6b578160200160208202803683370190505b50905060005b81518110156106225760066000858584818110610a9057610a90611c3a565b9050602002016020810190610aa59190611abc565b6001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610ad857610ad8611c3a565b6020908102919091010152600101610a71565b6000805b828110156106225760076000858584818110610b0d57610b0d611c3a565b9050602002016020810190610b229190611abc565b6001600160a01b03168152602081019190915260400160002054610b469083611c66565b9150600101610aef565b6000600354600154610b629190611c79565b600254610b6f9084611c79565b101592915050565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052905b600954811015610bfc57826001600160a01b031660098281548110610bca57610bca611c3a565b6000918252602090912001546001600160a01b031603610bf457610bed81610c7b565b9392505050565b600101610ba3565b5060405163e57fdbef60e01b815260040160405180910390fd5b6000805b828110156106225760056000858584818110610c3857610c38611c3a565b9050602002016020810190610c4d9190611abc565b6001600160a01b03168152602081019190915260400160002054610c719083611c66565b9150600101610c1a565b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152600060098381548110610cbb57610cbb611c3a565b9060005260206000200160009054906101000a90046001600160a01b031690506040518060a00160405280826001600160a01b03168152602001600a8581548110610d0857610d08611c3a565b600091825260209182902001546001600160a01b03168252600b8054929091019186908110610d3957610d39611c3a565b60009182526020808320909101546001600160a01b03908116845294909416808252600585526040808320548487015290825260089094528390205492019190915292915050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103546001600160a01b03163314610ddb576000356001600160e01b0319166001604051620f948f60ea1b81526004016107eb929190611e2b565b565b60005b81811015610e2057610e18838383818110610dfd57610dfd611c3a565b905060a00201803603810190610e139190611d11565b611571565b600101610de0565b507fc753dbf7952c70ff6b9fa7b626403aa1d2230d97136b635bd5e85bec72bcca6c828260405161095b929190611da2565b60008082841115610e84576040516387f6f09560e01b81526001600160e01b03196000351660048201526024016107eb565b50506001805460028054858455908490556004805493840190556040805183815260208101839052929391928592879290917f976f8a9c5bdf8248dec172376d6e2b80a8e3df2f0328e381c6db8e1cf138c0f8910160405180910390a49250929050565b6001600160a01b03811660009081526005602052604081205490819003610f2d576040516349f748eb60e01b81526001600160a01b03831660048201526024016107eb565b600954600090815b81811015610f8457846001600160a01b031660098281548110610f5a57610f5a611c3a565b6000918252602090912001546001600160a01b031603610f7c57809250610f84565b600101610f35565b508260036000828254610f979190611c90565b90915550506001600160a01b038416600090815260086020908152604080832083905560059091528120556009610fcf600183611c90565b81548110610fdf57610fdf611c3a565b600091825260209091200154600980546001600160a01b03909216918490811061100b5761100b611c3a565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600980548061104a5761104a611e67565b6001900381819060005260206000200160006101000a8154906001600160a01b030219169055905560066000600a848154811061108957611089611c3a565b60009182526020808320909101546001600160a01b03168352820192909252604001812055600a6110bb600183611c90565b815481106110cb576110cb611c3a565b600091825260209091200154600a80546001600160a01b0390921691849081106110f7576110f7611c3a565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600a80548061113657611136611e67565b6001900381819060005260206000200160006101000a8154906001600160a01b030219169055905560076000600b848154811061117557611175611c3a565b60009182526020808320909101546001600160a01b03168352820192909252604001812055600b6111a7600183611c90565b815481106111b7576111b7611c3a565b600091825260209091200154600b80546001600160a01b0390921691849081106111e3576111e3611c3a565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600b80548061122257611222611e67565b600082815260209020810160001990810180546001600160a01b031916905501905550505050565b611253816117bc565b80516001600160a01b03166000908152600560205260408120549081900361129c5781516040516349f748eb60e01b81526001600160a01b0390911660048201526024016107eb565b60095460005b8181101561156b5783600001516001600160a01b0316600982815481106112cb576112cb611c3a565b6000918252602090912001546001600160a01b0316036115635782600360008282546112f79190611c90565b9091555050606084015160038054600090611313908490611c66565b9250508190555083602001516001600160a01b0316600a828154811061133b5761133b611c3a565b6000918252602090912001546001600160a01b031614611416576020808501516001600160a01b031660009081526006909152604090205415611391576040516346da180960e01b815260040160405180910390fd5b60066000600a83815481106113a8576113a8611c3a565b60009182526020808320909101546001600160a01b03168352828101939093526040909101812055840151600a8054839081106113e7576113e7611c3a565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b83604001516001600160a01b0316600b828154811061143757611437611c3a565b6000918252602090912001546001600160a01b031614611511576040808501516001600160a01b03166000908152600760205220541561148a576040516346da180960e01b815260040160405180910390fd5b60076000600b83815481106114a1576114a1611c3a565b60009182526020808320909101546001600160a01b031683528201929092526040908101822091909155840151600b8054839081106114e2576114e2611c3a565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b50505060608101805182516001600160a01b0390811660009081526005602090815260408083209490945584518187015184168352600682528483205593519483015190911681526007909252902055565b6001016112a2565b50505050565b6080810151156115945760405163129c2ce160e31b815260040160405180910390fd5b61159d816117bc565b80516001600160a01b0316600090815260056020526040902054156115e357805160405163ada9a35360e01b81526001600160a01b0390911660048201526024016107eb565b6020808201516001600160a01b031660009081526006909152604090205415611630576020810151604051637f5e2f5960e11b81526001600160a01b0390911660048201526024016107eb565b6040808201516001600160a01b03166000908152600760205220541561167a576040808201519051630f69702d60e01b81526001600160a01b0390911660048201526024016107eb565b8051600980546001808201835560009283527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af90910180546001600160a01b03199081166001600160a01b0395861617909155606085018051865186168552600560209081526040808720929092558088018051600a805480890182559089527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180548716918a16919091179055835190518816875260068252828720558188018051600b8054978801815588527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db99096018054909516958816959095179093558151935186168552600783528085209390935585519094168352600890528120439055905160038054919290916117b4908490611c66565b909155505050565b80606001516000036117ef57604051637f11b8a360e11b81526001600160e01b03196000351660048201526024016107eb565b604080516003808252608082019092526000916020820160608036833701905050905081600001518160008151811061182a5761182a611c3a565b60200260200101906001600160a01b031690816001600160a01b03168152505081602001518160018151811061186257611862611c3a565b60200260200101906001600160a01b031690816001600160a01b03168152505081604001518160028151811061189a5761189a611c3a565b60200260200101906001600160a01b031690816001600160a01b0316815250506118c3816118ef565b1561036e57604051630d697db160e11b81526001600160e01b03196000351660048201526024016107eb565b6000815160000361190257506000919050565b60005b600183510381101561198557600181015b835181101561197c5783818151811061193157611931611c3a565b60200260200101516001600160a01b031684838151811061195457611954611c3a565b60200260200101516001600160a01b031603611974575060019392505050565b600101611916565b50600101611905565b50600092915050565b60008083601f8401126119a057600080fd5b50813567ffffffffffffffff8111156119b857600080fd5b60208301915083602060a083028501011115610a2057600080fd5b600080602083850312156119e657600080fd5b823567ffffffffffffffff8111156119fd57600080fd5b611a098582860161198e565b90969095509350505050565b80516001600160a01b0390811683526020808301518216908401526040808301519091169083015260608082015190830152608090810151910152565b6020808252825182820181905260009190848201906040850190845b81811015611a9457611a81838551611a15565b9284019260a09290920191600101611a6e565b50909695505050505050565b80356001600160a01b0381168114611ab757600080fd5b919050565b600060208284031215611ace57600080fd5b610bed82611aa0565b60008060208385031215611aea57600080fd5b823567ffffffffffffffff80821115611b0257600080fd5b818501915085601f830112611b1657600080fd5b813581811115611b2557600080fd5b8660208260051b8501011115611b3a57600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015611a9457835183529284019291840191600101611b68565b60008060008060608587031215611b9a57600080fd5b843567ffffffffffffffff811115611bb157600080fd5b611bbd8782880161198e565b90989097506020870135966040013595509350505050565b60008060408385031215611be857600080fd5b50508035926020909101359150565b600060208284031215611c0957600080fd5b5035919050565b60a08101611c1e8284611a15565b92915050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115611c1e57611c1e611c50565b8082028115828204841417611c1e57611c1e611c50565b81810381811115611c1e57611c1e611c50565b600082611cc057634e487b7160e01b600052601260045260246000fd5b500490565b60208082528181018390526000908460408401835b86811015611d06576001600160a01b03611cf384611aa0565b1682529183019190830190600101611cda565b509695505050505050565b600060a08284031215611d2357600080fd5b60405160a0810181811067ffffffffffffffff82111715611d5457634e487b7160e01b600052604160045260246000fd5b604052611d6083611aa0565b8152611d6e60208401611aa0565b6020820152611d7f60408401611aa0565b604082015260608301356060820152608083013560808201528091505092915050565b6020808252818101839052600090604080840186845b87811015611e1e576001600160a01b0380611dd284611aa0565b16845280611de1878501611aa0565b168685015280611df2868501611aa0565b168486015250606082810135908401526080808301359084015260a09283019290910190600101611db8565b5090979650505050505050565b6001600160e01b03198316815260408101600b8310611e5a57634e487b7160e01b600052602160045260246000fd5b8260208301529392505050565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220a19921e3da2252cf5fac0187c3b34b8869f51c7d1bf7582d9e35510ea131251a64736f6c63430008110033";

type RoninTrustedOrganizationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoninTrustedOrganizationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoninTrustedOrganization__factory extends ContractFactory {
  constructor(...args: RoninTrustedOrganizationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RoninTrustedOrganization> {
    return super.deploy(overrides || {}) as Promise<RoninTrustedOrganization>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RoninTrustedOrganization {
    return super.attach(address) as RoninTrustedOrganization;
  }
  connect(signer: Signer): RoninTrustedOrganization__factory {
    return super.connect(signer) as RoninTrustedOrganization__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoninTrustedOrganizationInterface {
    return new utils.Interface(_abi) as RoninTrustedOrganizationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoninTrustedOrganization {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RoninTrustedOrganization;
  }
}
