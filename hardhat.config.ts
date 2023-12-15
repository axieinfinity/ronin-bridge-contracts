import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import {
  HardhatUserConfig,
  NetworkUserConfig,
} from "hardhat/types";
import * as dotenv from "dotenv";

dotenv.config();

const { TESTNET_URL, MAINNET_URL, ETHEREUM_URL } = process.env;

const testnet: NetworkUserConfig = {
  chainId: 2021,
  url: TESTNET_URL || "https://saigon-testnet.roninchain.com/rpc",
};

const mainnet: NetworkUserConfig = {
  chainId: 2020,
  url: MAINNET_URL || "https://api.roninchain.com/rpc",
};

const ethereum: NetworkUserConfig = {
  chainId: 1,
  url: ETHEREUM_URL || 'https://gateway.tenderly.co/public/mainnet',
};

const config: HardhatUserConfig = {
  paths: {
    cache: "hardhat-cache",
		sources: "./src",
  },

  namedAccounts: {
    deployer: 0,
    governor: 0,
  },
  networks: {
    "ronin-testnet": testnet,
    "ronin-mainnet": mainnet,
    "ethereum": ethereum,
  },
};

export default config;