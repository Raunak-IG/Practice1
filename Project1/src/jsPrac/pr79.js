function extractValue(arr, prop) {

    let extractedValue = [];

    for (let i=0; i < arr.length ; ++i) {

        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

const result = extractValue(objArray, 'a');
console.log(result);