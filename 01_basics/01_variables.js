const accountId = 144553
let accountemail = "shreya@gmail.com"
var accountpassword = "12345"
accountcity = "jaipur"
let accountstate;
//accountId = 2

/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountemail = "sh@sh.com"
accountpassword = "212121"
accountcity = "kolkata"

console.log(accountId);
console.table([accountId, accountemail, accountpassword, accountcity, accountstate])
