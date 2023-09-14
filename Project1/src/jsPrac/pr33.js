const string = 'infogen labs game studio'

const words = string.split(' ');

words.sort();

console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}