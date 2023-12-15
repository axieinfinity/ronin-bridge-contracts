import { BigNumberish, BytesLike } from 'ethers';
import { TransparentUpgradeableProxyV2__factory } from '../types';
import { Address  } from 'hardhat-deploy/dist/types';
import { JsonRpcProvider } from '@ethersproject/providers';

export const proxyInterface = new TransparentUpgradeableProxyV2__factory().interface;

export enum Network {
  Testnet = 'ronin-testnet',
  Mainnet = 'ronin-mainnet',
  Ethereum = 'ethereum',
}

export const proxyCall = (calldata: BytesLike) => proxyInterface.encodeFunctionData('functionDelegateCall', [calldata]);

export interface ProposalSegmentArguments {
  target?: Address;
  value: BigNumberish;
  data?: BytesLike;
  gasAmount: BigNumberish;
}

export const defaultSegment: ProposalSegmentArguments = {
  gasAmount: 1_000_000,
  value: 0,
};

export const explorerUrl = {
  [Network.Testnet]: 'https://saigon-app.roninchain.com',
  [Network.Mainnet]: 'https://app.roninchain.com',
  [Network.Ethereum]: 'https://etherscan.io/',
};

export async function checkProposalGas(from: string, provider: JsonRpcProvider, proposal: ProposalSegmentArguments): Promise<boolean> {
  let gas = await provider.estimateGas({
    from: from,
    to: proposal.target,
    data: proposal.data,
    value: proposal.value,
  })

  if (gas > proposal.gasAmount)
    return false;

  return true;
}
