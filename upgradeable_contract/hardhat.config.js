//require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
module.exports = {
  solidity: "0.8.10",
  networks:{
    rinkeby:{
      url: `${process.env.RINKEBY_URL}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }
};
