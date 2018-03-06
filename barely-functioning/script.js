alert("I'm connected!")

// check if a number is even 

function isEven(num) {
  num % 2 === 0;
}

//return the factorial of a given number

function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

//return the given spinal-case string, written in snake-case 

function toSnakeCase(string) {
  for(i = 0; i < (string.length - 1); i++) {
    string = string.replace("-", "_");
  }
  return string;
}