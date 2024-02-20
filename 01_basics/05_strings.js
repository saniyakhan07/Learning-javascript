// const name = "saniya"
// const repoCount = 10

//it's old fashioned
//console.log(name + repoCount);

//use this
//console.log(`My name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);

const gameName = new String('Dora-the-explorer')



// console.log(gameName[1]);  //o
// console.log(gameName.__proto__);  //{}
// console.log(gameName.length);     //4
// console.log(gameName.toUpperCase());   //DORA
// console.log(gameName.charAt(3));    //a
// console.log(gameName.indexOf('r'));   //2


// const newString = gameName.substring(0,4);
// console.log(newString);    //Dora
// console.log(gameName.substring(0,4));    //Dora


const anotherString = gameName.slice(-13,4) //we can use negative value only in slice function
console.log(anotherString);

const myname = "  Saniya  "
console.log(myname);
console.log(myname.trim());  //removes white spaces

const url = "https://saniya.com/saniya%20khan"
console.log(url.replace('%20','-'))
console.log(url.includes("aniy"));  //true or false

console.log(gameName.split('-')); //gives an array after splitting the string based on '-'