const AccountId = "007"
// AccountId = "1111111"
// constant can't change " Not Allowed"
let AccountName = "Sandy"
let AccountEmail = "sandy@yahoo.com"
let AccountPassword = "123456"
let AccountCity = "Varanasi"
let AccountState = "UP"
/*
prefer not to use var
because of issue in Block scope and function scope
*/

console.log(AccountId);
console.table([AccountId, AccountName, AccountPassword, AccountCity, AccountState])