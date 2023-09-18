function checkObject(arr) {

    const result = Array.isArray(arr);

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }

}

const array = [1, 2, 3];

checkObject(array);