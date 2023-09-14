function factorial(x) {

    if (x == 0) {
        return 1;
    }

    else {
        return x * factorial(x - 1);
    }
}

const num = 5

if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}