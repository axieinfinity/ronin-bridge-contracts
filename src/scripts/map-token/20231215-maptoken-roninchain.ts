/// npx hardhat deploy --tags MapTokenRoninchain --network ronin-mainnet

import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { explorerUrl, ProposalSegmentArguments, proxyCall, defaultSegment, checkProposalGas } from '../upgradeUtils';
import { network } from 'hardhat';
import { RoninGatewayV3__factory } from '../../types';

const deploy = async ({ getNamedAccounts, deployments, ethers }: HardhatRuntimeEnvironment) => {
  const { execute } = deployments;
  let { governor } = await getNamedAccounts(); // NOTE: Should double check the `governor` account in the `hardhat.config.ts` file
  console.log('Governor:', governor);

  // const RoninGatewayProxy = '0x0cf8ff40a508bdbc39fbe1bb679dcba64e65c7df';
  const RoninGatewayProxy = await deployments.get('RoninGatewayV3Proxy');
  const RoninBridgeManager = await deployments.get('RoninBridgeManager');

  const AGGRoninToken = '0x294311a8c37f0744f99eb152c419d4d3d6fec1c7';
  const AGGMainchainToken = '0xfb0489e9753b045ddb35e39c6b0cc02ec6b99ac5';

  let proposalSegments: ProposalSegmentArguments[] = [
    {
        ...defaultSegment,
        target: RoninGatewayProxy.address,

        // function mapTokens(
        //   address[] calldata _roninTokens,
        //   address[] calldata _mainchainTokens,
        //   uint256[] calldata _chainIds,
        //   Token.Standard[] calldata _standards
        // )

        data: proxyCall(RoninGatewayV3__factory.createInterface().encodeFunctionData('mapTokens', [
          [AGGRoninToken],
          [AGGMainchainToken],
          [1], // Ethereum chainId
          [0], // Token.Standard ERC20
        ])),
    }
  ];

  if (await checkProposalGas(RoninBridgeManager.address, ethers.provider, proposalSegments[0])) {
    console.log('Not enough gas in the proposal');
    return;
  }

  const blockNumBefore = await ethers.provider.getBlockNumber();
  const blockBefore = await ethers.provider.getBlock(blockNumBefore);
  const timestampBefore = blockBefore.timestamp;
  const proposalExpiryTimestamp = timestampBefore + 3600 * 24 * 10; // expired in 10 days

  const tx = await execute(
    'RoninBridgeManager',
    { from: governor, log: true },
    'propose',

    // function propose(
    //   uint256 _chainId,
    //   uint256 _expiryTimestamp,
    //   address[] calldata _targets,
    //   uint256[] calldata _values,
    //   bytes[] calldata _calldatas,
    //   uint256[] calldata _gasAmounts
    // )

    2020,
    proposalExpiryTimestamp, // expiryTimestamp
    [...proposalSegments.map((_) => _.target)], // targets
    [...proposalSegments.map((_) => _.value)], // values
    [...proposalSegments.map((_) => _.data)], // datas
    [...proposalSegments.map((_) => _.gasAmount)], // gasAmount
  );

  console.log(`${explorerUrl[network.name!]}/tx/${tx.transactionHash}`);
};

deploy.tags = ['MapTokenRoninchain'];

export default deploy;
