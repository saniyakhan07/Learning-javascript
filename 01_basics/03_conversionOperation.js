//let score = 33
let score = "33abs"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);  //NaN means not a number in case of mixed value of number and string

let ans = null
let numVal = Number(ans)
//console.log(numVal); // gives 0 in case of null.  and similarly for undefined gives NaN


// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

 //let isLoggedIn = 1 gives true
 //let isLoggedIn = "" //gives false
 let isLoggedIn = "saniya" //gives true
 let booleanisLoggedIn = Boolean (isLoggedIn)

 //console.log( booleanisLoggedIn);

 let num = 33
 let stringnum = String(num)
 //console.log(typeof stringnum);


 //***************** OPERATIONS**************//


 let val = 7
 let negval = - val
//  console.log(negval);
//  console.log(typeof negval);

let str1 = "Hello"
let str2 = " Saniya"
let str3 = str1 + str2
//console.log(str3);
 

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2+ "2");   //32


//donot pass this type of values//
// console.log(true); //true
// console.log(+true); // 1
// console.log(true+); //syntax error
// console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2+2
// console.log(num2);

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
