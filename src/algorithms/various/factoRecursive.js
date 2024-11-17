// the factorial of a non-negative integer ( n ) is the product of all positive integers less than or equal to ( n ).
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120

/**
 * Calculates the factorial of a non-negative integer using recursion.
 *
 * @param {number} n - the non-negative integer to calculate the factorial of
 * @return {number} the factorial of the given integer
 */
function factoRecursive(n){

    //base case
    if(n === 0){
        return 1
    }
    return n * factoRecursive(n-1)
}


console.log(factoRecursive(5))
console.log(factoRecursive(4))