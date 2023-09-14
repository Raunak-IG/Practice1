// ES5
var a = function(x, y) {
    return x * y;
 }
 
 // ES6
 const b = (x, y) => x * y;

console.log(a(4,5));
console.log(b(4,5));

const c = (x, y) => { return x * y };

console.log(c(4,5));