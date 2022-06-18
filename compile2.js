let path=require('path')
let fs=require('fs')
let sol_compiler=require('solc')


let filepath=path.resolve(__dirname,'contracts','labor.sol')
let file=fs.readFileSync(filepath,'utf8')

let compiled_obj=sol_compiler.compile(file)
module.exports=compiled_obj.contracts

// console.log(compiled_obj)

