/* Big O Notation here is O(2^n)
 it means that the time or space required by the algorithm grows exponentially with the increase in input size. 
This can lead to very large numbers for relatively small inputs, 
making algorithms with this complexity impractical for large datasets.
For example, an algorithm that solves a problem by exploring all possible subsets of a set (like the powerset) might have a complexity of O(2^n), 
since there are 2^n possible subsets for a set of n elements.
*/

/**
 * Generates the Fibonacci sequence recursively.
 *
 * @param {array} arr - The initial array containing the first two numbers of the Fibonacci sequence.
 * @param {number} n - The number of elements in the Fibonacci sequence to generate.
 * @return {array} The generated Fibonacci sequence.
 */
function fiboRecursive(arr, n) {
  if (n > 2) {
    arr = [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
    return fiboRecursive(arr, n - 1);
  }

  return arr;
}

console.log(fiboRecursive([0, 1], 15));
