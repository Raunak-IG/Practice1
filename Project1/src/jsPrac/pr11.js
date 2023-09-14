const number = 3

if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}



const num = prompt("Enter a number: ");

const res = (num % 2  == 0) ? "even" : "odd";

console.log(`The number is ${res}.`);