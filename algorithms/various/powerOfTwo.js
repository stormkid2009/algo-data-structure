/**
 * Checks if the given number is a power of two.
 *
 * @param {number} n - the number to check
 * @return {boolean} true if the number is a power of two, false otherwise
 */

// Time complexity is O(1) as we are just checking if the number is power of two
function powerOfTwo(n){
    //we use bitwise operator & to check if the number is power of two
    if(n <= 0) return false;
    return (n & (n - 1)) === 0
}
 



/**
 * Checks if the given number is a power of two using a while loop.
 *
 * @param {number} n - the number to check
 * @return {boolean} true if the number is a power of two, false otherwise
 */

// Time complexity is O(log n) as we divide n by 2 inside the loop
function powerOfTwoV2(n){
    if(n <= 0) return false;
    while(n > 1){
        if(n % 2 !== 0) return false;
        n = n / 2;
    }
    return true
}


console.log(powerOfTwoV2(16))
console.log(powerOfTwoV2(8))