
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


/* 
Array methods
*/

//Maping

/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

*/
/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user =>( 
    {fullName:`${user.name} ${user.surname}`, 
    id:`${user.id}`}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith


arr.sort( (a, b) => a - b );

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(array){
    array.sort((a, b) => (a.age - b.age));
};

sortByAge(arr);



// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];


function getAverageAge(arr){
    let ageObject = arr.reduce((accumulator, currentObj)=> {
        accumulator.age += currentObj.age;
        accumulator.count += 1; 
        return accumulator;
    },
    {age: 0, count: 0});

    return ageObject.age/ageObject.count;
};
console.log( getAverageAge(arr) );

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr){
    return arr.reduce((accumulator,currentVale) => {
        accumulator[currentVale.id] = currentVale;
        return accumulator;
    },{});
};

let usersById = groupById(users);
console.log(usersById);