// alert("We're in business!")

// 1 - A running total.
// Using a for loop, compute the sum of the numbers in the array named prices; storing the result in the sum variable.

var prices = [33,26,99,120,12,45];

var sum = 0;

for (i = 0; i < prices.length; i++) {
  sum = sum + prices[i];
}

// 2 - 99 Crows on the Wall
// Write a program in a new Repl.it that outputs all 100 lines of the classic song: 99 Crows on the Wall. 

for (i = 99; i > 1; i--) {
  console.log(`${i} crows on the wall. ${i} crows.\n1 fell down and became a wight.\n${i-1} crows on the wall`)
}

console.log("1 crow on the wall. 1 single crow.\nIt fell down and became a wight.\nThere's no one left to defend Westeros now.")

