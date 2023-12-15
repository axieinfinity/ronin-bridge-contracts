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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IBridgeRewardInterface extends utils.Interface {
  functions: {
    "execSyncReward(address[],uint256[],uint256,uint256,uint256)": FunctionFragment;
    "getLatestRewardedPeriod()": FunctionFragment;
    "getRewardPerPeriod()": FunctionFragment;
    "getTotalRewardScattered()": FunctionFragment;
    "getTotalRewardToppedUp()": FunctionFragment;
    "receiveRON()": FunctionFragment;
    "setRewardPerPeriod(uint256)": FunctionFragment;
    "syncReward(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execSyncReward",
    values: [string[], BigNumberish[], BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestRewardedPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardPerPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalRewardScattered",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalRewardToppedUp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveRON",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardPerPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "syncReward",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "execSyncReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestRewardedPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardPerPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalRewardScattered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalRewardToppedUp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiveRON", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardPerPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "syncReward", data: BytesLike): Result;

  events: {
    "BridgeRewardScatterFailed(uint256,address,uint256)": EventFragment;
    "BridgeRewardScattered(uint256,address,uint256)": EventFragment;
    "BridgeRewardSlashed(uint256,address,uint256)": EventFragment;
    "BridgeRewardSyncTooFarPeriod(uint256,uint256)": EventFragment;
    "SafeReceived(address,uint256,uint256)": EventFragment;
    "UpdatedRewardPerPeriod(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BridgeRewardScatterFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BridgeRewardScattered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BridgeRewardSlashed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BridgeRewardSyncTooFarPeriod"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SafeReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedRewardPerPeriod"): EventFragment;
}

export type BridgeRewardScatterFailedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { period: BigNumber; operator: string; amount: BigNumber }
>;

export type BridgeRewardScatterFailedEventFilter =
  TypedEventFilter<BridgeRewardScatterFailedEvent>;

export type BridgeRewardScatteredEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { period: BigNumber; operator: string; amount: BigNumber }
>;

export type BridgeRewardScatteredEventFilter =
  TypedEventFilter<BridgeRewardScatteredEvent>;

export type BridgeRewardSlashedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { period: BigNumber; operator: string; amount: BigNumber }
>;

export type BridgeRewardSlashedEventFilter =
  TypedEventFilter<BridgeRewardSlashedEvent>;

export type BridgeRewardSyncTooFarPeriodEvent = TypedEvent<
  [BigNumber, BigNumber],
  { requestingPeriod: BigNumber; latestPeriod: BigNumber }
>;

export type BridgeRewardSyncTooFarPeriodEventFilter =
  TypedEventFilter<BridgeRewardSyncTooFarPeriodEvent>;

export type SafeReceivedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { from: string; balanceBefore: BigNumber; amount: BigNumber }
>;

export type SafeReceivedEventFilter = TypedEventFilter<SafeReceivedEvent>;

export type UpdatedRewardPerPeriodEvent = TypedEvent<
  [BigNumber],
  { newRewardPerPeriod: BigNumber }
>;

export type UpdatedRewardPerPeriodEventFilter =
  TypedEventFilter<UpdatedRewardPerPeriodEvent>;

export interface IBridgeReward extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBridgeRewardInterface;

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
    execSyncReward(
      operators: string[],
      ballots: BigNumberish[],
      totalBallot: BigNumberish,
      totalVote: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLatestRewardedPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRewardPerPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalRewardScattered(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalRewardToppedUp(overrides?: CallOverrides): Promise<[BigNumber]>;

    receiveRON(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardPerPeriod(
      rewardPerPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    syncReward(
      periodLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  execSyncReward(
    operators: string[],
    ballots: BigNumberish[],
    totalBallot: BigNumberish,
    totalVote: BigNumberish,
    period: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLatestRewardedPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getRewardPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalRewardScattered(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalRewardToppedUp(overrides?: CallOverrides): Promise<BigNumber>;

  receiveRON(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardPerPeriod(
    rewardPerPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  syncReward(
    periodLength: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    execSyncReward(
      operators: string[],
      ballots: BigNumberish[],
      totalBallot: BigNumberish,
      totalVote: BigNumberish,
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getLatestRewardedPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalRewardScattered(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalRewardToppedUp(overrides?: CallOverrides): Promise<BigNumber>;

    receiveRON(overrides?: CallOverrides): Promise<void>;

    setRewardPerPeriod(
      rewardPerPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    syncReward(
      periodLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BridgeRewardScatterFailed(uint256,address,uint256)"(
      period?: BigNumberish | null,
      operator?: null,
      amount?: null
    ): BridgeRewardScatterFailedEventFilter;
    BridgeRewardScatterFailed(
      period?: BigNumberish | null,
      operator?: null,
      amount?: null
    ): BridgeRewardScatterFailedEventFilter;

    "BridgeRewardScattered(uint256,address,uint256)"(
      period?: BigNumberish | null,
      operator?: null,
      amount?: null
    ): BridgeRewardScatteredEventFilter;
    BridgeRewardScattered(
      period?: BigNumberish | null,
      operator?: null,
      amount?: null
    ): BridgeRewardScatteredEventFilter;

    "BridgeRewardSlashed(uint256,address,uint256)"(
      period?: BigNumberish | null,
      operator?: null,
      amount?: null
    ): BridgeRewardSlashedEventFilter;
    BridgeRewardSlashed(
      period?: BigNumberish | null,
      operator?: null,
      amount?: null
    ): BridgeRewardSlashedEventFilter;

    "BridgeRewardSyncTooFarPeriod(uint256,uint256)"(
      requestingPeriod?: null,
      latestPeriod?: null
    ): BridgeRewardSyncTooFarPeriodEventFilter;
    BridgeRewardSyncTooFarPeriod(
      requestingPeriod?: null,
      latestPeriod?: null
    ): BridgeRewardSyncTooFarPeriodEventFilter;

    "SafeReceived(address,uint256,uint256)"(
      from?: string | null,
      balanceBefore?: null,
      amount?: null
    ): SafeReceivedEventFilter;
    SafeReceived(
      from?: string | null,
      balanceBefore?: null,
      amount?: null
    ): SafeReceivedEventFilter;

    "UpdatedRewardPerPeriod(uint256)"(
      newRewardPerPeriod?: null
    ): UpdatedRewardPerPeriodEventFilter;
    UpdatedRewardPerPeriod(
      newRewardPerPeriod?: null
    ): UpdatedRewardPerPeriodEventFilter;
  };

  estimateGas: {
    execSyncReward(
      operators: string[],
      ballots: BigNumberish[],
      totalBallot: BigNumberish,
      totalVote: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLatestRewardedPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardPerPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalRewardScattered(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalRewardToppedUp(overrides?: CallOverrides): Promise<BigNumber>;

    receiveRON(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardPerPeriod(
      rewardPerPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    syncReward(
      periodLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execSyncReward(
      operators: string[],
      ballots: BigNumberish[],
      totalBallot: BigNumberish,
      totalVote: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLatestRewardedPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardPerPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalRewardScattered(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalRewardToppedUp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveRON(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardPerPeriod(
      rewardPerPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    syncReward(
      periodLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
