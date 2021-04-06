// Sum All Primes
// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

//  -get a number ->num
//  -make a loop from 2 to num --index=i
//  -make another loop inside to check each number (i) is prime or not --index=j
//  -if not break the loop j and set isPrime to false
//  -if its a prime add it to sum and go to next i
//  -at the end return sum

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if(i%j == 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      sum += i;
      console.log(i); //all primes up to num
    }
  }
  return sum;
}
console.log(sumPrimes(977));
// sumPrimes(10) //should return a number.
// sumPrimes(10) //should return 17.
// sumPrimes(977) //should return 73156.