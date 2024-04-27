const user = {
    username: "saniya",
    signinCount: 7,
    signedIn: true,

    getuserdetails: function(){
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getuserdetails());

const user2 = {
    username: "Saniya",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function(){
        console.log(this);
    }
}
//console.log(user.username);


function User (username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log('Welcome ${this.username}');
    }

    return this;
}


// Constructor function creates a new instance every time
const userOne = new User("Saniya", 4, true)
const userTwo = new User("ChaiAurCode",6, false)
console.log(userOne.constructor);
console.log(userOne);


//when we use new keyword:-->
// 1. a new object is created
// 2. a constructor function is called due to new keyword
// 3. arguments get inject in it
// 4.  we get it inside the function



//read about InstanceOf in js