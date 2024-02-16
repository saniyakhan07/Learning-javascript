// console.log("2" > 1);  //true
// console.log("02" > 1);  //true


//******AVOID THESE TYPE OF CONVERSIONS******//
//comparision operator and equality operator works differently in javascript
console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  //true
console.log(null <= 0);  //true


//undefined compared with 0 always gives false
console.log(undefined == 0);  //false


// === (strict check)
console.log("2" === 2);