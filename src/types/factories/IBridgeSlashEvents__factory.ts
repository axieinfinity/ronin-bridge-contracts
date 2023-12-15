/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBridgeSlashEvents,
  IBridgeSlashEventsInterface,
} from "../IBridgeSlashEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bridgeOperator",
        type: "address",
      },
    ],
    name: "RemovalRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum IBridgeSlashEvents.Tier",
        name: "tier",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bridgeOperator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slashUntilPeriod",
        type: "uint256",
      },
    ],
    name: "Slashed",
    type: "event",
  },
];

export class IBridgeSlashEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IBridgeSlashEventsInterface {
    return new utils.Interface(_abi) as IBridgeSlashEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBridgeSlashEvents {
    return new Contract(address, _abi, signerOrProvider) as IBridgeSlashEvents;
  }
}
