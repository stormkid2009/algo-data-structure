/**
 * Checks if the given number is a power of two.
 *
 * @param {number} n - the number to check
 * @return {boolean} true if the number is a power of two, false otherwise
 */

 function recursivePowerOfTwo(n){
    //we use bitwise operator & to check if the number is power of two
    // it took longer time in testing than the iterative version
    if(n <= 0) return false;
    return (n & (n - 1)) === 0
}

// Time complexity is O(1) as we are just checking if the number is power of two



/**
 * Checks if the given number is a power of two using a while loop.
 *
 * @param {number} n - the number to check
 * @return {boolean} true if the number is a power of two, false otherwise
 */

export function powerOfTwo(n){
    if(n <= 0) return false;
    while(n > 1){
        if(n % 2 !== 0) return false;
        n = n / 2;
    }
    return true
}
// Time complexity is O(log n) as we divide n by 2 inside the loop

