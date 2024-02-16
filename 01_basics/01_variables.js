const accountId = 22775
let accountEmail = "saniya@google.com"
var accountPassword = 2
accountCity = "Jaipur"
let accountState;


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "sky@yk.com"
accountPassword = 123
accountCity = "Delhi"

//accountId = 27 //not allowed coz we declared it as const

console.log(accountId);
console.table([accountCity, accountEmail, accountId, accountPassword, accountState]);