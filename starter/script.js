Math.random;

// todo: 32. Activating Strict Mode

// * Strict mode makes it easier for us to write a secure JavaScript code.

//* Strict mode helps our JavaScript code in 2 ways:
// 1. It forbids us to do certain things.
// 2. It creates visible errors for us in console in certain situations in which without strict mode JS will simply fail silent.

// ? Activating Strict Mode:
("use strict");

//? Example to show how Strict mode helps us,
//? Reason 1:
// const interference = 63551;
// const private = "Hello";
//* Shows error for the variable names which will be a reserved word in JSNext. & suggests to use different variable names.

// ? Reason 2:
// let hasDriversLicense = false;
// const passLicenseTest = true;

// if (passLicenseTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive now :D");
//* Gives error: hasDriverLicense is not defined at script.js:22:39, where without strict mode js would be silent.

//! NOTE: Make sure that the string "use strict" is the very first code of our JS code. If something is written above it (except comments), it will not be activated.

// --------------------------------------------------

// todo: 33. Functions (Principle: DRY - Don't Repeat Yourself)

//* Function is a piece of code that we can reuse over & over again.

//? Types of Functions:
//* 1. Function Declarations:
// Function with a name.
//* 2. Function Expressions:
// Variable assigned to an Anonymous Function.
//* 3. Arrow Function:
// Variable assigned to an Anonymous Function but a shortcut.

//todo: TYPE 1. Function Declarations:

//? SYNTAX:

//* Creating a function:
function fnName(params) {
  // function body
  return;
}

//* fnName:
// Is a function name.
//* params:
// Parameters are like a local variables which are specific only to this function.
// They are kinda placeholder of the function to recieve input values.
// They will get defined when we call this function.
//* return:
// With the help of return keyword, we can output a value from the function.
// After returning the value, return keyword immediately exits the function. So, any piece of code written after the return keyword will NOT be executed (will be ignored) even if it is inside the function.

// * Calling / Running / Invoking the function:
fnName(/* arguments */);

//* Arguments:
// Are the actual values that we use to fill in that placeholder params.
// The actual values of parameter(s) is/are known as arguments.

//? Examples of function which we have used earlier:
// console.log();
// Number("6900"); During Type Conversion/Coercion

//? Example:
//* Creating a function:
function myName() {
  console.log("I'm Ujjwal Gupta");
}

// * Calling / Running / Invoking the function:
myName();

// NOTE: Functions can also be without any params (no arguments also), return.

