const person = {
    name: 'John',
    age: 21,
}

const clonePerson = { ... person}

console.log(clonePerson);

clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);