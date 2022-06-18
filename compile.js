// compile code will go here

let path=require('path')
let fs=require('fs')
let solidity_compiler=require('solc')

let Inboxpath=path.resolve(__dirname,'contracts','inbox.sol')
let source=fs.readFileSync(Inboxpath,'utf-8')
// The second parameter specifies the type of encoding

let compiled_obj=solidity_compiler.compile(source,2)


console.log("This is the Byte code of Inbox Contract \n\n")
console.log(compiled_obj.contracts[':Inbox'].bytecode)

console.log("This is the Byte code of Info contract \n\n")


console.log(compiled_obj.contracts[':Info'].bytecode)



// Here 1 specifies the number of contracts we want to compile


// The Interface key in the compiled object is the ABI which is going to act as communication layer between javascript and solidity


// Now as the contract class is compiled and now we have to create a local test network to deploy the instance of the Contract

// The tool for creating the local test network is Ganache which was traditionally known as Test RPC


// Web3 is the library which we use to get programmatic access to the contracts deployed on the network




