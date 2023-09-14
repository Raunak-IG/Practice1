let hcf;
const number1 = 64
const number2 = 16

for (let i = 1; i <= number1 && i <= number2; i++) {

    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);