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

export interface MockStakingInterface extends utils.Interface {
  functions: {
    "DEFAULT_ADDITION_GAS()": FunctionFragment;
    "PERIOD_DURATION()": FunctionFragment;
    "claimReward(address)": FunctionFragment;
    "decreaseReward(uint256)": FunctionFragment;
    "endPeriod()": FunctionFragment;
    "execRecordRewards(address[],uint256[])": FunctionFragment;
    "firstEverWrapup()": FunctionFragment;
    "getManyStakingAmounts(address[],address[])": FunctionFragment;
    "getManyStakingTotals(address[])": FunctionFragment;
    "getPeriod()": FunctionFragment;
    "getReward(address,address)": FunctionFragment;
    "getStakingAmount(address,address)": FunctionFragment;
    "getStakingTotal(address)": FunctionFragment;
    "increasePeriod()": FunctionFragment;
    "increaseReward(uint256)": FunctionFragment;
    "lastUpdatedPeriod()": FunctionFragment;
    "pendingReward()": FunctionFragment;
    "poolAddr()": FunctionFragment;
    "stake(address,uint256)": FunctionFragment;
    "unstake(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADDITION_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERIOD_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claimReward", values: [string]): string;
  encodeFunctionData(
    functionFragment: "decreaseReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "endPeriod", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "execRecordRewards",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "firstEverWrapup",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getManyStakingAmounts",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getManyStakingTotals",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "getPeriod", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingAmount",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingTotal",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increasePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdatedPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poolAddr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADDITION_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERIOD_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endPeriod", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "execRecordRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "firstEverWrapup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getManyStakingAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getManyStakingTotals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStakingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increasePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdatedPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;

  events: {
    "PoolSharesUpdated(uint256,address,uint256)": EventFragment;
    "PoolsUpdateConflicted(uint256,address[])": EventFragment;
    "PoolsUpdateFailed(uint256,address[],uint256[])": EventFragment;
    "PoolsUpdated(uint256,address[],uint256[],uint256[])": EventFragment;
    "RewardClaimed(address,address,uint256)": EventFragment;
    "UserRewardUpdated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolSharesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolsUpdateConflicted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolsUpdateFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserRewardUpdated"): EventFragment;
}

export type PoolSharesUpdatedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { period: BigNumber; poolAddr: string; shares: BigNumber }
>;

export type PoolSharesUpdatedEventFilter =
  TypedEventFilter<PoolSharesUpdatedEvent>;

export type PoolsUpdateConflictedEvent = TypedEvent<
  [BigNumber, string[]],
  { period: BigNumber; poolAddrs: string[] }
>;

export type PoolsUpdateConflictedEventFilter =
  TypedEventFilter<PoolsUpdateConflictedEvent>;

export type PoolsUpdateFailedEvent = TypedEvent<
  [BigNumber, string[], BigNumber[]],
  { period: BigNumber; poolAddrs: string[]; rewards: BigNumber[] }
>;

export type PoolsUpdateFailedEventFilter =
  TypedEventFilter<PoolsUpdateFailedEvent>;

export type PoolsUpdatedEvent = TypedEvent<
  [BigNumber, string[], BigNumber[], BigNumber[]],
  {
    period: BigNumber;
    poolAddrs: string[];
    aRps: BigNumber[];
    shares: BigNumber[];
  }
>;

export type PoolsUpdatedEventFilter = TypedEventFilter<PoolsUpdatedEvent>;

export type RewardClaimedEvent = TypedEvent<
  [string, string, BigNumber],
  { poolAddr: string; user: string; amount: BigNumber }
>;

export type RewardClaimedEventFilter = TypedEventFilter<RewardClaimedEvent>;

export type UserRewardUpdatedEvent = TypedEvent<
  [string, string, BigNumber],
  { poolAddr: string; user: string; debited: BigNumber }
>;

export type UserRewardUpdatedEventFilter =
  TypedEventFilter<UserRewardUpdatedEvent>;

export interface MockStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockStakingInterface;

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
    DEFAULT_ADDITION_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    PERIOD_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimReward(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decreaseReward(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endPeriod(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execRecordRewards(
      _addrList: string[],
      _rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    firstEverWrapup(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getManyStakingAmounts(
      _poolAddrs: string[],
      _userList: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getManyStakingTotals(
      _poolAddr: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getReward(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakingAmount(
      arg0: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakingTotal(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    increasePeriod(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseReward(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastUpdatedPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    pendingReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    poolAddr(overrides?: CallOverrides): Promise<[string]>;

    stake(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADDITION_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  claimReward(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decreaseReward(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endPeriod(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execRecordRewards(
    _addrList: string[],
    _rewards: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  firstEverWrapup(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getManyStakingAmounts(
    _poolAddrs: string[],
    _userList: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getManyStakingTotals(
    _poolAddr: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getReward(
    _poolAddr: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakingAmount(
    arg0: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakingTotal(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  increasePeriod(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseReward(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastUpdatedPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  pendingReward(overrides?: CallOverrides): Promise<BigNumber>;

  poolAddr(overrides?: CallOverrides): Promise<string>;

  stake(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADDITION_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    claimReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    decreaseReward(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endPeriod(overrides?: CallOverrides): Promise<void>;

    execRecordRewards(
      _addrList: string[],
      _rewards: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    firstEverWrapup(overrides?: CallOverrides): Promise<void>;

    getManyStakingAmounts(
      _poolAddrs: string[],
      _userList: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getManyStakingTotals(
      _poolAddr: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingAmount(
      arg0: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingTotal(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increasePeriod(overrides?: CallOverrides): Promise<void>;

    increaseReward(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lastUpdatedPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    pendingReward(overrides?: CallOverrides): Promise<BigNumber>;

    poolAddr(overrides?: CallOverrides): Promise<string>;

    stake(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PoolSharesUpdated(uint256,address,uint256)"(
      period?: BigNumberish | null,
      poolAddr?: string | null,
      shares?: null
    ): PoolSharesUpdatedEventFilter;
    PoolSharesUpdated(
      period?: BigNumberish | null,
      poolAddr?: string | null,
      shares?: null
    ): PoolSharesUpdatedEventFilter;

    "PoolsUpdateConflicted(uint256,address[])"(
      period?: BigNumberish | null,
      poolAddrs?: null
    ): PoolsUpdateConflictedEventFilter;
    PoolsUpdateConflicted(
      period?: BigNumberish | null,
      poolAddrs?: null
    ): PoolsUpdateConflictedEventFilter;

    "PoolsUpdateFailed(uint256,address[],uint256[])"(
      period?: BigNumberish | null,
      poolAddrs?: null,
      rewards?: null
    ): PoolsUpdateFailedEventFilter;
    PoolsUpdateFailed(
      period?: BigNumberish | null,
      poolAddrs?: null,
      rewards?: null
    ): PoolsUpdateFailedEventFilter;

    "PoolsUpdated(uint256,address[],uint256[],uint256[])"(
      period?: BigNumberish | null,
      poolAddrs?: null,
      aRps?: null,
      shares?: null
    ): PoolsUpdatedEventFilter;
    PoolsUpdated(
      period?: BigNumberish | null,
      poolAddrs?: null,
      aRps?: null,
      shares?: null
    ): PoolsUpdatedEventFilter;

    "RewardClaimed(address,address,uint256)"(
      poolAddr?: string | null,
      user?: string | null,
      amount?: null
    ): RewardClaimedEventFilter;
    RewardClaimed(
      poolAddr?: string | null,
      user?: string | null,
      amount?: null
    ): RewardClaimedEventFilter;

    "UserRewardUpdated(address,address,uint256)"(
      poolAddr?: string | null,
      user?: string | null,
      debited?: null
    ): UserRewardUpdatedEventFilter;
    UserRewardUpdated(
      poolAddr?: string | null,
      user?: string | null,
      debited?: null
    ): UserRewardUpdatedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADDITION_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    PERIOD_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    claimReward(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decreaseReward(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endPeriod(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execRecordRewards(
      _addrList: string[],
      _rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    firstEverWrapup(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getManyStakingAmounts(
      _poolAddrs: string[],
      _userList: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getManyStakingTotals(
      _poolAddr: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingAmount(
      arg0: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingTotal(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increasePeriod(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseReward(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastUpdatedPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    pendingReward(overrides?: CallOverrides): Promise<BigNumber>;

    poolAddr(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADDITION_GAS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PERIOD_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimReward(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decreaseReward(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endPeriod(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execRecordRewards(
      _addrList: string[],
      _rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    firstEverWrapup(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getManyStakingAmounts(
      _poolAddrs: string[],
      _userList: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getManyStakingTotals(
      _poolAddr: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReward(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingAmount(
      arg0: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingTotal(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increasePeriod(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseReward(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastUpdatedPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
