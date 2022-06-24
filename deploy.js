// deploy code will go here


let Web3=require('web3')
let HDWalletprovider=require('@truffle/hdwallet-provider')
let provider=new HDWalletprovider('bottom clever legal ranch pattern series office robust sleep utility goose twenty','https://rinkeby.infura.io/v3/0244c052fc134e28b011c3c41bbf877e')

let web3=new Web3(provider)

let {[':Labor']:{bytecode,interface}}=require('./compile2')


async function contract_deployer(){

    let accounts=await web3.eth.getAccounts()


    let response=await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode,arguments:["ABC",40,"Farming","This is a Farmer"]}).send({from:accounts[0],gas:'1000000'})


    // console.log(response)


    
    
    
    console.log(`Deployer Account : ${accounts[0]}`)

    // console.log(response)
    console.log(`Contract Address : ${response._address}`)
    console.log(`Account Holder Name : ${await response.methods.name().call()}`)
   
    // let name=prompt("Enter a Name to change ")

    let res=await response.methods.change_name('DEF').send({from:accounts[0],gas:'1000000'})

    console.log(`Your Changed Name is : ${await response.methods.name().call()}`)


    provider.engine.stop()






}


// Function binding

// let trialfunc=function(){
//     console.log(this.a)
// }


// let obj1={
//     a:10
// }

// trialfunc.bind(obj1).call()

// console.log(provider)


contract_deployer()



