const HDwallet = require('truffle-hdwallet-provider');
const Web3 = require ('web3');
const {interface, bytecode} = require ('./Compile.js');

const provider = new HDwallet 
(
    'issue planet wonder jealous emerge fabric purse rely tonight unhappy fold elevator' ,
    'https://rinkeby.infura.io/v3/18c25be0ecce41fd81fcb320101aaca9'
);

const web3 = new Web3 (provider);

const deploy= async() =>{

    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);
    const log = await new web3.eth.Contract (JSON.parse(interface))
        .deploy ({data: '0x' + bytecode, arguments :['Furqan Ahmed']})
        .send ({gas : 1000000, from : accounts[0]});
    console.log('Contract Deployed at ', log.options.address);
};

deploy();