require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  gasReporter: {
    currency: "CHF",
    gasPrice: 21,
    enabled: true,
  },
  solidity: "0.5.16",

  networks: {
    apothem: {
      url: "https://rpc.apothem.network/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 51,
    },
    xinfin: {
      url: "https://erpc.xinfin.network",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
