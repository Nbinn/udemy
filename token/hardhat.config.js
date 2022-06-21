/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle')
const INFURA_URL = "https://rinkeby.infura.io/v3/acedc48a876b4761902f2c17eba022cb";
const PRIVATE_KEY = "22cdabb29be3b6037b7258325c15629d78b52d7954c17b136c551f786842a03e"

module.exports = {
  solidity: "0.8.0",
  networks:{
    rinkeby:{
      url: INFURA_URL,
      accounts: ['0x'+PRIVATE_KEY]
    }
  }
};
