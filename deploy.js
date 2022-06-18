// deploy code will go here


let Web3=require('web3')
let HDWalletprovider=require('@truffle/hdwallet-provider')
let provider=HDWalletprovider('bottom clever legal ranch pattern series office robust sleep utility goose twenty','https://rinkeby.infura.io/v3/0244c052fc134e28b011c3c41bbf877e')

let web3=Web3(provider)

let {[':Labor']:{bytecode,interface}}=require('./compile2')
