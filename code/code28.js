/**
 * 28. Use for loop to iterate from 0 to 100 and print only prime numbers
 */


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Iterate from 0 to 100 and print prime numbers
  for (let number = 0; number <= 100; number++) {
    if (isPrime(number)) {
      console.log(number);
    }
  }


