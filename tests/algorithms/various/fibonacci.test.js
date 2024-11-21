import { fibonacci } from "../../../src/algorithms/various/fibonacci";

describe("fibonacci", () => {
    test.each([
        [0, 0n],
        [1, 1n],
        [2, 1n],
        [3, 2n],
        [10, 55n],
        [20, 6765n],
    ])("computes the %ith Fibonacci number correctly", (input, expected) => {
        expect(fibonacci(input)).toBe(expected);
    });

    test("returns -1 for negative input", () => {
        expect(fibonacci(-1)).toBe(-1);
        expect(fibonacci(-5)).toBe(-1);
    });

    test("handles large inputs", () => {
        expect(fibonacci(50)).toBe(12586269025n); // BigInt expected value
        expect(fibonacci(100)).toBe(354224848179261915075n); // BigInt expected value
    });
});
