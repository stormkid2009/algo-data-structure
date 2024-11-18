
// Time complexity O(2^n)

/**
 * Calculates the number of ways to climb to the top of a staircase with n steps, 
 * where you can either climb 1 or 2 steps at a time.
 *
 * @param {number} n - The number of steps in the staircase.
 * @return {number} The number of ways to climb to the top.
 */
export function recursiveCSC(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return recursiveCSC(n - 1) + recursiveCSC(n - 2);
}
