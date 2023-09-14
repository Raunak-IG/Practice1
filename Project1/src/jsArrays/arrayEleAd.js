const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); 
console.log(fruits)

const fruit = ["Banana", "Orange", "Apple"];
fruit[fruit.length] = "Lemon";  // Adds "Lemon" to fruit
console.log(fruit)

const fruita = ["Banana", "Orange", "Apple"];
fruita[6] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruita)