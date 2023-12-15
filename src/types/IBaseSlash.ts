/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IBaseSlashInterface extends utils.Interface {
  functions: {};

  events: {
    "Slashed(address,uint8,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Slashed"): EventFragment;
}

export type SlashedEvent = TypedEvent<
  [string, number, BigNumber],
  { validator: string; slashType: number; period: BigNumber }
>;

export type SlashedEventFilter = TypedEventFilter<SlashedEvent>;

export interface IBaseSlash extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBaseSlashInterface;

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

  functions: {};

  callStatic: {};

  filters: {
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
  };

  estimateGas: {};

  populateTransaction: {};
}
