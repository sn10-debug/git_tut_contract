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