require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { SEPOLIA_URL, SECRET_KEY, ETHERSCAN_KEY } = process.env;

console.log("SEPOLIA_URL :>> ", SEPOLIA_URL);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_URL || "",
      accounts: SECRET_KEY != undefined ? [SECRET_KEY] : [],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY || "",
  },
};
