/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BridgeTrackingInterface extends utils.Interface {
  functions: {
    "getContract(uint8)": FunctionFragment;
    "getManyTotalBallots(uint256,address[])": FunctionFragment;
    "handleVoteApproved(uint8,uint256)": FunctionFragment;
    "initialize(address,address,uint256)": FunctionFragment;
    "initializeREP2()": FunctionFragment;
    "initializeV2()": FunctionFragment;
    "initializeV3(address,address,address,address)": FunctionFragment;
    "recordVote(uint8,uint256,address)": FunctionFragment;
    "setContract(uint8,address)": FunctionFragment;
    "startedAtBlock()": FunctionFragment;
    "totalBallot(uint256)": FunctionFragment;
    "totalBallotOf(uint256,address)": FunctionFragment;
    "totalVote(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getContract",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getManyTotalBallots",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "handleVoteApproved",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeREP2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeV2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeV3",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "recordVote",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setContract",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "startedAtBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalBallot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBallotOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalVote",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getManyTotalBallots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleVoteApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeREP2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeV3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recordVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startedAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBallot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBallotOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalVote", data: BytesLike): Result;

  events: {
    "ContractUpdated(uint8,address)": EventFragment;
    "ExternalCallFailed(address,bytes4,bytes)": EventFragment;
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExternalCallFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export type ContractUpdatedEvent = TypedEvent<
  [number, string],
  { contractType: number; addr: string }
>;

export type ContractUpdatedEventFilter = TypedEventFilter<ContractUpdatedEvent>;

export type ExternalCallFailedEvent = TypedEvent<
  [string, string, string],
  { to: string; msgSig: string; reason: string }
>;

export type ExternalCallFailedEventFilter =
  TypedEventFilter<ExternalCallFailedEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface BridgeTracking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeTrackingInterface;

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
    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { contract_: string }>;

    getManyTotalBallots(
      period: BigNumberish,
      operators: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _res: BigNumber[] }>;

    handleVoteApproved(
      kind: BigNumberish,
      requestId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      bridgeContract: string,
      validatorContract: string,
      startedAtBlock_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeREP2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeV2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeV3(
      bridgeManager: string,
      bridgeSlash: string,
      bridgeReward: string,
      dposGA: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recordVote(
      kind: BigNumberish,
      requestId: BigNumberish,
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startedAtBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalBallot(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalBallot_: BigNumber }>;

    totalBallotOf(
      period: BigNumberish,
      bridgeOperator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalVote(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalVote_: BigNumber }>;
  };

  getContract(
    contractType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getManyTotalBallots(
    period: BigNumberish,
    operators: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  handleVoteApproved(
    kind: BigNumberish,
    requestId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    bridgeContract: string,
    validatorContract: string,
    startedAtBlock_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeREP2(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeV2(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeV3(
    bridgeManager: string,
    bridgeSlash: string,
    bridgeReward: string,
    dposGA: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recordVote(
    kind: BigNumberish,
    requestId: BigNumberish,
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setContract(
    contractType: BigNumberish,
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startedAtBlock(overrides?: CallOverrides): Promise<BigNumber>;

  totalBallot(
    period: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalBallotOf(
    period: BigNumberish,
    bridgeOperator: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalVote(
    period: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getManyTotalBallots(
      period: BigNumberish,
      operators: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    handleVoteApproved(
      kind: BigNumberish,
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      bridgeContract: string,
      validatorContract: string,
      startedAtBlock_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeREP2(overrides?: CallOverrides): Promise<void>;

    initializeV2(overrides?: CallOverrides): Promise<void>;

    initializeV3(
      bridgeManager: string,
      bridgeSlash: string,
      bridgeReward: string,
      dposGA: string,
      overrides?: CallOverrides
    ): Promise<void>;

    recordVote(
      kind: BigNumberish,
      requestId: BigNumberish,
      operator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    startedAtBlock(overrides?: CallOverrides): Promise<BigNumber>;

    totalBallot(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBallotOf(
      period: BigNumberish,
      bridgeOperator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalVote(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "ContractUpdated(uint8,address)"(
      contractType?: BigNumberish | null,
      addr?: string | null
    ): ContractUpdatedEventFilter;
    ContractUpdated(
      contractType?: BigNumberish | null,
      addr?: string | null
    ): ContractUpdatedEventFilter;

    "ExternalCallFailed(address,bytes4,bytes)"(
      to?: string | null,
      msgSig?: BytesLike | null,
      reason?: null
    ): ExternalCallFailedEventFilter;
    ExternalCallFailed(
      to?: string | null,
      msgSig?: BytesLike | null,
      reason?: null
    ): ExternalCallFailedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getManyTotalBallots(
      period: BigNumberish,
      operators: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleVoteApproved(
      kind: BigNumberish,
      requestId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      bridgeContract: string,
      validatorContract: string,
      startedAtBlock_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeREP2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeV2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeV3(
      bridgeManager: string,
      bridgeSlash: string,
      bridgeReward: string,
      dposGA: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recordVote(
      kind: BigNumberish,
      requestId: BigNumberish,
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startedAtBlock(overrides?: CallOverrides): Promise<BigNumber>;

    totalBallot(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBallotOf(
      period: BigNumberish,
      bridgeOperator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalVote(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getManyTotalBallots(
      period: BigNumberish,
      operators: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleVoteApproved(
      kind: BigNumberish,
      requestId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      bridgeContract: string,
      validatorContract: string,
      startedAtBlock_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeREP2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeV2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeV3(
      bridgeManager: string,
      bridgeSlash: string,
      bridgeReward: string,
      dposGA: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recordVote(
      kind: BigNumberish,
      requestId: BigNumberish,
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startedAtBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalBallot(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBallotOf(
      period: BigNumberish,
      bridgeOperator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalVote(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
