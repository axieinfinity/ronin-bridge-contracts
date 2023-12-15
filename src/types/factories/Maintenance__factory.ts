/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Maintenance, MaintenanceInterface } from "../Maintenance";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ErrAlreadyOnMaintenance",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrAlreadyScheduled",
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
    name: "ErrCooldownTimeNotYetEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrEndBlockOutOfRange",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidMaintenanceDuration",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidMaintenanceDurationConfig",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidOffsetToStartScheduleConfigs",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrStartBlockOutOfRange",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrTotalOfSchedulesExceeded",
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
    inputs: [],
    name: "ErrUnexistedSchedule",
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
        internalType: "uint256",
        name: "minMaintenanceDurationInBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxMaintenanceDurationInBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minOffsetToStartSchedule",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxOffsetToStartSchedule",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxSchedules",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cooldownSecsToMaintain",
        type: "uint256",
      },
    ],
    name: "MaintenanceConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "consensusAddr",
        type: "address",
      },
    ],
    name: "MaintenanceScheduleCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "consensusAddr",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "requestTimestamp",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IMaintenance.Schedule",
        name: "",
        type: "tuple",
      },
    ],
    name: "MaintenanceScheduled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_consensusAddr",
        type: "address",
      },
    ],
    name: "cancelSchedule",
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
    ],
    name: "checkCooldownEnds",
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
        name: "_consensusAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "checkMaintained",
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
        name: "_consensusAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toBlock",
        type: "uint256",
      },
    ],
    name: "checkMaintainedInBlockRange",
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
        internalType: "address[]",
        name: "_addrList",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "checkManyMaintained",
    outputs: [
      {
        internalType: "bool[]",
        name: "_resList",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addrList",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toBlock",
        type: "uint256",
      },
    ],
    name: "checkManyMaintainedInBlockRange",
    outputs: [
      {
        internalType: "bool[]",
        name: "_resList",
        type: "bool[]",
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
    name: "checkScheduled",
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
    name: "cooldownSecsToMaintain",
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
    inputs: [
      {
        internalType: "address",
        name: "_consensusAddr",
        type: "address",
      },
    ],
    name: "getSchedule",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "requestTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct IMaintenance.Schedule",
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
        internalType: "address",
        name: "__validatorContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minMaintenanceDurationInBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxMaintenanceDurationInBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minOffsetToStartSchedule",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxOffsetToStartSchedule",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSchedules",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cooldownSecsToMaintain",
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
    name: "initializeV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxMaintenanceDurationInBlock",
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
    name: "maxOffsetToStartSchedule",
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
    name: "maxSchedules",
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
    name: "minMaintenanceDurationInBlock",
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
    name: "minOffsetToStartSchedule",
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
        name: "_consensusAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startedAtBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endedAtBlock",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_minMaintenanceDurationInBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxMaintenanceDurationInBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minOffsetToStartSchedule",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxOffsetToStartSchedule",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSchedules",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cooldownSecsToMaintain",
        type: "uint256",
      },
    ],
    name: "setMaintenanceConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSchedules",
    outputs: [
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100eb565b600054600160a81b900460ff161561008c5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff600160a01b909104811610156100e9576000805460ff60a01b191660ff60a01b17905560405160ff81527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b611570806100fa6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063b59f403e116100b8578063c44cb2331161007c578063c44cb2331461024d578063d39fee3414610256578063de981f1b1461029c578063dec36284146102c7578063f0caaafb146102d0578063fdadda81146102e357600080fd5b8063b59f403e146101f5578063ba30375514610208578063bc1710e914610228578063bfa89b9b14610231578063c09fe4601461023a57600080fd5b80635cd8a76b116100ff5780635cd8a76b146101b65780637a50802d146101be5780638142951a146101c7578063865e6fd3146101da578063965720af146101ed57600080fd5b8063088e8de71461013c57806309e34c38146101645780630fbeb37f1461017b5780632d538c2c1461018e5780632ddc08a2146101a3575b600080fd5b61014f61014a366004611087565b6102f6565b60405190151581526020015b60405180910390f35b61016d60025481565b60405190815260200161015b565b61014f6101893660046110bc565b61030b565b6101a161019c366004611087565b610342565b005b61014f6101b13660046110e8565b610756565b6101a1610778565b61016d60055481565b6101a16101d536600461110c565b610848565b6101a16101e8366004611170565b610945565b61016d610964565b61014f6102033660046110e8565b610a1f565b61021b6102163660046111f3565b610a51565b60405161015b9190611244565b61016d60045481565b61016d60035481565b6101a161024836600461128a565b610b07565b61016d60065481565b6102696102643660046110e8565b610b25565b60405161015b91908151815260208083015190820152604080830151908201526060918201519181019190915260800190565b6102af6102aa3660046112cd565b610b9d565b6040516001600160a01b03909116815260200161015b565b61016d60075481565b6101a16102de3660046110e8565b610c18565b61021b6102f13660046112e8565b610d64565b6000610303848484610e18565b949350505050565b6001600160a01b038216600090815260016020526040812080548310801590610338575080600101548311155b9150505b92915050565b600061034e6008610b9d565b604051633292276760e11b81526001600160a01b038681166004830152919250908216906365244ece90602401602060405180830381865afa158015610398573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bc9190611334565b6103f2576000356001600160e01b0319166007604051620f948f60ea1b81526004016103e992919061136c565b60405180910390fd5b6040516304d971ab60e01b81526001600160a01b0385811660048301523360248301528216906304d971ab90604401602060405180830381865afa15801561043e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104629190611334565b61048f576000356001600160e01b0319166004604051620f948f60ea1b81526004016103e992919061136c565b61049884610756565b156104b65760405163b194497760e01b815260040160405180910390fd5b6104bf84610a1f565b6104dc5760405163207dfd7760e11b815260040160405180910390fd5b6006546104e7610964565b106105055760405163437494d360e01b815260040160405180910390fd5b61052b6004544361051691906113b0565b60055461052390436113b0565b859190610e50565b610548576040516301f19fb760e61b815260040160405180910390fd5b818310610568576040516301f19fb760e61b815260040160405180910390fd5b600061057484846113c3565b61057f9060016113b0565b905061059a60025460035483610e509092919063ffffffff16565b6105b75760405163a1f1aaf560e01b815260040160405180910390fd5b6001600160a01b038216637593ff716105d16001876113c3565b6040518263ffffffff1660e01b81526004016105ef91815260200190565b602060405180830381865afa15801561060c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106309190611334565b61064d576040516301f19fb760e61b815260040160405180910390fd5b604051637593ff7160e01b8152600481018490526001600160a01b03831690637593ff7190602401602060405180830381865afa158015610692573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b69190611334565b6106d35760405163ec67bbc560e01b815260040160405180910390fd5b6001600160a01b0385166000818152600160208181526040928390208881559182018790554360028301819055426003840181905584518a815292830189905293820152606081019290925291907f48e8b2f7348b1ec693bbb999258a8d6bd514732a19c6057b6e2a56a4c405253b9060800160405180910390a2505050505050565b6001600160a01b03166000908152600160208190526040909120015443111590565b600054600290600160a81b900460ff161580156107a3575060005460ff808316600160a01b90920416105b6107bf5760405162461bcd60e51b81526004016103e9906113d6565b6000805460ff60a81b1960ff8416600160a01b021661ffff60a01b1990911617600160a81b17908190556107fe906008906001600160a01b0316610e67565b60008054600161ff0160a01b031916905560405160ff821681527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b600054600160a81b900460ff161580801561087057506000546001600160a01b90910460ff16105b806108915750303b1580156108915750600054600160a01b900460ff166001145b6108ad5760405162461bcd60e51b81526004016103e9906113d6565b6000805460ff60a01b1916600160a01b17905580156108da576000805460ff60a81b1916600160a81b1790555b6108e5600889610e67565b6108f3878787878787610f0b565b801561093b576000805460ff60a81b19169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050505050565b61094d610fc7565b61095681611023565b6109608282610e67565b5050565b6000806109716008610b9d565b6001600160a01b031663b7ab4db56040518163ffffffff1660e01b8152600401600060405180830381865afa1580156109ae573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109d69190810190611445565b905060005b8151811015610a1a57610a068282815181106109f9576109f961150a565b6020026020010151610756565b15610a12576001909201915b6001016109db565b505090565b6007546001600160a01b0382166000908152600160205260408120600301549091610a49916113b0565b421192915050565b60608367ffffffffffffffff811115610a6c57610a6c611424565b604051908082528060200260200182016040528015610a95578160200160208202803683370190505b50905060005b84811015610afe57610ad4868683818110610ab857610ab861150a565b9050602002016020810190610acd91906110e8565b8585610e18565b828281518110610ae657610ae661150a565b91151560209283029190910190910152600101610a9b565b50949350505050565b610b0f610fc7565b610b1d868686868686610f0b565b505050505050565b610b506040518060800160405280600081526020016000815260200160008152602001600081525090565b506001600160a01b03166000908152600160208181526040928390208351608081018552815481529281015491830191909152600281015492820192909252600390910154606082015290565b60007fdea3103d22025c269050bea94c0c84688877f12fa22b7e6d2d5d78a9a49aa1cb600083600f811115610bd457610bd4611356565b60ff1681526020810191909152604001600020546001600160a01b0316905080610c13578160405163409140df60e11b81526004016103e99190611520565b919050565b610c226008610b9d565b6040516304d971ab60e01b81526001600160a01b03838116600483015233602483015291909116906304d971ab90604401602060405180830381865afa158015610c70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c949190611334565b610cc1576000356001600160e01b0319166004604051620f948f60ea1b81526004016103e992919061136c565b610cca81610756565b610ce75760405163f7050bef60e01b815260040160405180910390fd5b610cf1814361030b565b15610d0f5760405163070dff8360e01b815260040160405180910390fd5b6001600160a01b0381166000818152600160208190526040808320838155918201839055436002830155519092917f72720a31deb222f77bbf95b88a540154648466770e5f41328ee1e25e5050737791a25050565b60608267ffffffffffffffff811115610d7f57610d7f611424565b604051908082528060200260200182016040528015610da8578160200160208202803683370190505b50905060005b83811015610e1057610de6858583818110610dcb57610dcb61150a565b9050602002016020810190610de091906110e8565b8461030b565b828281518110610df857610df861150a565b91151560209283029190910190910152600101610dae565b509392505050565b6001600160a01b038316600090815260016020819052604082208054918101549091610e47918691869161105c565b95945050505050565b600083831115801561030357505090911115919050565b807fdea3103d22025c269050bea94c0c84688877f12fa22b7e6d2d5d78a9a49aa1cb600084600f811115610e9d57610e9d611356565b60ff168152602081019190915260400160002080546001600160a01b0319166001600160a01b03928316179055811682600f811115610ede57610ede611356565b6040517f865d1c228a8ea13709cfe61f346f7ff67f1bbd4a18ff31ad3e7147350d317c5990600090a35050565b848610610f2b576040516338f4062560e11b815260040160405180910390fd5b828410610f4b576040516316c7c7ef60e31b815260040160405180910390fd5b6002869055600385905560048490556005839055600682905560078190556040805187815260208101879052908101859052606081018490526080810183905260a081018290527f4edb6adef66a4b8e1ffbc8c67640d4f244ce904193fd65e5cc316bbb74b2e59b9060c00160405180910390a1505050505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103546001600160a01b03163314611021576000356001600160e01b0319166001604051620f948f60ea1b81526004016103e992919061136c565b565b806001600160a01b03163b60000361105957604051630bfc64a360e21b81526001600160a01b03821660048201526024016103e9565b50565b6000818511158015610e47575050501115919050565b6001600160a01b038116811461105957600080fd5b60008060006060848603121561109c57600080fd5b83356110a781611072565b95602085013595506040909401359392505050565b600080604083850312156110cf57600080fd5b82356110da81611072565b946020939093013593505050565b6000602082840312156110fa57600080fd5b813561110581611072565b9392505050565b600080600080600080600060e0888a03121561112757600080fd5b873561113281611072565b9960208901359950604089013598606081013598506080810135975060a0810135965060c00135945092505050565b803560108110610c1357600080fd5b6000806040838503121561118357600080fd5b61118c83611161565b9150602083013561119c81611072565b809150509250929050565b60008083601f8401126111b957600080fd5b50813567ffffffffffffffff8111156111d157600080fd5b6020830191508360208260051b85010111156111ec57600080fd5b9250929050565b6000806000806060858703121561120957600080fd5b843567ffffffffffffffff81111561122057600080fd5b61122c878288016111a7565b90989097506020870135966040013595509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561127e578351151583529284019291840191600101611260565b50909695505050505050565b60008060008060008060c087890312156112a357600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b6000602082840312156112df57600080fd5b61110582611161565b6000806000604084860312156112fd57600080fd5b833567ffffffffffffffff81111561131457600080fd5b611320868287016111a7565b909790965060209590950135949350505050565b60006020828403121561134657600080fd5b8151801515811461110557600080fd5b634e487b7160e01b600052602160045260246000fd5b6001600160e01b03198316815260408101600b831061138d5761138d611356565b8260208301529392505050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561033c5761033c61139a565b8181038181111561033c5761033c61139a565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b634e487b7160e01b600052604160045260246000fd5b8051610c1381611072565b6000602080838503121561145857600080fd5b825167ffffffffffffffff8082111561147057600080fd5b818501915085601f83011261148457600080fd5b81518181111561149657611496611424565b8060051b604051601f19603f830116810181811085821117156114bb576114bb611424565b6040529182528482019250838101850191888311156114d957600080fd5b938501935b828510156114fe576114ef8561143a565b845293850193928501926114de565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b602081016010831061153457611534611356565b9190529056fea2646970667358221220aedb91a6451b058eb06aa9dfa44028486308d043cd2f9e0a26b914393c8fffc764736f6c63430008110033";

type MaintenanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaintenanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Maintenance__factory extends ContractFactory {
  constructor(...args: MaintenanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Maintenance> {
    return super.deploy(overrides || {}) as Promise<Maintenance>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Maintenance {
    return super.attach(address) as Maintenance;
  }
  connect(signer: Signer): Maintenance__factory {
    return super.connect(signer) as Maintenance__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaintenanceInterface {
    return new utils.Interface(_abi) as MaintenanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Maintenance {
    return new Contract(address, _abi, signerOrProvider) as Maintenance;
  }
}
