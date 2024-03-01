const userEmail = ""

if(userEmail){
    console.log("Got User email");
}else{
    console.log("don't have email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10       //5
//val1 = null ?? 13        //13
//val1 = undefined ?? 12       //12
val1 = null ?? 13 ?? 17        //13

console.log(val1);

// Ternary Operator

// condition ? true : false

const price = 10
price <= 20 ? console.log("Less than 20") : console.log("More than 20");