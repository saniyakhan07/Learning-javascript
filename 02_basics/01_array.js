 //ARRAYS//

const mynums = [2,7,45,5,6,64]
const myheroes = ["Shaktiman", "Vikram", "Hatim"]

const myarr = new Array(1,3,5,7,9,11)
//console.log(mynums[0]);

//Array Methods//

mynums.push(54)
mynums.push(23)
mynums.pop()
//console.log(mynums);

myarr.unshift(53)  //add element at the starting of array
myarr.shift()   //deletes the starting value of array
//console.log(myarr);

// console.log(myarr.includes(4));     //gives a boolean value whether it contains or not
// console.log(myarr.indexOf(3));     // gives index i.e. 1

const newArray = myarr.join()   //binds all values and convert the array into a string
// console.log(myarr);
// console.log(newArray);

//SLICE & SPLICE

console.log ("A ", myarr);

const myn1 = myarr.slice (1,3)   //slice does not manipulate the original array  //it does not include range

console.log(myn1);  //[3,5]
console.log("B", myarr);

const myn2 = myarr.splice (1,3)   //splice manipulate the original array   //it include range

console.log(myn2);   //[3,5,7]
console.log("C", myarr);  //[1,9,11]



