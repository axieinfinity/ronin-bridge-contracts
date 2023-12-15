/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  GovernanceProposal,
  GovernanceProposalInterface,
} from "../GovernanceProposal";

const _abi = [
  {
    inputs: [],
    name: "ErrCurrentProposalIsNotCompleted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "actual",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "expected",
        type: "bytes32",
      },
    ],
    name: "ErrInvalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrVoteIsFinalized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
    ],
    name: "ProposalApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiryTimestamp",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "targets",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "values",
            type: "uint256[]",
          },
          {
            internalType: "bytes[]",
            name: "calldatas",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "gasAmounts",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct Proposal.ProposalDetail",
        name: "proposal",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "successCalls",
        type: "bool[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "returnDatas",
        type: "bytes[]",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
    ],
    name: "ProposalExpired",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "ProposalExpiryDurationChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
    ],
    name: "ProposalRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Ballot.VoteType",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
    ],
    name: "ProposalVoted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
    ],
    name: "getProposalSignatures",
    outputs: [
      {
        internalType: "address[]",
        name: "_voters",
        type: "address[]",
      },
      {
        internalType: "enum Ballot.VoteType[]",
        name: "_supports",
        type: "uint8[]",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
    ],
    name: "proposalVoted",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "round",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [
      {
        internalType: "enum VoteStatusConsumer.VoteStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "againstVoteWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forVoteWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiryTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class GovernanceProposal__factory {
  static readonly abi = _abi;
  static createInterface(): GovernanceProposalInterface {
    return new utils.Interface(_abi) as GovernanceProposalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernanceProposal {
    return new Contract(address, _abi, signerOrProvider) as GovernanceProposal;
  }
}
