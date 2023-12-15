/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type ProposalDetailStruct = {
  nonce: BigNumberish;
  chainId: BigNumberish;
  expiryTimestamp: BigNumberish;
  targets: string[];
  values: BigNumberish[];
  calldatas: BytesLike[];
  gasAmounts: BigNumberish[];
};

export type ProposalDetailStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  string[],
  BigNumber[],
  string[],
  BigNumber[]
] & {
  nonce: BigNumber;
  chainId: BigNumber;
  expiryTimestamp: BigNumber;
  targets: string[];
  values: BigNumber[];
  calldatas: string[];
  gasAmounts: BigNumber[];
};

export interface CoreGovernanceInterface extends utils.Interface {
  functions: {
    "round(uint256)": FunctionFragment;
    "vote(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "round", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "round", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {
    "ProposalApproved(bytes32)": EventFragment;
    "ProposalCreated(uint256,uint256,bytes32,tuple,address)": EventFragment;
    "ProposalExecuted(bytes32,bool[],bytes[])": EventFragment;
    "ProposalExpired(bytes32)": EventFragment;
    "ProposalExpiryDurationChanged(uint256)": EventFragment;
    "ProposalRejected(bytes32)": EventFragment;
    "ProposalVoted(bytes32,address,uint8,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalApproved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExpired"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ProposalExpiryDurationChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalRejected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalVoted"): EventFragment;
}

export type ProposalApprovedEvent = TypedEvent<
  [string],
  { proposalHash: string }
>;

export type ProposalApprovedEventFilter =
  TypedEventFilter<ProposalApprovedEvent>;

export type ProposalCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, string, ProposalDetailStructOutput, string],
  {
    chainId: BigNumber;
    round: BigNumber;
    proposalHash: string;
    proposal: ProposalDetailStructOutput;
    creator: string;
  }
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export type ProposalExecutedEvent = TypedEvent<
  [string, boolean[], string[]],
  { proposalHash: string; successCalls: boolean[]; returnDatas: string[] }
>;

export type ProposalExecutedEventFilter =
  TypedEventFilter<ProposalExecutedEvent>;

export type ProposalExpiredEvent = TypedEvent<
  [string],
  { proposalHash: string }
>;

export type ProposalExpiredEventFilter = TypedEventFilter<ProposalExpiredEvent>;

export type ProposalExpiryDurationChangedEvent = TypedEvent<
  [BigNumber],
  { duration: BigNumber }
>;

export type ProposalExpiryDurationChangedEventFilter =
  TypedEventFilter<ProposalExpiryDurationChangedEvent>;

export type ProposalRejectedEvent = TypedEvent<
  [string],
  { proposalHash: string }
>;

export type ProposalRejectedEventFilter =
  TypedEventFilter<ProposalRejectedEvent>;

export type ProposalVotedEvent = TypedEvent<
  [string, string, number, BigNumber],
  { proposalHash: string; voter: string; support: number; weight: BigNumber }
>;

export type ProposalVotedEventFilter = TypedEventFilter<ProposalVotedEvent>;

export interface CoreGovernance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CoreGovernanceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    round(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    vote(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, BigNumber, BigNumber, BigNumber] & {
        status: number;
        hash: string;
        againstVoteWeight: BigNumber;
        forVoteWeight: BigNumber;
        expiryTimestamp: BigNumber;
      }
    >;
  };

  round(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  vote(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, string, BigNumber, BigNumber, BigNumber] & {
      status: number;
      hash: string;
      againstVoteWeight: BigNumber;
      forVoteWeight: BigNumber;
      expiryTimestamp: BigNumber;
    }
  >;

  callStatic: {
    round(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    vote(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, BigNumber, BigNumber, BigNumber] & {
        status: number;
        hash: string;
        againstVoteWeight: BigNumber;
        forVoteWeight: BigNumber;
        expiryTimestamp: BigNumber;
      }
    >;
  };

  filters: {
    "ProposalApproved(bytes32)"(
      proposalHash?: BytesLike | null
    ): ProposalApprovedEventFilter;
    ProposalApproved(
      proposalHash?: BytesLike | null
    ): ProposalApprovedEventFilter;

    "ProposalCreated(uint256,uint256,bytes32,tuple,address)"(
      chainId?: BigNumberish | null,
      round?: BigNumberish | null,
      proposalHash?: BytesLike | null,
      proposal?: null,
      creator?: null
    ): ProposalCreatedEventFilter;
    ProposalCreated(
      chainId?: BigNumberish | null,
      round?: BigNumberish | null,
      proposalHash?: BytesLike | null,
      proposal?: null,
      creator?: null
    ): ProposalCreatedEventFilter;

    "ProposalExecuted(bytes32,bool[],bytes[])"(
      proposalHash?: BytesLike | null,
      successCalls?: null,
      returnDatas?: null
    ): ProposalExecutedEventFilter;
    ProposalExecuted(
      proposalHash?: BytesLike | null,
      successCalls?: null,
      returnDatas?: null
    ): ProposalExecutedEventFilter;

    "ProposalExpired(bytes32)"(
      proposalHash?: BytesLike | null
    ): ProposalExpiredEventFilter;
    ProposalExpired(
      proposalHash?: BytesLike | null
    ): ProposalExpiredEventFilter;

    "ProposalExpiryDurationChanged(uint256)"(
      duration?: BigNumberish | null
    ): ProposalExpiryDurationChangedEventFilter;
    ProposalExpiryDurationChanged(
      duration?: BigNumberish | null
    ): ProposalExpiryDurationChangedEventFilter;

    "ProposalRejected(bytes32)"(
      proposalHash?: BytesLike | null
    ): ProposalRejectedEventFilter;
    ProposalRejected(
      proposalHash?: BytesLike | null
    ): ProposalRejectedEventFilter;

    "ProposalVoted(bytes32,address,uint8,uint256)"(
      proposalHash?: BytesLike | null,
      voter?: string | null,
      support?: null,
      weight?: null
    ): ProposalVotedEventFilter;
    ProposalVoted(
      proposalHash?: BytesLike | null,
      voter?: string | null,
      support?: null,
      weight?: null
    ): ProposalVotedEventFilter;
  };

  estimateGas: {
    round(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    vote(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    round(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vote(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
