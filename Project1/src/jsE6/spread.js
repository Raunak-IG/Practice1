const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);


const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);

console.log(numbers);
console.log(maxValue);