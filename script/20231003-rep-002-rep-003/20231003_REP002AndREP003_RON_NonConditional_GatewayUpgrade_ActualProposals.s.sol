// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { StdStyle } from "forge-std/StdStyle.sol";

import "./20231003_REP002AndREP003_RON_NonConditional_Wrapup2Periods.s.sol";
import { BridgeRewardDeploy } from "./contracts/BridgeRewardDeploy.s.sol";
import { BridgeSlashDeploy } from "./contracts/BridgeSlashDeploy.s.sol";
import { RoninBridgeManagerDeploy } from "./contracts/RoninBridgeManagerDeploy.s.sol";

import { RoninGatewayV3 } from "@ronin/contracts/ronin/gateway/RoninGatewayV3.sol";
import { BridgeReward } from "@ronin/contracts/ronin/gateway/BridgeReward.sol";
import { BridgeSlash } from "@ronin/contracts/ronin/gateway/BridgeSlash.sol";
import { RoninBridgeManager } from "@ronin/contracts/ronin/gateway/RoninBridgeManager.sol";
import { BridgeTracking } from "@ronin/contracts/ronin/gateway/BridgeTracking.sol";
import { TransparentUpgradeableProxyV2 } from "@ronin/contracts/extensions/TransparentUpgradeableProxyV2.sol";

