let assert=require('assert')
let ganache=require('ganache-cli')
let Web3=require('web3')

let web3=new Web3(ganache.provider())


// let Labor=require('../compile2')

let {[':Labor']:{bytecode,interface}}=require('../compile2')

let fs=require('fs')


let accounts;
let deployment_account;
let info_contract;
beforeEach(async ()=>{
    accounts=await web3.eth.getAccounts()
    deployment_account=accounts[0]
    info_contract=await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode,arguments:['ABC',40,'Farming','This is a Farmer']})
    .send({from:deployment_account,gas:'1000000'})


    // This Contract constructor can be used to deploy a new contract or to interact with the existing contracts
    // new web3.eth.Contract(JSON.parse(interface)) -> This line does not speak specifically about any contract and it is just saying that this kind of interface exists and teaches about what method does Labor contract has

    // This deploy method says the web3 that we want to create a new contract and creates a object that can be deployed in the network




    
})

describe('Contract Testing',()=>{
    // it('Checking Name',function(){
        // assert.equal()
        // console.log(info_contract)


        // The current provider attribute in the info_contract helps to make communication the with actual blockchain

        // IPC Provider helps you when you are running blockchain or network on the same machine

        
        // console.log(deployment_account)        
    // })



    it('Deployment of the Contract',function(){
        

        // In order to check whether the contract is deployed or not we can just check the address of the contract


        assert.ok(info_contract.options.address)

        // if this is a truthy value then assert.ok will pass


    })



    it('Checking the default Name',async function(){
        // assert.equal(info_contract.methods.name(),"ABC");
        let name=await info_contract.methods.name().call()


        assert.equal(name,"ABC")



    })


    it('Changing the Name',async function(){
        let res=await info_contract.methods.change_name("DEF").send({from:deployment_account})
// If anything fails here then it will throw an error so we don't need to store it in a variable check it
// We know whenever we make a transaction we get a transaction receipt containing the transaction hash

        console.log('\t\tTransaction Hash : '+res.transactionHash)

        let name=await info_contract.methods.name().call()
        assert.equal(name,'DEF')
    })
})


// We are going to use Infura API in order to deploy the contract to the Rinkeby Test Network and this is because in order to deploy the Contract we have to run as a Node in that network but in order to not run a node we will use Infura Api because Infura has Nodes in Rinkeby Test Network

// fetch('https://rinkeby.infura.io/v3/0244c052fc134e28b011c3c41bbf877e')



// @truffle/hdwallet-provider is the account to create account which can be used by us to deploy the contract and this was not the case in ganache because it already provided us some free accounts

