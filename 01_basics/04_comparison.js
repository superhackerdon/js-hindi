// console.log(2>1);
// console.log(2>=1);
// <, !=, ==,  also possible

console.log("2">1);
console.log("02">1);
// output
// true
// true
// javascript automatically converts string into number

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// output
// false as zero is empty
// false as zero is empty
// true is because of value conversion i.e as equality and comparisions work differently 
// equality/equalities are == , === and comparisions are >, <, >=, <=
// so null == 0 ,empty is not equal to zero
// comparisions convert null to a number and treat it as zero hence null >=0 is true and null >0 is false
// null >0 zero is not greater than zero
// null >=0 zero is not greater than zero yes but equal to zero so condition satisfied
// this all is defined in mdn we cant do anything

// === (Strict check)
// It checks strictly like both the data types should be same

console.log("2" == 2);
console.log("2" === 2);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

