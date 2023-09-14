const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
    };
  
  let id = Symbol('id');
  person[id] = 140353;
  // Now person[id] = 140353
  // but person.id is still undefined

  console.log(person)
  console.log(Symbol("id") == Symbol("id"))