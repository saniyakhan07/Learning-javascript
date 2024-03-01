// const user = {
//     username: "Saniya",
//     price: 99,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//        // console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "Saan"
// user.welcomeMessage()

//console.log(this);

// function code(){
//     let username = "Saniya"
//     console.log(this.username);       //this can't be use inside function
// }
// code()


// const result = function(){
//     let username = "Saniya";
//     console.log(this.username);
// }
// result()


/*********** Arrow function */

// const code = () => {
//     let name = "Saniya"
//     console.log(this);        //{}
// }
// code()           //undefined


// const addTwo = (num1, num2) => {           //within curly braces we have to right return
//     return num1 + num2          // explicit return
// }
// console.log(addTwo(3,4))


//const addTwo = (num1, num2) => num1 + num2      //implicit return

// const addTwo = (num1, num2) => (num1 + num2)        // in small braces dont write return

const addTwo = (num1, num2) => ({username: "Saniya"})        //to return a object in arrow function wrap it in parenthesis
console.log(addTwo(3,4))

// const myArr = [2,4,4,5,2,1]
// myArr.forEach(2,4)
