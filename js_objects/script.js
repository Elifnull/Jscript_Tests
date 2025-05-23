
//Object creation Basics//

const user = {};

user["name"] = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;



/*
function will only run the enumeration if the object 
contains anything in it, else it will skip the enumeration 
and move onto the true (because it is empty)
*/

function isEmpty(obj){
    for(let key in obj){
      return false;
    }
    return true;
  };

  /*
Salary SUMMER
  */

function sumSalary(obj){
    let sum =0;
    for(let salary in obj){
        if (typeof obj[salary]=== "number"){
            sum+= obj[salary];
        };
    };
    return sum;
};

/*
Multipul numerics
*/

function multiplyNumByTwo(obj){
    for(let key in obj){
        if (typeof obj[key]==="number"){
            obj[key]*=2;
        }
    }
}