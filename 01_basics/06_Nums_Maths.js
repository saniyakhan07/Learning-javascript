// const score = 400
// console.log(score);

// const newScore = new Number(100)   //specifically define that it is a Number
// console.log(newScore);

// console.log(newScore.toString()); //converts number to string
// console.log(newScore.toString().length);
// console.log(newScore.toFixed(2));   //sets the precision value to 2

// const num = 123.6856
// console.log(num.toPrecision(4)); //123.7


// const numss = 1000000
// console.log(numss.toLocaleString('en-IN'));   //10,00,000

//**********   Maths  ********** */


// console.log(Math);
// console.log(Math.abs(-4));   //4
// console.log(Math.round(123.5));    //124
// console.log(Math.ceil(4.2));    //5
// console.log(Math.floor(4.9));      //4
// console.log(Math.min(3,6,87,4));     //3
// console.log(Math.max(34,24,45,22));    //45

console.log(Math.random());  //gives value b/w 0 to 1
console.log((Math.random() * 10) + 1); //gives values b/w 1 to 9 //4.7664044312867535
console.log(Math.floor(Math.random()*10) + 1);    //4

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)