let score = "33"
 // console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// 33abc => NaN
// null => 0 => Number Conversion
// "33" => 33
// true => 1 and false => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);
// 1 => true
// 0 => false
// null => false // Boolean conversion
// undefined => false
// "" => false
// "SANDEEP" => true

let someNumber = 45
let StringNumber = String(someNumber)
console.log(typeof StringNumber);
console.log(StringNumber);