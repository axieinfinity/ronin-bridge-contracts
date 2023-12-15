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

export interface SlashUnavailabilityInterface extends utils.Interface {
  functions: {
    "checkBailedOutAtPeriod(address,uint256)": FunctionFragment;
    "currentUnavailabilityIndicator(address)": FunctionFragment;
    "getContract(uint8)": FunctionFragment;
    "getUnavailabilityIndicator(address,uint256)": FunctionFragment;
    "getUnavailabilitySlashingConfigs()": FunctionFragment;
    "lastUnavailabilitySlashedBlock()": FunctionFragment;
    "setContract(uint8,address)": FunctionFragment;
    "setUnavailabilitySlashingConfigs(uint256,uint256,uint256,uint256)": FunctionFragment;
    "slashUnavailability(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkBailedOutAtPeriod",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentUnavailabilityIndicator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getContract",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnavailabilityIndicator",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnavailabilitySlashingConfigs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUnavailabilitySlashedBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setContract",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUnavailabilitySlashingConfigs",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "slashUnavailability",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkBailedOutAtPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentUnavailabilityIndicator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnavailabilityIndicator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnavailabilitySlashingConfigs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUnavailabilitySlashedBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUnavailabilitySlashingConfigs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slashUnavailability",
    data: BytesLike
  ): Result;

  events: {
    "ContractUpdated(uint8,address)": EventFragment;
    "Slashed(address,uint8,uint256)": EventFragment;
    "UnavailabilitySlashingConfigsUpdated(uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Slashed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "UnavailabilitySlashingConfigsUpdated"
  ): EventFragment;
}

export type ContractUpdatedEvent = TypedEvent<
  [number, string],
  { contractType: number; addr: string }
>;

export type ContractUpdatedEventFilter = TypedEventFilter<ContractUpdatedEvent>;

export type SlashedEvent = TypedEvent<
  [string, number, BigNumber],
  { validator: string; slashType: number; period: BigNumber }
>;

export type SlashedEventFilter = TypedEventFilter<SlashedEvent>;

export type UnavailabilitySlashingConfigsUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  {
    unavailabilityTier1Threshold: BigNumber;
    unavailabilityTier2Threshold: BigNumber;
    slashAmountForUnavailabilityTier2Threshold: BigNumber;
    jailDurationForUnavailabilityTier2Threshold: BigNumber;
  }
>;

export type UnavailabilitySlashingConfigsUpdatedEventFilter =
  TypedEventFilter<UnavailabilitySlashingConfigsUpdatedEvent>;

export interface SlashUnavailability extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SlashUnavailabilityInterface;

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
    checkBailedOutAtPeriod(
      _validator: string,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    currentUnavailabilityIndicator(
      _validator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { contract_: string }>;

    getUnavailabilityIndicator(
      _validator: string,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnavailabilitySlashingConfigs(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        unavailabilityTier1Threshold_: BigNumber;
        unavailabilityTier2Threshold_: BigNumber;
        slashAmountForUnavailabilityTier2Threshold_: BigNumber;
        jailDurationForUnavailabilityTier2Threshold_: BigNumber;
      }
    >;

    lastUnavailabilitySlashedBlock(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUnavailabilitySlashingConfigs(
      _tier1Threshold: BigNumberish,
      _tier2Threshold: BigNumberish,
      _slashAmountForTier2Threshold: BigNumberish,
      _jailDurationForTier2Threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slashUnavailability(
      _validatorAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  checkBailedOutAtPeriod(
    _validator: string,
    _period: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  currentUnavailabilityIndicator(
    _validator: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getContract(
    contractType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getUnavailabilityIndicator(
    _validator: string,
    _period: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUnavailabilitySlashingConfigs(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      unavailabilityTier1Threshold_: BigNumber;
      unavailabilityTier2Threshold_: BigNumber;
      slashAmountForUnavailabilityTier2Threshold_: BigNumber;
      jailDurationForUnavailabilityTier2Threshold_: BigNumber;
    }
  >;

  lastUnavailabilitySlashedBlock(overrides?: CallOverrides): Promise<BigNumber>;

  setContract(
    contractType: BigNumberish,
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUnavailabilitySlashingConfigs(
    _tier1Threshold: BigNumberish,
    _tier2Threshold: BigNumberish,
    _slashAmountForTier2Threshold: BigNumberish,
    _jailDurationForTier2Threshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slashUnavailability(
    _validatorAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkBailedOutAtPeriod(
      _validator: string,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    currentUnavailabilityIndicator(
      _validator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getUnavailabilityIndicator(
      _validator: string,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnavailabilitySlashingConfigs(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        unavailabilityTier1Threshold_: BigNumber;
        unavailabilityTier2Threshold_: BigNumber;
        slashAmountForUnavailabilityTier2Threshold_: BigNumber;
        jailDurationForUnavailabilityTier2Threshold_: BigNumber;
      }
    >;

    lastUnavailabilitySlashedBlock(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUnavailabilitySlashingConfigs(
      _tier1Threshold: BigNumberish,
      _tier2Threshold: BigNumberish,
      _slashAmountForTier2Threshold: BigNumberish,
      _jailDurationForTier2Threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    slashUnavailability(
      _validatorAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;
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

    "Slashed(address,uint8,uint256)"(
      validator?: string | null,
      slashType?: null,
      period?: null
    ): SlashedEventFilter;
    Slashed(
      validator?: string | null,
      slashType?: null,
      period?: null
    ): SlashedEventFilter;

    "UnavailabilitySlashingConfigsUpdated(uint256,uint256,uint256,uint256)"(
      unavailabilityTier1Threshold?: null,
      unavailabilityTier2Threshold?: null,
      slashAmountForUnavailabilityTier2Threshold?: null,
      jailDurationForUnavailabilityTier2Threshold?: null
    ): UnavailabilitySlashingConfigsUpdatedEventFilter;
    UnavailabilitySlashingConfigsUpdated(
      unavailabilityTier1Threshold?: null,
      unavailabilityTier2Threshold?: null,
      slashAmountForUnavailabilityTier2Threshold?: null,
      jailDurationForUnavailabilityTier2Threshold?: null
    ): UnavailabilitySlashingConfigsUpdatedEventFilter;
  };

  estimateGas: {
    checkBailedOutAtPeriod(
      _validator: string,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentUnavailabilityIndicator(
      _validator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnavailabilityIndicator(
      _validator: string,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnavailabilitySlashingConfigs(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUnavailabilitySlashedBlock(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUnavailabilitySlashingConfigs(
      _tier1Threshold: BigNumberish,
      _tier2Threshold: BigNumberish,
      _slashAmountForTier2Threshold: BigNumberish,
      _jailDurationForTier2Threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slashUnavailability(
      _validatorAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkBailedOutAtPeriod(
      _validator: string,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentUnavailabilityIndicator(
      _validator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContract(
      contractType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnavailabilityIndicator(
      _validator: string,
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnavailabilitySlashingConfigs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUnavailabilitySlashedBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setContract(
      contractType: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUnavailabilitySlashingConfigs(
      _tier1Threshold: BigNumberish,
      _tier2Threshold: BigNumberish,
      _slashAmountForTier2Threshold: BigNumberish,
      _jailDurationForTier2Threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slashUnavailability(
      _validatorAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