//? Example:
//* Creating a function:
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples & ${oranges} oranges.`;
  return juice;
}

// * Calling / Running / Invoking the function:
fruitProcessor(5, 0); // Output: 5 0 (assigned 5 to apples & 0 to oranges)

// ? Since, we returned juice; so the value inside it is stored inside fruitProcessor(5, 0), in order to print it we can either capture it in a variable or just console log it.
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// OR

console.log(fruitProcessor(5, 0));

//* Creating apple & orange juice with 2 apples & 4 oranges
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//* Creating orange juice with 69 oranges
const orangeJuice = fruitProcessor(0, 69);
console.log(orangeJuice);

// --------------------------------------------------

// todo: 34. Function Declarations vs Expressions

//* Function Declaration:
//? Question:
//* Calculate the age based on a given birth year.

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1); // 20

// todo: TYPE 2. Function Expression:

// * A function without a name is called Anonymous Function.
// * & using that anonymous function as a value to assign a variable is known as Function Expression.
// Remember, that expression are ones which produces a value.
//! NOTE: Function are values.

//* Create a function:
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

//* Calling / Running / Invoking the function:
const age2 = calcAge2(2002);
console.log(age1, age2); // 20

//? Main difference between Function Declaration vs Expressions.

//* Function Declarations:
// We can write [Call a function] code before [Creating a Function] code.

//* Function Expressions:
// We canNOT write [Call a function] code before [Creating a Function] code. It results into an error.

//! NOTE: It is recommended that you should use Function Expressions instead of Declarations. Cuz in it we can call a function only after it is defined.

// --------------------------------------------------

// todo : 35. Arrow Functions

// todo: TYPE 3. Arrow Functions

//? SYNTAX:
// const aVariable = params => returned value (function body) (just the value, no return keyword);

//? Example:
//* Creating a function:
const calcAge3 = (birthYear) => 2022 - birthYear;

//* Calling / Running / Invoking the function:
const age3 = calcAge3(2002);
console.log(age1, age2, age3);

//? What if we have multiple line of code inside arrow function?
// Example:
//* Find how many years are left for a person's retirement.

const ageUntilRetirement = (birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(ageUntilRetirement(2002));

//? What if we have multiple line of code inside arrow function as well as multiple params?
// Example:
//* Find how many years are left for a person's retirement also return a string of person's first name.
const ageUntilRetirement2 = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  const personFirstName = `I'am ${firstName}, I'am ${age} years old and have ${retirement} years left before my retirement.`;
  return personFirstName;
};

console.log(ageUntilRetirement2(2002, "Ujjwal"));
console.log(ageUntilRetirement2(1997, "Mansee"));

//!NOTE: Whereas, arrow functions are great for the use of one-liners but does not get a 'this' keyword.

// --------------------------------------------------

// todo: 36. Functions Calling Other Functions

//* Let's consider that the fruit processor can only make the juice with smaller fruit pieces. Once the smaller pieces of fruit is done, then it will be sent to the fruit processor.

function cutFruitPieces(fruit) {
  return fruit * 4; // cutting a fruit into 4 pieces.
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple & ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// --------------------------------------------------

// todo: 37. Reviewing Functions

/*
const yearsUntilRetirement2 = function (birthYear, firstName) {
  const currentAge = calcAge2(birthYear); // Already defined function above.
  const retirementAge = 65 - currentAge;
  return `I'am ${firstName}, I'am ${currentAge} years old and have ${retirementAge} years left before my retirement.`;
};

console.log(yearsUntilRetirement2(2002, "Ujjwal"));

console.log(yearsUntilRetirement2(1897, "Netaji Shubhash Chandra Bose."));
*/
//* In this case, the retirement age came out to be -60 years which is totally out of the point of calculation.
//* Let's do one thing to avoid the value in negative, return the value -1 if the age is below 0. Return the retirementAge variable if the age is above 0.

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const currentAge = calcAge2(birthYear); // Already defined function above.
  const retirementAge = 65 - currentAge;

  if (retirementAge > 0) {
    return retirementAge;
  } else {
    return -1; //* -1 is a standard no. in programming. We can also return something like 9999. A no. which clearly has no meaning.
  }

  // return `I'am ${firstName}, I'am ${currentAge} years old and have ${retirementAge} years left before my retirement.`;
  //* Here, we returned a number instead of a string because it is a good practice to return a number to a function whose input (params) is a number.
};

console.log(yearsUntilRetirement2(2002, "Ujjwal")); // 45

console.log(yearsUntilRetirement2(1897, "Netaji Shubhash Chandra Bose.")); // -1

// --------------------------------------------------

// todo: 39. Introduction to Arrays

//? Data Structure 1: Arrays

//* Array, a Data Structure is like a big container inside which we can store many variables/data of various data types & then later reference them.

//? 2 most important Data Structures in JS are Arrays & Objects.

//? SYNTAX to represent an array:
//* Method 1: Using normal & most used method for creating Arrays. (Square brackets method) (literal syntax)
const arrayExample = ["value1", 69, true];

console.log(arrayExample); // (3) ['value1', 69, true]

//* Method 2: Using Array Function
const arrayExample2 = new Array("value1", 69, true);

console.log(arrayExample); // (3) ['value1', 69, true]

// todo: Subscripting in Arrays (Taking elements out of an array.):

//* Taking out 1st element of *arrayExample* array.
console.log(arrayExample[0]); // "value"

//* Taking out last element of *arrayExample* array.
console.log(arrayExample[2]); // true

// todo: Length Property
//* We can find the total number of characters of String, total no. of elements inside an array in JavaScript by using Length Property.

//? SYNTAX
//? variableName.length;

console.log(arrayExample.length); // Output: 3. Cuz total no. of elements in the array are 3.

//* To get the last element of the array,
console.log(arrayExample[arrayExample.length - 1]); // Output: true. -1 from length of array cuz, counting of elements in an array starts from 0.

//! NOTE: Inside the Square Brackets, JS expects a Expression (produces a value) not a Statement (No value production)

// todo: Mutation (Reassignment) in Arrays

//* Replacing / Mutating / Reassigning 1st element of array with number 420.
arrayExample[0] = 420;

console.log(arrayExample); // Output: (3) [420, 69, true]

//! NOTE: But we also know that variables declared with const keyword are immutable (here, arrayExample). Remember that it is only true for primitive values (such as, number, strings, etc.) not for data structures like arrays, etc.

// * Showing what types of items an array can store inside it,
const firstName = "Ujjwal";
const ujjwal = [firstName, "Gupta", 2022 - 2002, arrayExample];

console.log(ujjwal); // Output: (4) ['Ujjwal', 'Gupta', 20, Array(3)]

//? Exercise:
//* Given is an array of 4 birth years, find the age of person1, person2, & last person from the given array. & store the result in an array.
[1997, 1947, 1920, 1857];

//? Solution:
const calcAge = function (birtYear) {
  return 2022 - birtYear;
};

const years = [1997, 1947, 1920, 1857];

const person1 = calcAge(years[0]);
const person2 = calcAge(years[1]);
const person3 = calcAge(years[years.length - 1]);

console.log(person1, person2, person3);

const ages = [person1, person2, person3];
console.log(ages);

// --------------------------------------------------

// todo: 40. Basic Array Oprations (Methods)

//? ADD ELEMENTS IN THE ARRAY:

//todo: 1. Push Method
//* This method is used to add / push an item to the end of that array.

//? SYNTAX:
//? variableName.push(name of item to be added);

const friends = ["Tanmay", "Siddhant", "Abhishek", "Rohit", "Vishal"];

friends.push("Saurabh");

console.log(friends);
// Output: (6) ['Tanmay', 'Siddhant', 'Abhishek', 'Rohit', 'Vishal', 'Saurabh']

//* Returns the Length of new array including the pushed item.
const newLength = friends.push("Akash");
console.log(newLength); // 7
// After assigning a variable to the new array, it returns a value which is the length of the new array. So we can say that it acts like a function, since it returns a value.

//todo: 2. Unshift Method
//* This method is used to add / push an item to the start / beginning of that array.

//? SYNTAX:
//? variableName.unshift(name of item to be added);

friends.unshift("Harshal");

console.log(friends);
// Output: (8) ['Harshal', 'Tanmay', 'Siddhant', 'Abhishek', 'Rohit', 'Vishal', 'Saurabh', 'Akash']

//* Returns the Length of new array including the pushed item.
const newLengthFriends = friends.unshift("Riyansh");
console.log(newLengthFriends); // 9
// After assigning a variable to the new array, it returns a value which is the length of the new array. So we can say that it acts like a function, since it returns a value.

// ---------------------------

// ? REMOVE ELEMENTS FROM THE ARRAY

// todo: 1. Pop Method
//* This method is used to remove / pop the last item of that array. (Opposite of Push Method)

//? SYNTAX:
//? variableName.pop();

friends.pop();

console.log(friends);
// Last item "Akash" is now removed / popped of the array.

//* Returns the Removed / Popped item from the array.
const poppedElement = friends.pop();
console.log(poppedElement); // Saurabh (The removed element)

// todo: 2. Shift Method
//* This method is used to remove / pop the first item of that array. (Opposite of Unshift Method)

//? SYNTAX:
//? variableName.shift();

friends.shift();

console.log(friends);
// First item "Riyansh" is now removed / popped from the array.

//* Returns the Removed / Popped item from the array.
const shiftedElement = friends.shift();
console.log(shiftedElement); // Harshal (The removed element)

// ---------------------------

// todo: indexOf Method
//* This method is used to find the index of the given item from that array.

//? SYNTAX:
//? variableName.indexOf(item whose index you want to know);

console.log(friends.indexOf("Abhishek")); // 2
console.log(friends.indexOf("Mohit")); // -1
//* -1, because it is an item which is not present in the array.

// ---------------------------

// todo: Includes Method (new in ES6)
//* This method is used to tell whether the given item is present or not inside the array by returning true or false.

console.log(friends.includes("Rohit")); // true
console.log(friends.includes("Akash")); // false

//! NOTE: includes method actually uses Strict Equality (===) for this check. If 23 is inside the array & "23" is being checked by includes method, it will show false, cuz 23 is not equals to "23" as per the Strict Equality.

//* includes method is mostly used in if-else conditionals,

if (friends.includes("Tanmay")) {
  // Does friends array contain the item "Tanmay"?
  console.log("You have a friend named Tanmay.");
}

//! NOTE: Try to make your code more clearer, avoid using variables where they can be avoided.

// --------------------------------------------------

// todo: 42. Introduction to Objects

//? Data Structure #2: Object

//? Array
const ujjwalArray = [
  "Ujjwal", // First Name
  "Gupta", // Last Name
  2022 - 2002, // Age
  "Student", // Profession
  ["Tanmay", "Abhishek", "Rohit"], // friends
];

//* In array we have a problem of naming / referencing an item in array. We only can access them through their indexes. So the use of objects helps in naming / referencing the items of an object.

//? Object
const ujjwalx = {
  firstName: "Ujjwal",
  lastName: "Gupta",
  age: "2022 - 2002",
  profession: "Student",
  friends: ["Tanmay", "Abhishek", "Rohit"],
};

//* Objects define key-value pairs. So that we can give each of the value / item a name. Here, we can see with the use of key: value pair, we can more precisely name a value.
//* So, here above, we have an object which contain 5 key: value pairs.

//? SYNTAX: (Object Literal Syntax)
//? const objectName = {key1: value1, key2: value2,...};

//* Keys:
// Whereas keys are written just like a variable.
// Keys are also known as Properties.

//* Values:
// Here, values can be of any Data Type in JS.

//* key / property : value pair

//! NOTE:
//! In arrays, the order of values / items matters a lot to access those elements.
//! So, arrays should be used for more ORDERED DATA.
//! In objects, the order of values / items does not matter since they've different keys for different  values / items.
//! Even the properties / keys are ordered alphabetically while logging into the console. Which again means that the property / key order does not matter.
//! So, objects should be used for more UNSTRUCTURED DATA.

// --------------------------------------------------

// todo: 43. Dot & Bracket Notation

const ujjwalInformation = {
  firstName: "Ujjwal",
  lastName: "Gupta",
  age: "2022 - 2002",
  profession: "Student",
  friends: ["Tanmay", "Abhishek", "Rohit"],
};

console.log(ujjwalInformation);

//todo: Ways to retrive value from property in objects,

//todo: Dot Notation

//? SYNTAX:
//? console.log(object.property);

console.log(ujjwalInformation.lastName); // Gupta

//* Here "." is an operator which will go to the key / property name of the object & then retrieve the value from it.

//todo: Bracket Notation

//? SYNTAX:
//? console.log(object["property"]);

console.log(ujjwalInformation["lastName"]); // Gupta

//! NOTE:
//! We can store any expressions inside the Bracket Notation (also inside "") so that they can produce a value.

// Example:
const nameKey = "Name";
console.log(ujjwalInformation["first" + nameKey]); // Ujjwal
console.log(ujjwalInformation["last" + nameKey]); // Gupta

//! NOTE:
//! In Dot Notation, we have to use the exact property name to retrieve the value.
//! Whereas, in Bracket Notation, we can use computed property as well as property name to retrieve the value.

// Example:
const chooseInput = prompt(
  "What do you want to know about Ujjwal? Choose between, firstName, lastName, age, job, and friends."
);

if (ujjwalInformation[chooseInput]) {
  console.log(ujjwalInformation[chooseInput]);
} else {
  console.log(
    "Wrong request! Choose between, firstName, lastName, age, job, and friends."
  );
}

// ---------------------------

//todo: Adding new properties to the object using dot & bracket notation.

//todo: Dot Notation & Bracket Notation

//* Adding new key / property & value to object "ujjwalInformation" by using Dot Notation,

ujjwalInformation.location = "Nagpur";

//* Adding new key / property & value to object "ujjwalInformation" by using Bracket Notation,

ujjwalInformation["Instagram"] = "@ujjwalsgupta";

console.log(ujjwalInformation);

//? Challenge:
// "Jonas has 3 friends, and his best friend is called Michael." Write the given sentence. Use object to store name, no. of friends, & best friend name. given: const friends = ["Michael", "Peter", "Steven"]

//? Solution:
const jonas = {
  name: "Jonas",
  friendsArr: ["Michael", "Peter", "Steven"],
};

console.log(
  `${jonas.name} has ${jonas.friendsArr.length} friends, and his best friends is called ${jonas.friendsArr[0]}`
);

// --------------------------------------------------

// todo: 44. Object Methods

//* We already know that function is just a value.
//* Which means we can create a key: value pair in which the function is a value. So, now with this we can add functions to the objects.

const ujjwalInfo = {
  firstName: "Ujjwal",
  lastName: "Gupta",
  birthYear: 2002,
  profession: "Student",
  friends: ["Tanmay", "Abhishek", "Rohit"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2022 - birthYear;
  },
};

//* Here, we gave the property name a value (which is a function) which will produce a value.

//? Any function attached to an Object is called a Method.
//? Method is a property which holds a function value.
//! Here, calcAge is property / method that holds function value.

//! NOTE: Only Function Expression work here, because it contains anonymous function which dont have any name & also it produces a value & since function are just value, we can replace them inside objects, to assign it with a property / key.
//! Function Declaration will not work here because of the above reason, Arrow Functions will also not work because of `this` keyword.

console.log(ujjwalInfo.calcAge(2002)); //Dot Notation
console.log(ujjwalInfo["calcAge"](2002)); //Bracket Notation

//? What if the value of property birthYear inside the object ujjwalInfo changes to something else, so in order to not change it everywhere & to make our code DRY, we will use 'this' keyword.

const ujjwalInfox = {
  firstName: "Ujjwal",
  lastName: "Gupta",
  birthYear: 2002,
  profession: "Student",
  friends: ["Tanmay", "Abhishek", "Rohit"],
  hasDriversLicense: true,

  calcAge: function () {
    console.log(this); // See, the this keyword is equal to Object ujjwalInfox, from where it will fetch the value from the desired property.
    return 2022 - this.birthYear; // Here, this.birthYear means ujjwalInfox.birthYear
  },
};

//? this keyword or this variable is basically equal to the object on which the method is called.

//* So here, birthYear parameter will no longer be needed inside calcAge method / property. this keyword will be equal to the object ujjwalInfox & will find the property which is needed & will use that value directly inside calcAge method.

//! Why don't we then use, ujjwalInfox.birthYear instead of this.birthYear?
//! Because of this it will be violating DRY (Don't Repeat Yourself) principle, if we want to change the object name in future, we have to change it in all the positions then.

//! Also, hover to any keyword to know about its properties.

console.log(ujjwalInfox.calcAge()); // 20

//? Variation 3:
//? Making the function value as a property of the given object, so that it will be now stored as a property inside that object.
//? Here, this.age (age is being adding as a property to the object mentioned by the this keyword).

const ujjwalInfoxz = {
  firstName: "Ujjwal",
  lastName: "Gupta",
  birthYear: 2002,
  profession: "Student",
  friends: ["Tanmay", "Abhishek", "Rohit"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    // Same as, jonas.age = 2022 - this.birthYear;
    return this.age;
  },
};

console.log(ujjwalInfoxz.calcAge()); // 20
console.log(ujjwalInfoxz.age); // 20 // logging in the age property that was created.

//? Challenge:
// Given below is a data of Ujjwal (Biodata). Write a method, getSummary & this method should return a string which should summarize the data of Ujjwal's biodata. Also use calcAge function to find age.

// Write something like, "Ujjwal Gupta is a 20-year old student, he has friends, Tanmay, Abhishek & Rohit and he has a driver's license."

// const ujjwaBiodata = {
//   firstName: "Ujjwal",
//   lastName: "Gupta",
//   birthYear: 2002,
//   profession: "Student",
//   friends: ["Tanmay", "Abhishek", "Rohit"],
//   hasDriversLicense: true,
// };

//? Solution:
const ujjwalBiodata = {
  firstName: "Ujjwal",
  lastName: "Gupta",
  birthYear: 2002,
  profession: "Student",
  friends: ["Tanmay", "Abhishek", "Rohit"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.profession
    }, and he has ${
      this.hasDriversLicense === true ? "a" : "no"
    } driver's license.`;
  },

  // this.calcAge() will call the method calcAge to find the age.
};

