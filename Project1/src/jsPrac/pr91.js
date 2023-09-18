// program to include constants

const a = 5;
console.log(a);

// constants are block-scoped
{
    const a = 50;
    console.log(a);
}
console.log(a);

const arr = ['work', 'exercise', 'eat'];
console.log(arr);

// add elements to arr array
arr[3] = 'hello';
console.log(arr);

// the following code gives error
// changing the value of a throws an error
// uncomment to verify
// a = 8;