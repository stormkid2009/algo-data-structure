

// Time complexity O(n)

/**
 * Calculates the number of ways to climb to the top of a staircase with n steps, 
 * where you can either climb 1 or 2 steps at a time.
 *
 * @param {number} n - The number of steps in the staircase.
 * @return {number} The number of ways to climb to the top.
 */
export function climbStairCase(n) {
        if(n <= 0) return 0;
        let noOfWays = [1,2];
        for(let i = 2 ; i <= n; i++){
            noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
        }
        
        return noOfWays[n-1]
    }


