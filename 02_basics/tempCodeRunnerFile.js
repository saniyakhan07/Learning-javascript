console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ] //puts the keys in an array so we can loop through it
console.log(Object.values(tinderUser));      //[ '17aas', 'Shanaya', false ]
console.log(Object.entries(tinderUser));         //[ [ 'id', '17aas' ], [ 'name', 'Shanaya' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));     //true
console.log(tinderUser.hasOwnProperty('isLoggedOut'));      //false
