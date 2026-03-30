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

// Now  another scenario
let score2 = "22abc"
// now it is a string
console.log(typeof score2);
let valInNumber = Number(score2)
console.log(typeof valInNumber);
// output is number but abc shouldnt have converted to number
console.log(valInNumber);
