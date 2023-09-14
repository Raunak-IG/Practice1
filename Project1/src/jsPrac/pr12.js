const num1 = parseFloat(2);
const num2 = parseFloat(12);
const num3 = parseFloat(8);
let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is " + largest);



const nu1 = parseFloat(4);
const nu2 = parseFloat(6);
const nu3 = parseFloat(9);

const large = Math.max(nu1, nu2, nu3);

// display the result
console.log("The largest number is " + large);