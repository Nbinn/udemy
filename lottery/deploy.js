const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'era always exile target essay service frequent miss model borrow book domain',
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/acedc48a876b4761902f2c17eba022cb'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });
  
  console.log(interface);
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
