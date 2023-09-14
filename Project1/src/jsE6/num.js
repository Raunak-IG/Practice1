gfgval = Number.EPSILON;
// Output will be value of 2 to the power -52 (2^-52)
console.log(gfgval);

x = 0.3;
y = 0.6;
z = 0.9;
// Output will be false
console.log(x + y == z);

// Output will be true
console.log(x + y - z < gfgval);

console.log()

const a = Number.MIN_SAFE_INTEGER - 1;
const b = Number.MIN_SAFE_INTEGER - 2;
  
console.log(Number.MIN_SAFE_INTEGER);
console.log(a);
console.log(a === b);

console.log()

const p = Number.MAX_SAFE_INTEGER + 1;
const q = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
console.log(p);
console.log(p === q);

console.log()

console.log(Number.isInteger(10))        // returns true
console.log(Number.isInteger(10.5))      // returns false

console.log()

console.log(Number.isSafeInteger(10))    // returns true
console.log(Number.isSafeInteger(12345678901234567890))  // returns false