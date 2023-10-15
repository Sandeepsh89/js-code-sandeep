// On the basis of allocate and store data in memory. there are two types of datatype.

// 1- Primitive and 2- Non-Primitive(Reference)

// Primitive datatype:- String, Number, Boolean, null, undefined, Symbol, BigInt

// Non-Primitive(Reference): Array, Objects, Functions


// let check Symbol datatype- it is used to define unique vaule


const id = Symbol('111')
const AnotherId = Symbol('111')
// console.log(id === AnotherId);
const BigNumber = 12345678900n

// Array - Array Define by []
const heros = ["Saktiman", "Nagraj", "Doga"]

// Objects - Object Define by {}
let MyObj = {
    Name: "sandeep",
    Age: 22,
}

// Functions - Functions Define by (){}
const myFunction = function (){
    console.log("Hellow World");
}

// console.log(typeof BigNumber);


// +++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) , Heap (Non-Primitive)

let myYotubeName = "sandeepsharma.com"
let AnotherName = "myYotubeName"
AnotherName = "chaiaurcode"

console.log(AnotherName);
console.log(myYotubeName);

let userOne = {
    email: "sandy@gmail.com",
    upi: "asdk@ybl"
}
let userTwo = userOne
userTwo.email = "Sandeep@yahoo.com"
console.log(userTwo.email);
console.log(userOne.email);