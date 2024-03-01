function sayname (){
    console.log("S");
    console.log("A"); 
    console.log("N");
    console.log("I");
    console.log("Y");
    console.log("A");
}

//sayname()

// function addTwoNum(number1 , number2){
//          console.log(number1 + number2);
// }

function addTwoNum(number1 , number2){

    // let result = number1 +number2
    // return result
    return number1 + number2
}

const result = addTwoNum(3.5,7.4)
//console.log("Result:", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("Saniya"));      //Saniya just logged in
// console.log(loginUserMessage());       //undefined just logged in
 

function calculateCartPrice(...num1){
    return num1
}

 // console.log(calculateCartPrice(200, 323, 332, 343));        //[ 200, 323, 332, 343 ]


const user = {
    username: "Saniya",
    price: 249
}

function handleObjects(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObjects(user)
handleObjects({
    username: "Saan",
    price: 299
})

const myArr = [200,34,342,422]

function return2ndValue (getArray){
    return getArray[1]
}

//console.log(return2ndValue(myArr));
console.log(return2ndValue([23, 45, 32, 98]));