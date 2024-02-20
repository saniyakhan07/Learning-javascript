//*** Based on the access and storage in memory datatypes are classified in 2 types */
//1st PRIMITIVE //


// 7 types:  string, number, null, undefined, symbol, bigInt, boolean
const score = 100
const scorevalue = 100.4

const isLoggedIn = false
const outsideTemp = null
let usermail;
 
//sybol uniquely identifies the variables
const id = Symbol("123")
const otherid = Symbol("123")
console.log(id == otherid);  //false

const bigNum = 3348459589456384n
console.log(typeof bigNum);  //bigint
//2nd Reference (NON PRIMITIVE)

// typeof(null) ==> object
//typeof(undefined) ==> undefined
//returntype of non primitive gives object on typeof and of function() is function
//Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj","Doga"];

let myObj = {
    name: "saniya",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

// https://tc39.es/ecma262/#sec-ecmascript-language-types



//+++++++++++++++++++++++++++++++++++++++++++++++++++//
//STACK AND HEAP//


//Stack(Primitive ==> gets copy).  Heap(Non-Primitive ==> gets reference)

let myname = "Saniya"
let firstname = myname
firstname = "Bobby"
console.log(myname);
console.log(firstname);


let userOne = {
    email : "xyz@google.com",
    upiID : "abc@sbi"
}

let userTwo = userOne
userTwo.email = "san@amazon.in"
console.log(userOne.email);
console.log(userTwo.email);