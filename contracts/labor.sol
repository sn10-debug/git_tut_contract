pragma solidity ^0.4.17;


contract Labor{


    string public name;
    int public age;
    string public skills;
    string public intro;



    function Labor(string name_,int age_,string skills_,string intro_) public {
        name=name_;
        age=age_;
        skills=skills_;
        intro=intro_;

    }

    function getInfo() public view returns (string){
        return intro;
    }

    function change_name(string name_) public {
        name=name_;
    }

}



// Primitive Data types consists of string, int , uint (unsigned int),bool,fixed/ufixed (decimal and float values),address (This has some methods tied to it which can be used to send money)


// There are other types as well like int8,int16,int32,int40,int48...int128

// The sizes are in multiple of 8





// int (num) : num represents the number of bits


// Whenever we simply declare int it is same as int256


// All this is applied for uint as well

// It has properties like :

// 1. msg.data

// This contains the contract source code in case of contract creation else this contains information about the arguements sent along with the function



// 2. msg.sender
// This contains the address of the sender


// 3. msg.gas
// This contains how much gas is required by the function invoked

// 4. msg.value

// This contains information about amount of ether send while invokation of the function








