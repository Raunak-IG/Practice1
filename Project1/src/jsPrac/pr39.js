function countString(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

const string = "Raunak"
const letterToCheck = 'a'

const result = countString(string, letterToCheck);

console.log(result);