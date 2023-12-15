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

export interface BaseStakingInterface extends utils.Interface {
  functions: {
    "cooldownSecsToUndelegate()": FunctionFragment;
    "getContract(uint8)": FunctionFragment;
    "getManySelfStakings(address[])": FunctionFragment;
    "getManyStakingAmounts(address[],address[])": FunctionFragment;
    "getManyStakingTotals(address[])": FunctionFragment;
    "getPoolAddressOf(address)": FunctionFragment;
    "getPoolDetail(address)": FunctionFragment;
    "getReward(address,address)": FunctionFragment;
    "getStakingAmount(address,address)": FunctionFragment;
    "getStakingTotal(address)": FunctionFragment;
    "isAdminOfActivePool(address)": FunctionFragment;
    "setContract(uint8,address)": FunctionFragment;
    "setCooldownSecsToUndelegate(uint256)": FunctionFragment;
    "setWaitingSecsToRevoke(uint256)": FunctionFragment;
    "waitingSecsToRevoke()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cooldownSecsToUndelegate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContract",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getManySelfStakings",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getManyStakingAmounts",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getManyStakingTotals",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolAddressOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolDetail",
    values: [string]
  ): string;
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
    functionFragment: "isAdminOfActivePool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setContract",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCooldownSecsToUndelegate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWaitingSecsToRevoke",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "waitingSecsToRevoke",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cooldownSecsToUndelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getManySelfStakings",
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
  decodeFunctionResult(
    functionFragment: "getPoolAddressOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolDetail",
    data: BytesLike
  ): Result;
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
    functionFragment: "isAdminOfActivePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCooldownSecsToUndelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWaitingSecsToRevoke",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "waitingSecsToRevoke",
    data: BytesLike
  ): Result;

  events: {
    "ContractUpdated(uint8,address)": EventFragment;
    "CooldownSecsToUndelegateUpdated(uint256)": EventFragment;
    "PoolSharesUpdated(uint256,address,uint256)": EventFragment;
    "PoolsUpdateConflicted(uint256,address[])": EventFragment;
    "PoolsUpdateFailed(uint256,address[],uint256[])": EventFragment;
    "PoolsUpdated(uint256,address[],uint256[],uint256[])": EventFragment;
    "RewardClaimed(address,address,uint256)": EventFragment;
    "UserRewardUpdated(address,address,uint256)": EventFragment;
    "WaitingSecsToRevokeUpdated(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CooldownSecsToUndelegateUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolSharesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolsUpdateConflicted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolsUpdateFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserRewardUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WaitingSecsToRevokeUpdated"): EventFragment;
}

export type ContractUpdatedEvent = TypedEvent<
  [number, string],
  { contractType: number; addr: string }
>;

export type ContractUpdatedEventFilter = TypedEventFilter<ContractUpdatedEvent>;

export type CooldownSecsToUndelegateUpdatedEvent = TypedEvent<
  [BigNumber],
  { minSecs: BigNumber }
>;

export type CooldownSecsToUndelegateUpdatedEventFilter =
  TypedEventFilter<CooldownSecsToUndelegateUpdatedEvent>;

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

export type WaitingSecsToRevokeUpdatedEvent = TypedEvent<
  [BigNumber],
  { secs: BigNumber }
>;

export type WaitingSecsToRevokeUpdatedEventFilter =
  TypedEventFilter<WaitingSecsToRevokeUpdatedEvent>;

