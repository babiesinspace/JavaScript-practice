function isPrime(number) {
  //check if number is positive or 1
  if (number <= 1) return false;
  //check case statements
  if (number <= 3) return true;
  //if number is divisible by 2 or 3 it's not prime 
  if (number % 2 === 0 || number % 3 === 0) return false;
  //begin at 5 because all primes are either 1 above or below 6
  //all non-primes under 25 are divisible by 2 or 3, so while the number is larger than 25, check all numbers 1 more or less than multiples of 6
  for (i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false
    }
  }
  return true;
}

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. 
// So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a program that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers 
// in movieLengths whose sum equals flightLength.

// When building your method:

// 1. Assume your users will watch exactly two movies
// 2. Don't make your users watch the same movie twice

let movieLengths = [70,120,230,93,89,45,168,345]
let flightLength = 165

//input array and flight times
function movieFlightChecker(movieLengths, flightLength) {
  //check if element from array is longer than flight
  let perfectMatch = false;
  movieLengths.forEach(function(movie){
    if (movie < flightLength) {
    //check if element can sum with any other to equal flight time
    //if no, check next element with each proceeding element
    for ((i = movieLengths.indexOf(movie) + 1); i < (movieLengths.length - 1); i++) {
      //if yes, return true
      if (movie + movieLengths[i] === flightLength) {
        perfectMatch = true;
      }
    }      
    }
  });
  return perfectMatch;
}
movieFlightChecker(movieLengths,flightLength);
//returns true

function matchTimes(movieTimes, flightTime) {
    
    //sort by shortest to longest
    movieTimes = movieTimes.sort((a,b) => a-b);
    
    let startIndex = 0;
    let endIndex = movieTimes.length-1;
    
    while(startIndex < endIndex) {

      //add the first number in the array and the last number of the array to find total view time
      let total = movieTimes[startIndex] + movieTimes[endIndex];
      // if total viewing time is equal to flight, return true
        if(total === flightTime) {
            return true;
        } else if (total > flightTime) {
          //if viewing time is too long, find the next longest movie
            endIndex--;
        } else if (total < flightTime) {
          //if viewing time is too short, find next shortest movie
            startIndex++;
        }
    }
    return false;   
}


// FizzBuzz
// Write a program that console.logs the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five console.log “FizzBuzz”.

function fizzBuzz(number) {
  for (i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(number)
    }
  }
}

// 2 - Pig Latin
// Pig Latin is a game of alterations played on the English language. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Check out Wikipedia for more information on rules - try to get as close as possible. 
// Compose a javascript function that takes in a regular sentence or paragraph and returns the Pig Latin equivalent. 

function pigLatin(sentence) {

  let sentenceArray = sentence.split(" ")
  let translation = ""
  sentenceArray.forEach(function(word) {
      let firstVowel = word.search(/[aeiou]/i)
      let tail = word.slice(0, firstVowel) + "ay";
      let head = word.slice(firstVowel);
      word = head + tail;
      translation += word + " "
  })
  
  return translation
}

// 3 - Palindrome
// Write a JavaScript function that takes in a string and checks if it is a palindrome.

function palindrome(string) {
  let arrayOfLetters = string.replace(/\s+/g, '').split("");
  let reversedLetters = [];
  arrayOfLetters.forEach(function(letter) {
    reversedLetters.unshift(letter);
  });
  
  return arrayOfLetters.join("") === reversedLetters.join("") ? true : false;
}


//Take a number and return an array of numbers going from 0 up to that number and then back down

function countUpThenDown(number){
  var countUp = [];
  var countDown = [];
  
  for (i = 0; i < number; i++) {
    countUp.push(i);
    var down = number - (i + 1);
    countDown.push(down);
  }
  countUp.push(number);
  return countUp.concat(countDown);
}

// Binary Search:

function binarySearch(values, target, start, end) {

  // find the middle index of your value array 
  var middle = Math.floor((start + end) / 2);
  
  //grab the number in the middle of non-searched options
  var value = values[middle];

}