console.log(ujjwalBiodata.getSummary());

//! NOTE: Arrays are also special kind of object. In which we use methods like .push, .unshift, .shift, .pop

// --------------------------------------------------

// todo: 46. Iteration: The for Loop

//* Loops are one more type of control statement than if-else.

//? SYNTAX:

//? for (let i = 0; i < array.length; i++) {
//?   const element = array[i];
//? }

//* i here is called as counter of the loop.
//* Inside the (), we write the
// firstly, the starting point of array, (Note, that the variable is written with let keyword because with every loop, the counter variable is incremented by 1)
// Secondly, the condition for the loop to run.
// thirdly, the increment of counter value.
//* Inside the {}, we write the code we wanted to be repeated once the condition becomes true & stop when the moment the condition becomes false.

//? Example:
// We are in a gym, we lift weights in a cycle of 10. Console log every weight lift until we reach 10.

//? Solution:
// Here, we are considering, rep as lifting of weight.

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// We can now see that we have completed 10 reps i.e., 10 repetitions in the console.

//! NOTE: Loop keeps on running while the condition is true.
//! A loop in which the condition is always true, it keeps runnning forever & becomes an Infinite Loop.

//? What if the count inside the while loop is not incremented?
//* If the count inside while loop is not incremented, then while loop will consider 1 inside it all the time, since no incrementation & will run infinitely till eternity which will cause our browser to lag.

