require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


require('dotenv').config()
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "";
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
const alchemyId = fs.readFileSync(".alchemyId").toString().trim() || "";

//console.log('infuraId:',infuraId)
//console.log('etherscan key', process.env.ETHERSCAN_API_KEY)

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
   
    },
    ropsten: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: `https://ropsten.infura.io/v3/${infuraId}`,
      accounts: [privateKey],  
    },
    mumbai: {
      // Alchemy
      url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyId}`,
      accounts: [privateKey]
    },
  
    mainnet: {
      // Alchemy
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    }
    
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    //apiKey:process.env.ETHERSCAN_API_KEY,
    apiKey:process.env.POLYGONSCAN_API_KEY,
  },
};

