// Two types of datatypes are there
// primitive
// 7 types : String, Number,Boolean, null, undefined, Symbol, BigInt(For large numbers)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// non primitive or reference 
// Array, Objects(key value pairs), Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
// The part between {} is the object and you don not need to assign it to a variable
// const myfunction = function() {}
// const myfunction = is also optional