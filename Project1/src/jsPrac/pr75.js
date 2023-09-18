// program to remove duplicate value from an array

function getUnique(arr){

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
getUnique(array);