// --------------------------------------------------

// todo: 47. Looping Arrays, Breaking & Continuing

const ujjwalArr = [
  "Ujjwal",
  "Gupta",
  2022 - 2002,
  "Student",
  ["Tanmay", "Abhishek", "Rohit"],
  true,
];

const types = [];

//* Log each item / element of the ujjwalArr array in the console using for loop. Also add them inside the empty array 'types'.

for (let i = 0; i < ujjwalArr.length; i++) {
  // Reading items / elements from the ujjwalArr array
  console.log(ujjwalArr[i], typeof ujjwalArr[i]);

  // Method 1:
  // Filling types array with typeof elements of ujjwalArr.
  types[i] = ujjwalArr[i];

  // Method 2:
  // Filling types array with typeof elements of ujjwalArr.
  types.push(typeof ujjwalArr[i]);
}

console.log(types);
// Output: ["string", "string", "number", "string", "object", "boolean"]

// -------------------------

//? Challenge:
// Given is an array of birth years of people, calculate the age of each person & store the result inside a new array.
const birthYear = [1991, 2007, 2002, 1997, 2020];

//? Solution:
const finalAges = []; // empty array for adding ages of given birth years of people.

//* Way #1
for (let i = 0; i < birthYear.length; i++) {
  function calcPersonAge(birthYear) {
    const age = 2022 - birthYear;
    return age;
  }

  const personAge = calcPersonAge(birthYear[i]);

  finalAges.push(personAge);
}
console.log(finalAges);

