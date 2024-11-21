//The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.
//It typically starts with 0 and 1. So, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on

/**
 * Computes the nth Fibonacci number using BigInt for large inputs.
 *
 * @param {number} num - The position in the Fibonacci sequence (0-based index).
 * @return {BigInt|number} The nth Fibonacci number, or -1 if num is negative.
 */
export function fibonacci(num) {
  if (num < 0) return -1; // Indicate invalid input
  if (num === 0) return 0n; // Use BigInt for consistency
  if (num === 1) return 1n;

  let prev = 0n, current = 1n; // Use BigInt
  for (let i = 2; i <= num; i++) {
    [prev, current] = [current, prev + current];
  }
  return current;
}


