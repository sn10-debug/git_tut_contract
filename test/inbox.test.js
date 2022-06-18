let assert=require('assert')
let ganache=require('ganache-cli')
const { beforeEach } = require('mocha')
const { describe } = require('mocha')

let Web3=require('web3')

// We capitalized Web3 because we are importing a Class which has a Constructor object and using this We are going to create a instance which we will be using and we know that it is a convention that we always Capitalize a class and its Constructor


// web3 is totally asynchronous in nature

// The older version of web3 that is 0.x.x where x is some number did not support promises instead they only supported callbacks
// The newest version of web3 that is 1.x.x where x is some number supports promises


// we have to create a instance using Web3 library

// the new instance created is used to interact with the ethereum network

// If we want to interact with multiple ethereum network , then we have to create multiple instances of Web3 and then we can interact with many ethereum network in one script file


// 'provider' acts as a communication layer between the ethereum network and the web3 instance

// 'provider' is provided by the network

let web3=new Web3(ganache.provider())



// Assertion is taking one value generated through code and comparing with the other value which we want to compare

// Mocha Testing


// Mocha is used to test the Front End program,Backend Program and the ethereum program as well


// It is the core function for testing


// In describe function we are passing certain number of it functions


// In BeforeEnd function is used to extract a common logic from the set of it functions and thus executing the code once



class Student{
    get results(){
        return "Passed"

    }

    get marks(){
        return 100
    }
}



// Writing a Testing function

let student_1
// beforeEach(function(){
// student_1=new Student()

// This line of code before each 'it' function gets executed and thus this is a way to prevent duplicate lines of code while writing more number of tests or 'it' functions  
// })

// describe('Checking Student Class',function(){
//     // let student_1=new Student()
//     it('Checking students\' result',function(){
//       assert.equal(student_1.results.toLowerCase(),"passed")  
//     //   assert.equal(student_1.marks,100)

//     //   Assert has lot of other functions as well
//     })


//     it("Checking Student's Marks",function(){
//         assert.equal(student_1.marks,100)
//     })
// })


// Some unlocked accounts are automatically created by the ganache in the local test network which we can use to deploy a contract or create a contract in the test network

let accounts

beforeEach(async ()=>{
    // web3.eth.getAccounts()
    // This will return a promise so we need to consume it
    // .then(res=>{
        // console.log(res)
    // })
accounts=await web3.eth.getAccounts()


})



describe('Checking Accounts',function(){
    it('Account',()=>{
        console.log("This are the set of Accounts 👆")
    })
})






// Promise.resolve(()=>{
// console.log("Hello World inside a Promise")
// })

Promise.resolve().then(()=>{
    console.log("Hello inside the Promise")
})

console.log("Hello inside the global function")

