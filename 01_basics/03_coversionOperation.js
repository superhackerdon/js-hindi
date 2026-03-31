let score = 22
// we can check type in both of the below ways
console.log(typeof score);
console.log(typeof (score));
// we do this because if situation like below line arises then we dont know the type of value score stores
// const {score} = req.body

let score1 = "22"
// now it is a string
console.log(typeof score1);
let valueInNumber = Number(score1)
// console.log(typeof score1); this was written by mistake by me dont do this again
console.log(typeof valueInNumber);
// converted to number

// Now  another scenario
let score2 = "22abc"
// now it is a string
console.log(typeof score2);
let valInNumber = Number(score2)
console.log(typeof valInNumber);
// output is number but abc shouldnt have converted to number
console.log(valInNumber);
// output is 
// string
// number
// NaN indicating not a number


let score3 = null
console.log(typeof score3);
let val3InNumber = Number(score3)
console.log(typeof val3InNumber);
console.log(val3InNumber);
// output
// object
// number
// 0

let score4 = undefined
console.log(typeof score4);
let val4InNumber = Number(score4)
console.log(typeof val4InNumber);
console.log(val4InNumber);
// output
// undefined
// number so, NaN type is number
// NaN

let score5 = true
console.log(typeof score5);
let val5InNumber = Number(score5)
console.log(typeof val5InNumber);
console.log(val5InNumber);
// output
// boolean
// number
// 1

let score6 = 1
let val6InNumber = Boolean(score6)
console.log(val6InNumber);
// output is true
// Alternate
// if score 6 is
// 1 => true; 0 => false
// "Ahmed" => true
// "" => false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
// output
// 33
// string
