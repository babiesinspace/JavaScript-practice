// Javascript Review: Data Types | Variables | Logic | Loops


// 1. Intro to Javascript

// Create a script using JS that will alert a user with “Welcome to NYCDA, This is your first Javascript!” as well as log it into your developer console. 

alert("Welcome to NYCDA, This is your first Javascript!");

console.log("Welcome to NYCDA, This is your first Javascript!")

// 2. Variables and Math

// Let’s do some basic math and variable assignments. 
// Create a variable called mathOne and give it a value of 20 , create another one called mathTwo and give it a value of 3.  
// Create a new variable called mathSum that will be the sum of the first variables. 
// Create another variabled called mathProduct and this will be the product of the first two variables.
// Print mathSum and mathProduct to your developer console.

let mathOne = 20;

let mathTwo = 3;

let mathSum = mathOne + mathTwo;

let mathProduct = mathOne * mathTwo;

console.log(mathSum);

console.log(mathProduct);


// 3. Mixing Data Types

// Now lets create a string variable called test and give it a value of your name. 
// Create another variable called myAge and give it a value of your age. 
// Add those two together and see what happens! Do you get a string or a number back? How about if we add a number and a boolean?

let test = "Alex";

let myAge = 30;

console.log(test + myAge); // returns 'Alex30'

console.log(myAge + true); // returns 31 (true evaluates to 1, false 0)

// 4. Arrays & Multidimensional Arrays 

// Create an array with the name of 5 of your classmates (If you don’t remember than ask!). 
// Access the classmate in the 4th position of your array. 
// Add a new classmate into your array!
// The classmate in the 2nd position of your array has gone missing. Lets remove them from the array. 
// Remove the last element of our array without specifying its index. 

let arr = ["Alex", "Francis", "Jamie", "Ronan", "Issac"]

positionFour = arr[3];

arr.push("Danielle")

arr.splice(1,1);

arr.pop();

// Given the following multidimensional array: 
// [['David','Andrew'], ['Mike', 'Apple'], ['Beans' , 'Flour']]
// Access the array and return the element that contains ‘beans’

let sampleArray =  [['David','Andrew'], ['Mike', 'Apple'], ['Beans' , 'Flour']]

sampleArray[2][0]


// 5. Object Literals

// Create a object literal with your top 3 movies using the keys : topMovieOne , topMovieTwo , topMovieThree. 
// Assign some movie values to your keys!
// Access your object literal and print out in the console the following string “ My favorite movies are {topMovieOne} and {topMovieTwo}, but I really enjoy {topMovieThree}”. 

topMovies = {
  topMovieOne: "Pan's Labyrinth",
  topMovieTwo: "Caddyshack",
  topMovieThree: "Network"
};

console.log("My favorite movies are " + topMovies.topMovieOne + " and " + topMovies.topMovieTwo + ", but I really enjoy " + topMovies.topMovieThree + ".")

// Using Interpolation:
console.log(`My favorite movies are ${topMovies.topMovieOne} and ${topMovies.topMovieTwo}, but I really enjoy ${topMovies.topMovieThree}.`)

// 6. Object Literals & Changing Values
// Create an object with name and eyeColor properties. Change the eye color to 'brown'. Now add a hairColor property and change it to 'blonde'"

descriptors = {
  name: "Alex",
  eyeColor: "blue",
}

descriptors.eyeColor = "brown";

descriptors.hairColor = "blonde";

// 7. Logic
// Write a conditional that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, let the user know what the variable was and that it was greater than 10.

let overUnder = prompt("give me a number");

if (overUnder < 10) {
  alert("That's less than 10!")
} else {
  alert("Your guess was " + overUnder + ". That is more than or equal to 10.")
}
// Write a program that evaluates two things: 
// temperature and the status of an air conditioner (on or off). 
// If the temperature is warmer than 80, and the air conditioner is off, log "turn the ac on!".
//  If the temperature is warmer than 80 and the ac is on, log "this thing is broken!". 
// If the temperature is colder than 60 and the air conditioner is on, log "brrr, turn this thing off".
// If the temperature is cooler than 80, and the ac is off, log "not worth the electricity. leave it off." 

if (ac === "on" && temperature > 80) {
  return "this thing is broken!"
} else if (ac === "on" && temperature < 60) {
  return "brrr, turn this thing off!"
} else if (ac === "off" && temperature > 80) {
  return "turn the ac on!"
} else {
  return "not worth the electricity"
}

// 8. Logic & Strict Testing
//  Write a conditional that checks if our variable is equal to the number 45.

let x = "45";

x === 45 ? true : false; //expect false

Object.is(x, "45") // expect true

// 9. Loops ( For )
// Create a for loop that will print out asterisks starting with 10 of them down to one. 
// Example : 
// ********** (10)
// *********(9)
// ********(8) 

for (let x = 10; x > 0; x--) {
  console.log("*".repeat(x));
}
