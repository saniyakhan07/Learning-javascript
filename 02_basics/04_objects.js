// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "17aas"
tinderUser.name = "Shanaya"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "saniyakhan@gmail.com",
    fullname:{
        userfullname:{
             firstname: "Saniya",
             lastname: "khan"
        }
    }
}


//console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {6: "c", 8: "y"}

//const obj3 = {obj1, obj2}  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 =Object.assign({},obj1, obj2, obj4)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' , '6': 'c', '8': 'y' }
// console.log(obj3);

const target = {a: 1, b: 2}
const source = {b:4, c: 5}

const returnedTarget = Object.assign(target,source)

// console.log(target);   //{ a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);    //true

const obj3 = {...target,...source}
//console.log(obj3);      //{ a: 1, b: 4, c: 5 }

const user = [
    {
        id: 1,
        email: "saniya@gmail.com"
    },
    {
        id: 1,
        email: "saniya@gmail.com"
    },
    {
        id: 1,
        email: "saniya@gmail.com"
    },
]

console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ] //puts the keys in an array so we can loop through it
console.log(Object.values(tinderUser));      //[ '17aas', 'Shanaya', false ]
console.log(Object.entries(tinderUser));         //[ [ 'id', '17aas' ], [ 'name', 'Shanaya' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));     //true
console.log(tinderUser.hasOwnProperty('isLoggedOut'));      //false


//******** Object De-Structure *******/

const course = {
    courseName : "Learn JS",
    price: "99",
    courseTeacher: "Sams"
}

//course.price
const {courseTeacher} = course
//console.log(courseTeacher);

//***** JSON -(JavaScript Object Notation) Api ***/

// {
//     "name": "saniya",
//     "coursename": "learn JS",
//     "price": "59"
// }

[
    {},
    {},
    {},
]