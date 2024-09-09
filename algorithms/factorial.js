//A factorial of a non-negative integer ( n ) is the product of all positive integers less than or equal to ( n ).
//For example: 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(num) {   
    if (num < 0) return -1;
    if (num === 0) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(3))