//* Way #2
for (let i = 0; i < birthYear.length; i++) {
  finalAges.push(2022 - birthYear[i]);
}
console.log(finalAges);

// -------------------------

//todo: Continue & Break Statements

//? Continue Statement
//* Continue Statement is used to exit (skip) the current iteration of the loop & continue from the next iteration until the condition is found.

//? Break Statement
//* Break Statement is used to completely terminate the whole loop once the condition is found.

//? Using Continue Statement to only print the items / elements in the array ujjwalArr which are string type.
console.log("------ ONLY STRINGS ------");

for (let i = 0; i < ujjwalArr.length; i++) {
  if (typeof ujjwalArr[i] !== "string") continue;

  console.log(ujjwalArr[i], typeof ujjwalArr[i]);
}

//? Using Break Statement to find the first number item/element in the loop, as soon as it is found, Break Statement will break the loop (terminate the loop). The loop will run fine for the items / elements before that number.
console.log("------ BREAK WITH NUMBER ------");

for (let i = 0; i < ujjwalArr.length; i++) {
  if (typeof ujjwalArr[i] === "number") break;

  console.log(ujjwalArr[i], typeof ujjwalArr[i]);
}

// --------------------------------------------------

// todo: 48. Looping Backwards & Loops in Loops

//? Looping Backwards
//* In normal loops, we use to loop forwards for printing items / elements of arrays i.e., from index 0, 1, ..., 4
//* But for Looping backwards, i.e., from index 4, 3, ..., 0

