let myDate = new Date()

// console.log(myDate);     // 2024-02-20T14:57:07.798Z
// console.log(myDate.toString());     // Tue Feb 20 2024 14:56:15 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleTimeString());     // 2:56:15 PM

// console.log(myDate.toDateString());    // Tue Feb 20 2024
// console.log(myDate.toLocaleString());  // 2/20/2024, 3:20:47 PM
// console.log(myDate.toString());      //Tue Feb 20 2024 15:22:30 GMT+0000 (Coordinated Universal Time)

// console.log(typeof(myDate));     //Object

// let myCreateddate = new Date(2024, 1, 20 )   // Tue Feb 20 2024
//let myCreateddate = new Date(2024, 1, 20,5, 3 )     // 2/20/2024, 5:03:00 AM

//let myCreateddate = new Date("2023-01-20")      // 1/20/2023, 12:00:00 AM

let myCreateddate = new Date("11-01-2023")     // 11/1/2023, 12:00:00 AM
// console.log(myCreateddate.toLocaleString());      


//************TIMESTAMP********* */

let myTimeStamp = Date.now()

// console.log(myTimeStamp);   //1708445029557
// console.log(myCreateddate.getTime());    //1698796800000


/***************** Interview Question ******/

//console.log(Math.floor(Date.now()/1000));    //1708445320


let newDate = new Date()
console.log(newDate);    //2024-02-20T16:11:07.345Z

console.log(newDate.getMonth());     // 1 month starts from zero in js to get the exact month add 1 to getMonth

console.log(newDate.getDay()); 

newDate.toLocaleString('default', {
       weekday: "long",
})