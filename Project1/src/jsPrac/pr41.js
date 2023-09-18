const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

const string = "Raunak"
const result = countVowel(string);

console.log(result);