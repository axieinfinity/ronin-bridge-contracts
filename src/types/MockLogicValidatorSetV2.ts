/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MockLogicValidatorSetV2Interface extends utils.Interface {
  functions: {
    "currentPeriod()": FunctionFragment;
    "version()": FunctionFragment;
    "wrapUpEpoch()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "currentPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wrapUpEpoch",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "currentPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrapUpEpoch",
    data: BytesLike
  ): Result;

  events: {
    "Received(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
}

export type ReceivedEvent = TypedEvent<[string], { version: string }>;

export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;

export interface MockLogicValidatorSetV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockLogicValidatorSetV2Interface;

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
    currentPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    version(overrides?: CallOverrides): Promise<[string]>;

    wrapUpEpoch(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  version(overrides?: CallOverrides): Promise<string>;

  wrapUpEpoch(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<string>;

    wrapUpEpoch(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Received(string)"(version?: null): ReceivedEventFilter;
    Received(version?: null): ReceivedEventFilter;
  };

  estimateGas: {
    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    wrapUpEpoch(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrapUpEpoch(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