const ujjwalBio = [
  "Ujjwal",
  "Gupta",
  2022 - 2002,
  "Student",
  ["Tanmay", "Abhishek", "Rohit"],
];

for (let i = ujjwalBio.length - 1; i >= 0; i--) {
  console.log(i, ujjwalBio[i]);
}

//? Loops in Loops

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

//* Now we have 3 different excercises & we have to repeat each of them 5 times.
for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`---------- Starting Excercise ${excercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${excercise}: Lifting weights repetition ${rep}`);
  }
}

// --------------------------------------------------

// todo: 49. The while Loop

//? for Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR LOOP: Lifting weights repetition ${rep}`);
}

//? while Loop

//? SYNTAX
//? while (true) {
//?  Execute the code
//? }

//* While something (some condition is true), the loop will execute the code inside it repeatedly until the condition becomes false & the loop stops.

//* We have to mention the starting value of the counter before the while loop.

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE LOOP: Lifting weights repetition ${rep}`);
  rep++;
}

//! NOTE: while Loop is more versatile (can be used in larger variety of situations) than for Loop because it does not force us to use a counter, there is only condition which is needed & depending on the question / speciific situation we can use or not use counter.

//? Challenge
//* Rolling a dice until we get 6. & when we roll a 6, we stop.

let dice = Math.trunc(Math.random() * 6) + 1; // a method for generating random number from 1 to 6.
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // reassigning the value of dice after running the loop.
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
