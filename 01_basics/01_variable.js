const accountId = 14453 
let accountEmail = "1@gmail.com"
var accountPassword = "123"
accountCity = "Hyderabad" 
// without writing anything also variable memory can be declared but it is not a good practice

let accountState
// ; is optional may or may not be used
// just declaring vairable also is acceptable even if nothing is assigned to it
// its memory will be undefined

accountEmail = "2@gmail.com"
accountPassword = "456"
accountCity = "Apna shehar" 
// we can update let,var and variable just declared i.e their values can be changed

// accountId = 2 not allowed
console.log(accountId);
console.table([accountEmail,accountPassword,accountId,accountCity,accountState]);
