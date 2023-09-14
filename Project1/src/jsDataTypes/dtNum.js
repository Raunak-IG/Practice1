// With decimals:
let x1 = 34.00;
console.log(x1)
// Without decimals:
let x2 = 34;
console.log(x2)

let y = 123e5;    // 12300000
console.log(y)
let z = 123e-5;   // 0.00123
console.log(z)

let a = BigInt("123456789012345678901234567890");
let b = 123456789012345678901234567890;
console.log(a)
console.log(b)

let x = 5;
let p = 5;
let c = 6;
console.log(x == p)       // Returns true
console.log(x == c)       // Returns false