// if

// const temp = 32


// === it checks the type also with value
// if(temp === 40){
//     console.log("less than 40");
// }
// else{
//     console.log("greater than 40");
// }

// console.log("temperature is high");
// <, >, <=, >=, ==, !=, ===, !==


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


//const balance = 1000

//if(balance > 500)  console.log("test");

// if(balance < 500){
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("leass than 900");
// }
// else{
//     console.log("Greater than 900");
// }

const UserloggedIn = true
const DebitCard = true
const loggedfromGoogle = false
const loggedfromEMail = true

if(UserloggedIn && DebitCard){
    console.log("Allow to buy");
}

if(loggedfromGoogle || loggedfromEMail){
    console.log("User logged in");
}
