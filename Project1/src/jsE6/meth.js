console.log(isFinite(10/0))       // returns false
console.log(isFinite(10/1))       // returns true

console.log();

console.log(isNaN("Hello"))       // returns true

console.log()

// creating an object constructor
// and assigning values to it
const obj = { 0: 'adam', 1: 'billy', 2: 'chris' };

// Displaying the enumerable property [key, value]
// pairs of the object using object.entries() method
console.log(Object.entries(obj)[1]);