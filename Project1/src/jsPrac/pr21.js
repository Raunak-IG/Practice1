const a = 986
const b = 456
const c = 756

const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

if(result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
}
else {
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}