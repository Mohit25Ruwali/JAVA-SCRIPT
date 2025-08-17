const accountId = 144553
let accountEmail = "mohit@gmail.com"
var accountPassword = "1234"
accountCity ="Uttarakhand"
let accountState;
// accountId = 2 // not allowed



accountEmail = "jr@jr.com"
accountPassword = "991759"
accountCity = "Dubai"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])
