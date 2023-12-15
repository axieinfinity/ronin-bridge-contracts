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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MockPrecompileInterface extends utils.Interface {
  functions: {
    "pickValidatorSet(address[],uint256[],uint256[],uint256,uint256)": FunctionFragment;
    "sortValidators(address[],uint256[])": FunctionFragment;
    "validateFinalityVoteProof(bytes,uint256,bytes32[2],bytes[][2],bytes[2])": FunctionFragment;
    "validatingDoubleSignProof(address,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "pickValidatorSet",
    values: [
      string[],
      BigNumberish[],
      BigNumberish[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sortValidators",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "validateFinalityVoteProof",
    values: [
      BytesLike,
      BigNumberish,
      [BytesLike, BytesLike],
      [BytesLike[], BytesLike[]],
      [BytesLike, BytesLike]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validatingDoubleSignProof",
    values: [string, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "pickValidatorSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sortValidators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateFinalityVoteProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatingDoubleSignProof",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockPrecompile extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockPrecompileInterface;

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
    pickValidatorSet(
      _candidates: string[],
      _weights: BigNumberish[],
      _trustedWeights: BigNumberish[],
      _maxValidatorNumber: BigNumberish,
      _maxPrioritizedValidatorNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { _result: string[] }>;

    sortValidators(
      _validators: string[],
      _weights: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    validateFinalityVoteProof(
      arg0: BytesLike,
      arg1: BigNumberish,
      arg2: [BytesLike, BytesLike],
      arg3: [BytesLike[], BytesLike[]],
      arg4: [BytesLike, BytesLike],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validatingDoubleSignProof(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _validEvidence: boolean }>;
  };

  pickValidatorSet(
    _candidates: string[],
    _weights: BigNumberish[],
    _trustedWeights: BigNumberish[],
    _maxValidatorNumber: BigNumberish,
    _maxPrioritizedValidatorNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  sortValidators(
    _validators: string[],
    _weights: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<string[]>;

  validateFinalityVoteProof(
    arg0: BytesLike,
    arg1: BigNumberish,
    arg2: [BytesLike, BytesLike],
    arg3: [BytesLike[], BytesLike[]],
    arg4: [BytesLike, BytesLike],
    overrides?: CallOverrides
  ): Promise<boolean>;

  validatingDoubleSignProof(
    arg0: string,
    arg1: BytesLike,
    arg2: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    pickValidatorSet(
      _candidates: string[],
      _weights: BigNumberish[],
      _trustedWeights: BigNumberish[],
      _maxValidatorNumber: BigNumberish,
      _maxPrioritizedValidatorNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    sortValidators(
      _validators: string[],
      _weights: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    validateFinalityVoteProof(
      arg0: BytesLike,
      arg1: BigNumberish,
      arg2: [BytesLike, BytesLike],
      arg3: [BytesLike[], BytesLike[]],
      arg4: [BytesLike, BytesLike],
      overrides?: CallOverrides
    ): Promise<boolean>;

    validatingDoubleSignProof(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    pickValidatorSet(
      _candidates: string[],
      _weights: BigNumberish[],
      _trustedWeights: BigNumberish[],
      _maxValidatorNumber: BigNumberish,
      _maxPrioritizedValidatorNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sortValidators(
      _validators: string[],
      _weights: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateFinalityVoteProof(
      arg0: BytesLike,
      arg1: BigNumberish,
      arg2: [BytesLike, BytesLike],
      arg3: [BytesLike[], BytesLike[]],
      arg4: [BytesLike, BytesLike],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatingDoubleSignProof(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    pickValidatorSet(
      _candidates: string[],
      _weights: BigNumberish[],
      _trustedWeights: BigNumberish[],
      _maxValidatorNumber: BigNumberish,
      _maxPrioritizedValidatorNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sortValidators(
      _validators: string[],
      _weights: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateFinalityVoteProof(
      arg0: BytesLike,
      arg1: BigNumberish,
      arg2: [BytesLike, BytesLike],
      arg3: [BytesLike[], BytesLike[]],
      arg4: [BytesLike, BytesLike],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatingDoubleSignProof(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
