// contract test code will go here
const asserts = require('assert'); 
const ganache  = require('ganache');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode} = require('../compile');


let accounts;
let inbox;
beforeEach( async () =>{
    accounts = await web3.eth.getAccounts();
    
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['hi'] })
        .send({from: accounts[0], gas: '1000000'})
});
describe('Inbox',() =>{
    it('deploy contract',() => {
        asserts.ok(inbox.options.address);
    });
    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        asserts.equal(message, 'hi');
    });
    it('can change the message', async ()=>{
        await inbox.methods.setMessage('bye').send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        asserts.equal(message, 'bye');
    });
});