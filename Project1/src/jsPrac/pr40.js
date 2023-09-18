function capitalizeFirstLetter(str) {

    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

const string = "raunak"

const result = capitalizeFirstLetter(string);

console.log(result);