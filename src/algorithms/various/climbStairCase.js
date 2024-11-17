// Time complexity O(2^n)

/**
 * Calculates the number of ways to climb to the top of a staircase with n steps, 
 * where you can either climb 1 or 2 steps at a time.
 *
 * @param {number} n - The number of steps in the staircase.
 * @return {number} The number of ways to climb to the top.
 */
function climbStairCase(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairCase(n - 1) + climbStairCase(n - 2);
}


// Time complexity O(n)

/**
 * Calculates the number of ways to climb to the top of a staircase with n steps, 
 * where you can either climb 1 or 2 steps at a time.
 *
 * @param {number} n - The number of steps in the staircase.
 * @return {number} The number of ways to climb to the top.
 */
function climbStairCaseV2(n) {
        if(n <= 0) return `wrong number of stairs!!`;
        let noOfWays = [1,2];
        for(let i = 2 ; i <= n; i++){
            noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
        }
        
        return noOfWays[n-1]
    }

console.log(climbStairCase(-1));
console.log(climbStairCase(1));
console.log(climbStairCase(2));
console.log(climbStairCase(3));
console.log(climbStairCase(4));
console.log(climbStairCase(5));
