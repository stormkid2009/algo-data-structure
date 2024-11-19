// our logic here depends on maths -> 6n + 1 and 6n - 1 maybe a prime number
// but the number before and the number after maybe a prime number
// we narrow the search with a limit number which is the square root of the number
// n = a * b  so at least one number is divisable for n if not then n is prime
// Time complexity O(sqrt(n))  here as we dont have to loop through all the numbers

/**
 * Checks if a given number is a prime number.
 *
 * @param {number} n - the number to check for primality
 * @return {boolean} true if the number is prime, false otherwise
 */
export function checkPrime(n) {
    if (n <= 1) return false; // 0 and 1 are not prime numbers
    if (n === 2 || n === 3) return true;  // 2 and 3 are prime numbers
    
    // Eliminate numbers divisible by 2 or 3
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    let limit = Math.sqrt(n);
    
    // Check divisibility from 5 to √n, incrementing by 6 (for 6k ± 1 form)
    for (let i = 5; i <= limit; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    
    return true; // If no divisors were found, n is prime
}



export default checkPrime;