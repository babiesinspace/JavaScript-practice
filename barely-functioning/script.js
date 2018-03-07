// check if a number is even 

// function isEven(num) {
//   num % 2 === 0;
// }

//return the factorial of a given number

// function factorial(num) {
//   if (num === 1 || num === 0) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

//return the given spinal-case string, written in snake-case 

// function toSnakeCase(string) {
//   for(i = 0; i < (string.length - 1); i++) {
//     string = string.replace("-", "_");
//   }
//   return string;
// }

// Javascript Functions & Scope


// Function with no arguments
// Declare a function called bestTeacher that takes no arguments and logs to the console “{Your Teacher} is the best teacher in the world” to the console. ;)

function bestTeacher() {
  console.log("David is the best teacher in the world")
}

// Function with one argument
// NYCDA needs a simple welcome program for registered students. 
// Create a function called nycdaWelcome that will take in a student's name as a function argument and console log a string that looks like : “Welcome to NYCDA {Students Name}. Enjoy your stay” 

function nycdaWelcome(student) {
  console.log(`Welcome to NYCDA, ${student}!`)
}

// Function with multiple arguments 
// Create a simple calculator function called simpleCalc that given two arguments will perform addition and return the result.

function simpleCalc(num1, num2) {
  return num1 + num2;
}

// Function with arguments and logic
// Declare a function called magicDoor that receives an input of 1, 2 or 3. Depending upon which virtual "door" was entered create logic that will tell user they've received a different "prize" in an alert based on their selection
// Door 1 will give the user a brand new car
// Door 2 will give the user a nycda t-shirt
// Door 3 will turn into a blackhole and teleport you to antarctica


// Function that modifies input  
// Define a function greaterOfThree that takes three integers and returns the larger of the three.


// Function that modifies input 
// Define a function lineThemUp that takes three integers as arguments and returns the integers as an array.


// Function that modifies input
// Define a function called knighter that takes a name and returns it after being knighted.
// ex : Knighter(“Andy”) returns “Royal Knight Sir Andy”


// Function with Logic 
// Define a function called royalizer that takes a gender and name as arguments, and returns a title based on the gender. 
// ex : royalizer(“male”, “David”) returns “His Majesty David” , for female it would be “Her Majesty X”.