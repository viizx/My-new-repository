// A twin prime is a prime number that differs from another prime number by 2.
// Write a function named is_twin_prime which takes an int parameter and returns true if it is a twin prime, else false.

// example:

// given 5, which is prime
// 5+2=7 which is prime
// 5-2=3 which is prime
// Hence , 5 has two prime twins and its a Twin Prime.
// ---------------------------------------------------
// given 7, which is prime
// 7-2=5 which is prime
// 7+2=9 which is not prime
// Hence, 7 has one prime twin, and its a Twin Prime.
// ----------------------------------------------------
// given 9, which is not prime
// Hence, 9 is not a Twin Prime
// ----------------------------------------------------
// given 953 , which is prime
// 953-2=951 , which is not prime
// 953+2=955 , which is not prime
// Hence, 953 is not a Twin Prime.

function isTwinPrime(n) {
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  if (isPrime(n) && (isPrime(n - 2) || isPrime(n + 2))) return true;
  else return false;
}
