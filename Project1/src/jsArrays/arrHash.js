const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
console.log(person.length)    // Will return 3
console.log(person[0])        // Will return "John"

const persona = [];
persona["firstName"] = "John";
persona["lastName"] = "Doe";
persona["age"] = 46;
console.log(persona.length)  // Will return 0
console.log(persona[0])      // Will return undefined