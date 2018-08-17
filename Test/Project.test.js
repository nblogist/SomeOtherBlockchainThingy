const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider =  ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../Compile.js');

let deployed;
let accounts;
beforeEach('Deploying Contract Using ganache', async()=> {
    accounts = await web3.eth.getAccounts();
    deployed = await new web3.eth.Contract(JSON.parse(interface))
                .deploy ({data : bytecode , arguments : ['Furqan Ahmed']})
                .send ({from : accounts [0], gas : 1000000});
    
});

describe ('Project Testing', () => {

    it('Testing Candidate Name', () => {
        assert.ok(deployed.methods.Candidate().call());
    })

    it('Increasing Likes', async() => {
        const prevLike =  await deployed.methods.Result().call();
        await deployed.methods.Like().send({from: accounts[0]});
        assert.equal(prevLike+1, await deployed.methods.Result().call());
    });

    it('Increasing Dislikes', async() =>{
        const prevDisLike = await deployed.methods.Result().call();
        await deployed.methods.Dislike().send({from: accounts[0]});
        assert.equal(prevDisLike+1, await deployed.methods.Result().call());
    });
})































/*let nameofcandi;
class Candidate
{
   
    constructor(name) {
         nameofcandi = name;
    }

    qualified () {
        return 'passed'
    }

    age ()
    {
        return '5';
    }

    Name ()
    {
        return nameofcandi;
    }

}

let candi; 

beforeEach ('Check if Candidate Name is given', () =>{
    candi = new Candidate("Furqan");
    assert.ok(nameofcandi);
});

describe ('Checking candidate', () =>{

    it('Checks Qualification' , () =>{
        assert.equal(candi.qualified(), 'passed');
    });

    it('Checks age', () => {
        assert.equal (candi.age(), '5');
    });

    it ('Checks Name', () =>{
        assert.equal(candi.Name(),'Furqan');
    });
});*/