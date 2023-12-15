/// npx hardhat deploy --tags MapTokenMainchain --network ethereum

import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { explorerUrl, ProposalSegmentArguments, proxyCall, defaultSegment, checkProposalGas } from '../upgradeUtils';
import { network } from 'hardhat';
import { MainchainGatewayV3__factory } from '../../types';

const deploy = async ({ getNamedAccounts, deployments, ethers }: HardhatRuntimeEnvironment) => {
  const { execute } = deployments;
  let { governor } = await getNamedAccounts(); // NOTE: Should double check the `governor` account in the `hardhat.config.ts` file
  console.log('Governor:', governor);

  // const MainchainGatewayProxy = '0x64192819Ac13Ef72bF6b5AE239AC672B43a9AF08';
  const MainchainGatewayProxy = await deployments.get('MainchainGatewayV3Proxy');
  const MainchainBridgeManager = await deployments.get('MainchainBridgeManager');

  const AGGRoninToken = '0x294311a8c37f0744f99eb152c419d4d3d6fec1c7';
  const AGGMainchainToken = '0xfb0489e9753b045ddb35e39c6b0cc02ec6b99ac5';

  let proposalSegments: ProposalSegmentArguments[] = [
    {
        ...defaultSegment,
        target: MainchainGatewayProxy.address,

        // function mapTokensAndThresholds(
        //   address[] calldata _mainchainTokens,
        //   address[] calldata _roninTokens,
        //   Token.Standard[] calldata _standards,
        //   // _thresholds[0]: highTierThreshold
        //   // _thresholds[1]: lockedThreshold
        //   // _thresholds[2]: unlockFeePercentages
        //   // _thresholds[3]: dailyWithdrawalLimit
        //   uint256[][4] calldata _thresholds
        // )

        data: proxyCall(MainchainGatewayV3__factory.createInterface().encodeFunctionData('mapTokensAndThresholds', [
          [AGGMainchainToken],
          [AGGRoninToken],
          [0], // Token.Standard ERC20
          [
            [], // highTierThreshold
            [], // lockedThreshold
            [], // unlockFeePercentages
            [], // dailyWithdrawalLimit
          ],
        ])),
    }
  ];

  if (await checkProposalGas(MainchainBridgeManager.address, ethers.provider, proposalSegments[0])) {
    console.log('Not enough gas in the proposal');
    return;
  }

  const blockNumBefore = await ethers.provider.getBlockNumber();
  const blockBefore = await ethers.provider.getBlock(blockNumBefore);
  const timestampBefore = blockBefore.timestamp;
  const proposalExpiryTimestamp = timestampBefore + 3600 * 24 * 10; // expired in 10 days

  const tx = await execute(
    'MainchainBridgeManager',
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

    1,
    proposalExpiryTimestamp, // expiryTimestamp
    [...proposalSegments.map((_) => _.target)], // targets
    [...proposalSegments.map((_) => _.value)], // values
    [...proposalSegments.map((_) => _.data)], // datas
    [...proposalSegments.map((_) => _.gasAmount)], // gasAmount
  );

  console.log(`${explorerUrl[network.name!]}/tx/${tx.transactionHash}`);
};

deploy.tags = ['MapTokenMainchain'];

export default deploy;