export interface BaseStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseStakingInterface;

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
    cooldownSecsToUndelegate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { contract_: string }>;

    getManySelfStakings(
      _pools: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _selfStakings: BigNumber[] }>;

    getManyStakingAmounts(
      _poolAddrs: string[],
      _userList: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _stakingAmounts: BigNumber[] }>;

    getManyStakingTotals(
      _poolList: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _stakingAmounts: BigNumber[] }>;

    getPoolAddressOf(
      _poolAdminAddr: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPoolDetail(
      _poolAddr: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        _admin: string;
        _stakingAmount: BigNumber;
        _stakingTotal: BigNumber;
      }
    >;

    getReward(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakingAmount(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakingTotal(
      _poolAddr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isAdminOfActivePool(
      _poolAdminAddr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCooldownSecsToUndelegate(
      _cooldownSecs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWaitingSecsToRevoke(
      _secs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    waitingSecsToRevoke(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  cooldownSecsToUndelegate(overrides?: CallOverrides): Promise<BigNumber>;

  getContract(
    contractType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getManySelfStakings(
    _pools: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getManyStakingAmounts(
    _poolAddrs: string[],
    _userList: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getManyStakingTotals(
    _poolList: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getPoolAddressOf(
    _poolAdminAddr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getPoolDetail(
    _poolAddr: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      _admin: string;
      _stakingAmount: BigNumber;
      _stakingTotal: BigNumber;
    }
  >;

  getReward(
    _poolAddr: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakingAmount(
    _poolAddr: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakingTotal(
    _poolAddr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isAdminOfActivePool(
    _poolAdminAddr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setContract(
    contractType: BigNumberish,
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCooldownSecsToUndelegate(
    _cooldownSecs: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWaitingSecsToRevoke(
    _secs: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  waitingSecsToRevoke(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cooldownSecsToUndelegate(overrides?: CallOverrides): Promise<BigNumber>;

    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getManySelfStakings(
      _pools: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getManyStakingAmounts(
      _poolAddrs: string[],
      _userList: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getManyStakingTotals(
      _poolList: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getPoolAddressOf(
      _poolAdminAddr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getPoolDetail(
      _poolAddr: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        _admin: string;
        _stakingAmount: BigNumber;
        _stakingTotal: BigNumber;
      }
    >;

    getReward(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingAmount(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingTotal(
      _poolAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAdminOfActivePool(
      _poolAdminAddr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCooldownSecsToUndelegate(
      _cooldownSecs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setWaitingSecsToRevoke(
      _secs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    waitingSecsToRevoke(overrides?: CallOverrides): Promise<BigNumber>;
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

    "CooldownSecsToUndelegateUpdated(uint256)"(
      minSecs?: null
    ): CooldownSecsToUndelegateUpdatedEventFilter;
    CooldownSecsToUndelegateUpdated(
      minSecs?: null
    ): CooldownSecsToUndelegateUpdatedEventFilter;

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

    "WaitingSecsToRevokeUpdated(uint256)"(
      secs?: null
    ): WaitingSecsToRevokeUpdatedEventFilter;
    WaitingSecsToRevokeUpdated(
      secs?: null
    ): WaitingSecsToRevokeUpdatedEventFilter;
  };

  estimateGas: {
    cooldownSecsToUndelegate(overrides?: CallOverrides): Promise<BigNumber>;

    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getManySelfStakings(
      _pools: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getManyStakingAmounts(
      _poolAddrs: string[],
      _userList: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getManyStakingTotals(
      _poolList: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolAddressOf(
      _poolAdminAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolDetail(
      _poolAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReward(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingAmount(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingTotal(
      _poolAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAdminOfActivePool(
      _poolAdminAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCooldownSecsToUndelegate(
      _cooldownSecs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWaitingSecsToRevoke(
      _secs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    waitingSecsToRevoke(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cooldownSecsToUndelegate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getManySelfStakings(
      _pools: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getManyStakingAmounts(
      _poolAddrs: string[],
      _userList: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getManyStakingTotals(
      _poolList: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolAddressOf(
      _poolAdminAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolDetail(
      _poolAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReward(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingAmount(
      _poolAddr: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingTotal(
      _poolAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAdminOfActivePool(
      _poolAdminAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCooldownSecsToUndelegate(
      _cooldownSecs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWaitingSecsToRevoke(
      _secs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    waitingSecsToRevoke(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
