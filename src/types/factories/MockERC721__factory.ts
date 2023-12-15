/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockERC721, MockERC721Interface } from "../MockERC721";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "MINTER_ROLE",
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
    name: "PAUSER_ROLE",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_minters",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051602080820183526000808352835180830185528181528451928301909452815290919082826002620000498382620003b8565b506003620000588282620003b8565b5050600c805460ff1916905550600e620000738282620003b8565b5062000081600033620000ed565b620000ad7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000ed565b620000d97f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000ed565b50620000e7915050620000fd565b62000484565b620000f98282620001bf565b5050565b600f54610100900460ff16156200016a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b600f5460ff9081161015620001bd57600f805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b620001d682826200020260201b62000e971760201c565b6000828152600160209081526040909120620001fd91839062000f1b620002a2821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000f9576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200025e3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620002b9836001600160a01b038416620002c2565b90505b92915050565b60008181526001830160205260408120546200030b57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620002bc565b506000620002bc565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200033f57607f821691505b6020821081036200036057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001fd57600081815260208120601f850160051c810160208610156200038f5750805b601f850160051c820191505b81811015620003b0578281556001016200039b565b505050505050565b81516001600160401b03811115620003d457620003d462000314565b620003ec81620003e584546200032a565b8462000366565b602080601f8311600181146200042457600084156200040b5750858301515b600019600386901b1c1916600185901b178555620003b0565b600085815260208120601f198616915b82811015620004555788860151825594840194600190910190840162000434565b5085821015620004745787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61285680620004946000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c80636352211e1161011a578063a22cb465116100ad578063d53913931161007c578063d539139314610420578063d547741f14610435578063e63ab1e914610448578063e985e9c51461045d578063fbc46ada1461049957600080fd5b8063a22cb465146103d4578063b88d4fde146103e7578063c87b56dd146103fa578063ca15c8731461040d57600080fd5b80639010d07c116100e95780639010d07c1461039e57806391d14854146103b157806395d89b41146103c4578063a217fddf146103cc57600080fd5b80636352211e1461035d5780636a6278421461037057806370a08231146103835780638456cb591461039657600080fd5b80632f745c591161019257806342842e0e1161016157806342842e0e1461031957806342966c681461032c5780634f6ccce71461033f5780635c975abb1461035257600080fd5b80632f745c59146102d857806336568abe146102eb5780633f4ba83a146102fe57806340c10f191461030657600080fd5b806318160ddd116101ce57806318160ddd1461027d57806323b872dd1461028f578063248a9ca3146102a25780632f2ff15d146102c557600080fd5b806301ffc9a71461020057806306fdde0314610228578063081812fc1461023d578063095ea7b314610268575b600080fd5b61021361020e366004612036565b6104ac565b60405190151581526020015b60405180910390f35b6102306104bd565b60405161021f91906120a3565b61025061024b3660046120b6565b61054f565b6040516001600160a01b03909116815260200161021f565b61027b6102763660046120eb565b610576565b005b600a545b60405190815260200161021f565b61027b61029d366004612115565b610690565b6102816102b03660046120b6565b60009081526020819052604090206001015490565b61027b6102d3366004612151565b6106c2565b6102816102e63660046120eb565b6106e7565b61027b6102f9366004612151565b61077d565b61027b6107fb565b61027b6103143660046120eb565b610891565b61027b610327366004612115565b6108b3565b61027b61033a3660046120b6565b6108ce565b61028161034d3660046120b6565b6108ff565b600c5460ff16610213565b61025061036b3660046120b6565b610992565b61027b61037e36600461217d565b6109f2565b61028161039136600461217d565b610a9c565b61027b610b22565b6102506103ac366004612198565b610bb4565b6102136103bf366004612151565b610bd3565b610230610bfc565b610281600081565b61027b6103e23660046121ba565b610c0b565b61027b6103f5366004612282565b610c16565b6102306104083660046120b6565b610c4e565b61028161041b3660046120b6565b610cb4565b61028160008051602061280183398151915281565b61027b610443366004612151565b610ccb565b6102816000805160206127e183398151915281565b61021361046b3660046122fe565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b61027b6104a7366004612348565b610cf0565b60006104b782610f30565b92915050565b6060601080546104cc90612415565b80601f01602080910402602001604051908101604052809291908181526020018280546104f890612415565b80156105455780601f1061051a57610100808354040283529160200191610545565b820191906000526020600020905b81548152906001019060200180831161052857829003601f168201915b5050505050905090565b600061055a82610f55565b506000908152600660205260409020546001600160a01b031690565b600061058182610992565b9050806001600160a01b0316836001600160a01b0316036105f35760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061060f575061060f813361046b565b6106815760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016105ea565b61068b8383610fb4565b505050565b61069b335b82611022565b6106b75760405162461bcd60e51b81526004016105ea9061244f565b61068b8383836110a1565b6000828152602081905260409020600101546106dd81611248565b61068b8383611252565b60006106f283610a9c565b82106107545760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016105ea565b506001600160a01b03919091166000908152600860209081526040808320938352929052205490565b6001600160a01b03811633146107ed5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105ea565b6107f78282611274565b5050565b6108136000805160206127e183398151915233610bd3565b610887576040805162461bcd60e51b81526020600482015260248101919091527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f20756e706175736560648201526084016105ea565b61088f611296565b565b6000805160206128018339815191526108a981611248565b61068b83836112e8565b61068b83838360405180602001604052806000815250610c16565b6108d733610695565b6108f35760405162461bcd60e51b81526004016105ea9061244f565b6108fc81611436565b50565b600061090a600a5490565b821061096d5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016105ea565b600a82815481106109805761098061249d565b90600052602060002001549050919050565b6000818152600460205260408120546001600160a01b0316806104b75760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016105ea565b610a0a60008051602061280183398151915233610bd3565b610a7c5760405162461bcd60e51b815260206004820152603d60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d7573742068617665206d696e74657220726f6c6520746f206d696e7400000060648201526084016105ea565b610a8e81610a89600d5490565b6112e8565b6108fc600d80546001019055565b60006001600160a01b038216610b065760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016105ea565b506001600160a01b031660009081526005602052604090205490565b610b3a6000805160206127e183398151915233610bd3565b610bac5760405162461bcd60e51b815260206004820152603e60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f207061757365000060648201526084016105ea565b61088f6114dd565b6000828152600160205260408120610bcc908361151a565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060601180546104cc90612415565b6107f7338383611526565b610c203383611022565b610c3c5760405162461bcd60e51b81526004016105ea9061244f565b610c48848484846115f4565b50505050565b6060610c5982610f55565b6000610c63611627565b90506000815111610c835760405180602001604052806000815250610bcc565b80610c8d84611636565b604051602001610c9e9291906124b3565b6040516020818303038152906040529392505050565b60008181526001602052604081206104b790611737565b600082815260208190526040902060010154610ce681611248565b61068b8383611274565b600f54610100900460ff1615808015610d105750600f54600160ff909116105b80610d2a5750303b158015610d2a5750600f5460ff166001145b610d8d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105ea565b600f805460ff191660011790558015610db057600f805461ff0019166101001790555b6010610dbc8782612528565b506011610dc98682612528565b50610dd5600085611741565b610ded6000805160206127e183398151915285611741565b60005b82811015610e4857610e36600080516020612801833981519152858584818110610e1c57610e1c61249d565b9050602002016020810190610e31919061217d565b611741565b80610e40816125fe565b915050610df0565b508015610e8f57600f805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b610ea18282610bd3565b6107f7576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610ed73390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610bcc836001600160a01b03841661174b565b60006001600160e01b0319821663780e9d6360e01b14806104b757506104b78261179a565b6000818152600460205260409020546001600160a01b03166108fc5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016105ea565b600081815260066020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610fe982610992565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061102e83610992565b9050806001600160a01b0316846001600160a01b0316148061107557506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b806110995750836001600160a01b031661108e8461054f565b6001600160a01b0316145b949350505050565b826001600160a01b03166110b482610992565b6001600160a01b0316146111185760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016105ea565b6001600160a01b03821661117a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105ea565b6111858383836117da565b611190600082610fb4565b6001600160a01b03831660009081526005602052604081208054600192906111b9908490612617565b90915550506001600160a01b03821660009081526005602052604081208054600192906111e790849061262a565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6108fc81336117e5565b61125c8282610e97565b600082815260016020526040902061068b9082610f1b565b61127e8282611849565b600082815260016020526040902061068b90826118ae565b61129e6118c3565b600c805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b03821661133e5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105ea565b6000818152600460205260409020546001600160a01b0316156113a35760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105ea565b6113af600083836117da565b6001600160a01b03821660009081526005602052604081208054600192906113d890849061262a565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061144182610992565b905061144f816000846117da565b61145a600083610fb4565b6001600160a01b0381166000908152600560205260408120805460019290611483908490612617565b909155505060008281526004602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6114e561190c565b600c805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586112cb3390565b6000610bcc8383611952565b816001600160a01b0316836001600160a01b0316036115875760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105ea565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6115ff8484846110a1565b61160b8484848461197c565b610c485760405162461bcd60e51b81526004016105ea9061263d565b6060600e80546104cc90612415565b60608160000361165d5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156116875780611671816125fe565b91506116809050600a836126a5565b9150611661565b60008167ffffffffffffffff8111156116a2576116a26121f6565b6040519080825280601f01601f1916602001820160405280156116cc576020820181803683370190505b5090505b8415611099576116e1600183612617565b91506116ee600a866126b9565b6116f990603061262a565b60f81b81838151811061170e5761170e61249d565b60200101906001600160f81b031916908160001a905350611730600a866126a5565b94506116d0565b60006104b7825490565b6107f78282611252565b6000818152600183016020526040812054611792575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104b7565b5060006104b7565b60006001600160e01b031982166380ac58cd60e01b14806117cb57506001600160e01b03198216635b5e139f60e01b145b806104b757506104b782611a7d565b61068b838383611aa2565b6117ef8282610bd3565b6107f757611807816001600160a01b03166014611b14565b611812836020611b14565b6040516020016118239291906126cd565b60408051601f198184030181529082905262461bcd60e51b82526105ea916004016120a3565b6118538282610bd3565b156107f7576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610bcc836001600160a01b038416611cb0565b600c5460ff1661088f5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016105ea565b600c5460ff161561088f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016105ea565b60008260000182815481106119695761196961249d565b9060005260206000200154905092915050565b60006001600160a01b0384163b15611a7257604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906119c0903390899088908890600401612742565b6020604051808303816000875af19250505080156119fb575060408051601f3d908101601f191682019092526119f89181019061277f565b60015b611a58573d808015611a29576040519150601f19603f3d011682016040523d82523d6000602084013e611a2e565b606091505b508051600003611a505760405162461bcd60e51b81526004016105ea9061263d565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611099565b506001949350505050565b60006001600160e01b03198216635a05180f60e01b14806104b757506104b782611da3565b611aad838383611dd8565b600c5460ff161561068b5760405162461bcd60e51b815260206004820152602b60248201527f4552433732315061757361626c653a20746f6b656e207472616e73666572207760448201526a1a1a5b19481c185d5cd95960aa1b60648201526084016105ea565b60606000611b2383600261279c565b611b2e90600261262a565b67ffffffffffffffff811115611b4657611b466121f6565b6040519080825280601f01601f191660200182016040528015611b70576020820181803683370190505b509050600360fc1b81600081518110611b8b57611b8b61249d565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611bba57611bba61249d565b60200101906001600160f81b031916908160001a9053506000611bde84600261279c565b611be990600161262a565b90505b6001811115611c61576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611c1d57611c1d61249d565b1a60f81b828281518110611c3357611c3361249d565b60200101906001600160f81b031916908160001a90535060049490941c93611c5a816127b3565b9050611bec565b508315610bcc5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105ea565b60008181526001830160205260408120548015611d99576000611cd4600183612617565b8554909150600090611ce890600190612617565b9050818114611d4d576000866000018281548110611d0857611d0861249d565b9060005260206000200154905080876000018481548110611d2b57611d2b61249d565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611d5e57611d5e6127ca565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104b7565b60009150506104b7565b60006001600160e01b03198216637965db0b60e01b14806104b757506301ffc9a760e01b6001600160e01b03198316146104b7565b6001600160a01b038316611e3357611e2e81600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b611e56565b816001600160a01b0316836001600160a01b031614611e5657611e568382611e90565b6001600160a01b038216611e6d5761068b81611f2d565b826001600160a01b0316826001600160a01b03161461068b5761068b8282611fdc565b60006001611e9d84610a9c565b611ea79190612617565b600083815260096020526040902054909150808214611efa576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a54600090611f3f90600190612617565b6000838152600b6020526040812054600a8054939450909284908110611f6757611f6761249d565b9060005260206000200154905080600a8381548110611f8857611f8861249d565b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a805480611fc057611fc06127ca565b6001900381819060005260206000200160009055905550505050565b6000611fe783610a9c565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b6001600160e01b0319811681146108fc57600080fd5b60006020828403121561204857600080fd5b8135610bcc81612020565b60005b8381101561206e578181015183820152602001612056565b50506000910152565b6000815180845261208f816020860160208601612053565b601f01601f19169290920160200192915050565b602081526000610bcc6020830184612077565b6000602082840312156120c857600080fd5b5035919050565b80356001600160a01b03811681146120e657600080fd5b919050565b600080604083850312156120fe57600080fd5b612107836120cf565b946020939093013593505050565b60008060006060848603121561212a57600080fd5b612133846120cf565b9250612141602085016120cf565b9150604084013590509250925092565b6000806040838503121561216457600080fd5b82359150612174602084016120cf565b90509250929050565b60006020828403121561218f57600080fd5b610bcc826120cf565b600080604083850312156121ab57600080fd5b50508035926020909101359150565b600080604083850312156121cd57600080fd5b6121d6836120cf565b9150602083013580151581146121eb57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115612227576122276121f6565b604051601f8501601f19908116603f0116810190828211818310171561224f5761224f6121f6565b8160405280935085815286868601111561226857600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561229857600080fd5b6122a1856120cf565b93506122af602086016120cf565b925060408501359150606085013567ffffffffffffffff8111156122d257600080fd5b8501601f810187136122e357600080fd5b6122f28782356020840161220c565b91505092959194509250565b6000806040838503121561231157600080fd5b61231a836120cf565b9150612174602084016120cf565b600082601f83011261233957600080fd5b610bcc8383356020850161220c565b60008060008060006080868803121561236057600080fd5b853567ffffffffffffffff8082111561237857600080fd5b61238489838a01612328565b9650602088013591508082111561239a57600080fd5b6123a689838a01612328565b95506123b4604089016120cf565b945060608801359150808211156123ca57600080fd5b818801915088601f8301126123de57600080fd5b8135818111156123ed57600080fd5b8960208260051b850101111561240257600080fd5b9699959850939650602001949392505050565b600181811c9082168061242957607f821691505b60208210810361244957634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600083516124c5818460208801612053565b8351908301906124d9818360208801612053565b01949350505050565b601f82111561068b57600081815260208120601f850160051c810160208610156125095750805b601f850160051c820191505b81811015610e8f57828155600101612515565b815167ffffffffffffffff811115612542576125426121f6565b612556816125508454612415565b846124e2565b602080601f83116001811461258b57600084156125735750858301515b600019600386901b1c1916600185901b178555610e8f565b600085815260208120601f198616915b828110156125ba5788860151825594840194600190910190840161259b565b50858210156125d85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600060018201612610576126106125e8565b5060010190565b818103818111156104b7576104b76125e8565b808201808211156104b7576104b76125e8565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b6000826126b4576126b461268f565b500490565b6000826126c8576126c861268f565b500690565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612705816017850160208801612053565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612736816028840160208801612053565b01602801949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061277590830184612077565b9695505050505050565b60006020828403121561279157600080fd5b8151610bcc81612020565b80820281158282048414176104b7576104b76125e8565b6000816127c2576127c26125e8565b506000190190565b634e487b7160e01b600052603160045260246000fdfe65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a2646970667358221220d90eacd6c0a64947fc7f123381dcd28ac7bd247eac5978126ab0c59f2dd3559864736f6c63430008110033";

type MockERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC721__factory extends ContractFactory {
  constructor(...args: MockERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockERC721> {
    return super.deploy(overrides || {}) as Promise<MockERC721>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockERC721 {
    return super.attach(address) as MockERC721;
  }
  connect(signer: Signer): MockERC721__factory {
    return super.connect(signer) as MockERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC721Interface {
    return new utils.Interface(_abi) as MockERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC721 {
    return new Contract(address, _abi, signerOrProvider) as MockERC721;
  }
}
