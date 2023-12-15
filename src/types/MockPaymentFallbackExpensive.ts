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

export interface MockPaymentFallbackExpensiveInterface extends utils.Interface {
  functions: {
    "array(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "array", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "array", data: BytesLike): Result;

  events: {
    "SafeReceived(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SafeReceived"): EventFragment;
}

export type SafeReceivedEvent = TypedEvent<
  [string, BigNumber],
  { sender: string; value: BigNumber }
>;

export type SafeReceivedEventFilter = TypedEventFilter<SafeReceivedEvent>;

export interface MockPaymentFallbackExpensive extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockPaymentFallbackExpensiveInterface;

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
    array(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  array(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    array(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "SafeReceived(address,uint256)"(
      sender?: string | null,
      value?: null
    ): SafeReceivedEventFilter;
    SafeReceived(sender?: string | null, value?: null): SafeReceivedEventFilter;
  };

  estimateGas: {
    array(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    array(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
