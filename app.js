const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']


console.log("-----------------------------");
// Exercise 1
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
const newArray = nums.map((num) => {
  return num * 2;
});
// Your code here
console.log(newArray);

console.log("-----------------------------");


const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'

console.log("-----------------------------");
// Exercise 2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [first, second] = pizzaToppings;
console.log(first);
console.log(second);


console.log("-----------------------------");

const person = {
  name: 'Alex',
  role: 'Software Engineer',
};

// Object destructuring:
const { name, role } = person;

console.log(name); // 'Alex'
console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); // 'Alex'
console.log(person.role); // 'Software Engineer'

console.log("-----------------------------");
// Exercise 3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here
const { make, model } = car;
console.log(make);
console.log(model);

console.log("-----------------------------");
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); // [1, 2, 3]

const referenceArray = originalArray; // referenceArray is now a reference to originalArray

referenceArray.push(4); // Modifying referenceArray also modifies originalArray
console.log(originalArray); // [1, 2, 3, 4]

console.log("-----------------------------");
// Exercise 4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings1 = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings1]
console.log(controversialPizzaToppings)

console.log("-----------------------------");
const originalObject = {
  foo: 'Hello',
  bar: 100,
};

// Copy the properties of originalObject:
const clonedObject = { ...originalObject };

// Update the properties of clonedObject:
clonedObject.foo = 'Goodbye';
clonedObject.bar = 0;

console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }

console.log("-----------------------------");
// Exercise 5
// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
  make: 'Audi',
  model: 'q5',
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const myCar = {...car2};
myCar.model = 'q7';
console.log(car2);
console.log(myCar);

console.log("-----------------------------");
const fruitInventory = {
  apples: 2,
  oranges: 4,
};

const selectedFruit = 'apples'; // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit];

console.log(selectedFruitCount); // 2

const fruitType = 'bananas'; // Variable as a dynamic key

const fruitInventory2 = {
  [fruitType]: 5,
};

console.log(fruitInventory2); // { bananas: 5 }


console.log("-----------------------------");
// Exercise 6
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const userProfile = {};
const username = 'Yusuf'

const propertyName = 'username';
userProfile[propertyName] = username;
console.log(userProfile);

console.log("-----------------------------");

console.log("-----------------------------");

function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
  return numA + numB + numC;
}

addThreeNumbers(2);

console.log("-----------------------------");
// Exercise 8
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function writeSentence(noun = 'cat', adjective = 'white') {
  console.log(`The ${noun} is ${adjective}.`);
}
writeSentence();

console.log("-----------------------------");
const age = 22;
let access;

if (age > 21) {
  access = 'Yes';
} else {
  access = 'No';
}

console.log(access); // 'Yes'

console.log("-----------------------------");
// Exercise 9
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here

const pizza2 = pizza == 'tasty'? 'yum' : 'yuck';
console.log(pizza2);

console.log("-----------------------------");
// const result = false && 'foo';
// console.log(result); // Output: false

// const result = 'hello' && '';
// console.log(result2); // Output: ''

// const result = 'foo' && 'bar';
// console.log(result3); // Output: 'bar'

// const result = '' || 'foo';
// console.log(result); // Output: 'foo'

// const result = 2 || 0;
// console.log(result); // Output: 2

// const result = '' || 0;
// console.log(result); // Output: 0

const result1 = 'bar' && 'foo'; // 'foo'
const result2 = false || 243; // 243
const result3 = 42 && false; // false
// const result4 = myVar || 3000; // 3000

console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);
// console.log('result4:', result4);

console.log("-----------------------------");
// Exercise 10
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);

console.log("-----------------------------");
// const adventurer = {
//   name: 'Alice',
// };

// let dog = adventurer.dog?.name;

// console.log(dog); // undefined

console.log("-----------------------------");
// Exercise 11
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

// let catName = adventurer.name;
let cat = adventurer.cat?.age;

// console.log(catName); 
console.log(cat);
