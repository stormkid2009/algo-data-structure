//The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.
//It typically starts with 0 and 1. So, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on

let fibonacci = (num) => {
  if (num < 0) return [];
  if (num === 0) return 0;
  let list = [0, 1];
  for (let i = 2; i <= num; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }
  return list;
};

console.log(fibonacci(10));