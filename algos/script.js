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