contract Simulation_20231003_REP002AndREP003_RON_NonConditional_GatewayUpgrade_ActualProposal is
  Simulation__20231003_UpgradeREP002AndREP003_RON_NonConditional_Wrapup2Periods
{
  function _hookSetDepositCount() internal pure override returns (uint256) {
    return 42587; // fork-block-number 28540134
  }

  function _hookPrankOperator() internal pure override returns (address) {
    return 0x32015E8B982c61bc8a593816FdBf03A603EEC823;
  }

  function run() public virtual override trySetUp {
    Simulation__20231003_UpgradeREP002AndREP003_Base.run();

    address[12] memory governors = [
      0x02201F9bfD2FaCe1b9f9D30d776E77382213Da1A,
      0x4620fb95eaBDaB4Bf681D987e116e0aAef1adEF2,
      0x5832C3219c1dA998e828E1a2406B73dbFC02a70C,
      0x58aBcBCAb52dEE942491700CD0DB67826BBAA8C6,
      0x60c4B72fc62b3e3a74e283aA9Ba20d61dD4d8F1b,
      0x77Ab649Caa7B4b673C9f2cF069900DF48114d79D,
      0x90ead0E8d5F5Bf5658A2e6db04535679Df0f8E43,
      0xbaCB04eA617b3E5EEe0E3f6E8FCB5Ba886B83958,
      0xD5877c63744903a459CCBa94c909CDaAE90575f8,
      0xe258f9996723B910712D6E67ADa4EafC15F7F101,
      0xe880802580a1fbdeF67ACe39D1B21c5b2C74f059,
      0xea172676E4105e92Cc52DBf45fD93b274eC96676
    ];

    // -------------- Day #1 --------------------
    vm.prank(governors[0]);
    address(_roninGovernanceAdmin).call(
      hex"663ac01100000000000000000000000000000000000000000000000000000000653a2ec800000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000002e0000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000011c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000617c5d73662282ea7ffd231e020eca6d2b0d552f000000000000000000000000617c5d73662282ea7ffd231e020eca6d2b0d552f000000000000000000000000545edb750eb8769c868429be9586f5857a768758000000000000000000000000ebfff2b32fa0df9c5c8c5d5aaa7e8b51d5207ba3000000000000000000000000ebfff2b32fa0df9c5c8c5d5aaa7e8b51d5207ba300000000000000000000000098d0230884448b3e2f09a177433d60fb1e19c0900000000000000000000000003fb325b251ee80945d3fc8c7692f5affca1b8bc2000000000000000000000000c768423a2ae2b5024cb58f3d6449a8f5db6d8816000000000000000000000000c768423a2ae2b5024cb58f3d6449a8f5db6d88160000000000000000000000000cf8ff40a508bdbc39fbe1bb679dcba64e65c7df0000000000000000000000000cf8ff40a508bdbc39fbe1bb679dcba64e65c7df0000000000000000000000003fb325b251ee80945d3fc8c7692f5affca1b8bc20000000000000000000000001c952d6717ebfd2e92e5f43ef7c1c3f7677f007d0000000000000000000000003fb325b251ee80945d3fc8c7692f5affca1b8bc2000000000000000000000000323092ab0900281efd0ef5954b0a612ce7755f9c0000000000000000000000000cf8ff40a508bdbc39fbe1bb679dcba64e65c7df000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000003800000000000000000000000000000000000000000000000000000000000000440000000000000000000000000000000000000000000000000000000000000052000000000000000000000000000000000000000000000000000000000000005e00000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000007c0000000000000000000000000000000000000000000000000000000000000088000000000000000000000000000000000000000000000000000000000000009400000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000b200000000000000000000000000000000000000000000000000000000000000b600000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000c4000000000000000000000000000000000000000000000000000000000000000844f1ef2860000000000000000000000000c1dee1b435c464b4e94781f94f991cb90e3399d000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000243101cfcb000000000000000000000000a30b2932cd8b8a89e34551cdfa13810af38da576000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844f1ef2860000000000000000000000008ae952d538e9c25120e9c75fba0718750f81313a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a44f1ef286000000000000000000000000440baf1c4b008ee4d617a83401f06aa80f5163e90000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002429b6eca9000000000000000000000000946397dedfd2f79b75a72b322944a21c3240c9c3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000243101cfcb000000000000000000000000840ebf1ca767cb690029e91856a357a43b85d035000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000243659cfe60000000000000000000000000aada85a2b3c9fb1be158d43e71cdcca6fe85e020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844f1ef286000000000000000000000000e4ccf400e99cb07eb76d3a169532916069b7dc32000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844f1ef2860000000000000000000000007ccbb3cd1b19bc1f1d5b7048400d41b1b796abad000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000243c3d84100000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844f1ef2860000000000000000000000001477db6bf449b0eb1191a1f4023867ddceadc504000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000243101cfcb0000000000000000000000005a6073071f151fe282aa1267870cde1aff85ff28000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e44bb5274a00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000084ca21287e0000000000000000000000005a6073071f151fe282aa1267870cde1aff85ff28000000000000000000000000323092ab0900281efd0ef5954b0a612ce7755f9c0000000000000000000000001c952d6717ebfd2e92e5f43ef7c1c3f7677f007d000000000000000000000000946397dedfd2f79b75a72b322944a21c3240c9c3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043b1544550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000644bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000043b154455000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043b1544550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000248f2839700000000000000000000000005a6073071f151fe282aa1267870cde1aff85ff2800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f4240"
    );

    // -------------- Day #2 (execute proposal on ronin) --------------------
    _fastForwardToNextDay();
    _wrapUpEpoch();

    vm.warp(block.timestamp + 3 seconds);
    vm.roll(block.number + 1);

    // -- execute proposal

    for (uint i = 1; i < governors.length - 3; i++) {
      vm.prank(governors[i]);
      address(_roninGovernanceAdmin).call(
        hex"a8a0e32c00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000007e400000000000000000000000000000000000000000000000000000000653a2ec800000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000052000000000000000000000000000000000000000000000000000000000000011e00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000617c5d73662282ea7ffd231e020eca6d2b0d552f000000000000000000000000617c5d73662282ea7ffd231e020eca6d2b0d552f000000000000000000000000545edb750eb8769c868429be9586f5857a768758000000000000000000000000ebfff2b32fa0df9c5c8c5d5aaa7e8b51d5207ba3000000000000000000000000ebfff2b32fa0df9c5c8c5d5aaa7e8b51d5207ba300000000000000000000000098d0230884448b3e2f09a177433d60fb1e19c0900000000000000000000000003fb325b251ee80945d3fc8c7692f5affca1b8bc2000000000000000000000000c768423a2ae2b5024cb58f3d6449a8f5db6d8816000000000000000000000000c768423a2ae2b5024cb58f3d6449a8f5db6d88160000000000000000000000000cf8ff40a508bdbc39fbe1bb679dcba64e65c7df0000000000000000000000000cf8ff40a508bdbc39fbe1bb679dcba64e65c7df0000000000000000000000003fb325b251ee80945d3fc8c7692f5affca1b8bc20000000000000000000000001c952d6717ebfd2e92e5f43ef7c1c3f7677f007d0000000000000000000000003fb325b251ee80945d3fc8c7692f5affca1b8bc2000000000000000000000000323092ab0900281efd0ef5954b0a612ce7755f9c0000000000000000000000000cf8ff40a508bdbc39fbe1bb679dcba64e65c7df000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000003800000000000000000000000000000000000000000000000000000000000000440000000000000000000000000000000000000000000000000000000000000052000000000000000000000000000000000000000000000000000000000000005e00000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000007c0000000000000000000000000000000000000000000000000000000000000088000000000000000000000000000000000000000000000000000000000000009400000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000b200000000000000000000000000000000000000000000000000000000000000b600000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000c4000000000000000000000000000000000000000000000000000000000000000844f1ef2860000000000000000000000000c1dee1b435c464b4e94781f94f991cb90e3399d000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000243101cfcb000000000000000000000000a30b2932cd8b8a89e34551cdfa13810af38da576000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844f1ef2860000000000000000000000008ae952d538e9c25120e9c75fba0718750f81313a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a44f1ef286000000000000000000000000440baf1c4b008ee4d617a83401f06aa80f5163e90000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002429b6eca9000000000000000000000000946397dedfd2f79b75a72b322944a21c3240c9c3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000243101cfcb000000000000000000000000840ebf1ca767cb690029e91856a357a43b85d035000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000243659cfe60000000000000000000000000aada85a2b3c9fb1be158d43e71cdcca6fe85e020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844f1ef286000000000000000000000000e4ccf400e99cb07eb76d3a169532916069b7dc32000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844f1ef2860000000000000000000000007ccbb3cd1b19bc1f1d5b7048400d41b1b796abad000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000243c3d84100000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844f1ef2860000000000000000000000001477db6bf449b0eb1191a1f4023867ddceadc504000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000045cd8a76b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000243101cfcb0000000000000000000000005a6073071f151fe282aa1267870cde1aff85ff28000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e44bb5274a00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000084ca21287e0000000000000000000000005a6073071f151fe282aa1267870cde1aff85ff28000000000000000000000000323092ab0900281efd0ef5954b0a612ce7755f9c0000000000000000000000001c952d6717ebfd2e92e5f43ef7c1c3f7677f007d000000000000000000000000946397dedfd2f79b75a72b322944a21c3240c9c3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043b1544550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000644bb5274a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000043b154455000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043b1544550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000248f2839700000000000000000000000005a6073071f151fe282aa1267870cde1aff85ff2800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000f4240"
      );
    }
    // -- done execute proposal

    // Deposit for
    vm.warp(block.timestamp + 3 seconds);
    vm.roll(block.number + 1);
    // _depositFor("after-upgrade-REP2");
    // _dummySwitchNetworks();
    _depositForOnlyOnRonin("after-upgrade-REP2");

    _fastForwardToNextEpoch();
    vm.warp(block.timestamp + 3 seconds);
    vm.roll(block.number + 1);
    _depositForOnlyOnRonin("after-upgrade-REP2_a");

    _fastForwardToNextEpoch();
    vm.warp(block.timestamp + 3 seconds);
    vm.roll(block.number + 1);
    _depositForOnlyOnRonin("after-upgrade-REP2_b");

    // -------------- End of Day #2 --------------------

    // - wrap up period
    _fastForwardToNextDay();
    _wrapUpEpoch();

    vm.warp(block.timestamp + 3 seconds);
    vm.roll(block.number + 1);
    _depositForOnlyOnRonin("after-wrapup-Day2"); // share bridge reward here
    // _depositFor("after-DAY2");

    _fastForwardToNextEpoch();
    vm.warp(block.timestamp + 3 seconds);
    vm.roll(block.number + 1);
    _depositForOnlyOnRonin("after-wrapup-Day2_a");

    // - deposit for

    // -------------- End of Day #3 --------------------
    // - wrap up period
    _fastForwardToNextDay();
    _wrapUpEpoch();

    vm.warp(block.timestamp + 3 seconds);
    vm.roll(block.number + 1);
    _depositForOnlyOnRonin("after-wrapup-Day3"); // share bridge reward here
  }
}
