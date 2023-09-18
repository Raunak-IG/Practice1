function emptyArray(arr) {

    arr.length = 0;
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

const result = emptyArray(array);
console.log(result);