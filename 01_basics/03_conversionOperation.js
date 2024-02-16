//let score = 33
let score = "33abs"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);  //NaN means not a number in case of mixed value of number and string

let ans = null
let numVal = Number(ans)
console.log(numVal); // gives 0 in case of null.  and similarly for undefined gives NaN


// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

 //let isLoggedIn = 1 gives true
 //let isLoggedIn = "" //gives false
 let isLoggedIn = "saniya" //gives true
 let booleanisLoggedIn = Boolean (isLoggedIn)

 console.log( booleanisLoggedIn);

 let num = 33
 let stringnum = String(num)
 console.log(typeof stringnum);
