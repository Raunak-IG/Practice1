// program to get the file extension

function getFileExtension(filename){
    // get file extension
    const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
    return extension;
}

const result1 = getFileExtension('module.js');
console.log(result1);

const result2 = getFileExtension('test.txt');
console.log(result2);