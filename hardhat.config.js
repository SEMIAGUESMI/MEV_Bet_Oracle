require("@nomicfoundation/hardhat-ignition-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YOUR-ALCHEMY-API-KEY", 
      accounts:["YOUR-WALLET-PRIVATE-KEY" ]
    }
    }
};
