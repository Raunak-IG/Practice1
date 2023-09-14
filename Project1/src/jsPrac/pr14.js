const lowerNumber = parseInt(0);
const higherNumber = parseInt(50);

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 0 && flag == 0) {
        console.log(i);
    }
}