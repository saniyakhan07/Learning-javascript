//Singleton


//Object Literals

const mySym = Symbol("key1")      //***important: to access symbol use square bracket and print

const JsUser = {
     name : "Saniya",
     "full name" : "saniya khan",
     [mySym] : "mykey1",   //*******important
     age : 18,
     email : "saniya@gmail.com",
     location : "Delhi",
     isLoggedIn : true,
     lastLoggedIn : ["wed", "fri"]
}


//*** usually we access through dot but in some cases use sq brackets[] */
// console.log(JsUser.email)           
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);      //******important for symbol access

JsUser.email = "saniyakhan@jlp.com"
//Object.freeze(JsUser)        //freezes the value so that it can't be changed
JsUser.email = "saniyakhan@chatgpt.com"
//console.log(JsUser);


JsUser.greeting = function(){
     console.log("Hello JS User");
}

JsUser.greeting2 = function(){
     console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());      
//console.log(JsUser.greeting());   //undefined
