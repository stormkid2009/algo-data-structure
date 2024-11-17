
/**
 * A recursive function that prints the numbers from the input number down to 1.
 *
 * @param {number} n - the starting number for the recursive countdown
 * @return {undefined} this function does not return a value
 */
function recursive(n){
    console.log(`rescursive start at number : ${n} `);
    if(n > 1){
        n-= 1;
        return recursive(n);
    }
}



recursive(5)