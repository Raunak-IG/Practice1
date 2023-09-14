console.log(Array.from("ABCDEFG"))  // Returns [A,B,C,D,E,F,G]


// Taking input as an array A
// containing some elements.
let A = [5, 6, 10];
 
// array.keys() method is called
let iterator = A.keys();
 
// printing index array using the iterator
for (let key of iterator) {
    console.log(key);
}


// Taking input as an array A
// containing some elements.
let B = ['gfg', 'geeks', 'cse', 'geekpro'];
 
// array.keys() method is called
let iteratorr = B.keys();
 
// printing index array using the iterator
for (let key of iteratorr) {
    console.log(key);
}



const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);



const number = [4, 9, 16, 25, 29];
let firsty = number.findIndex(myFunctionn);

function myFunctionn(value, index, array) {
  return value > 18;
}
console.log(firsty);