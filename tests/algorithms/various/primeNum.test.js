
import {checkPrime} from "../../../src/algorithms/various/primeNum.js";


describe("checkPrime", () => {
    test.each([
        [2, true],    // Smallest prime number
        [3, true],    // Prime
        [5, true],    // Prime
        [7, true],    // Prime
        [11, true],   // Prime
        [13, true],   // Prime
        [17, true],   // Prime
        [19, true],   // Prime
        [23, true],   // Prime
        [29, true],   // Prime
    ])("returns true for prime numbers: %i", (input, expected) => {
        expect(checkPrime(input)).toBe(expected);
    });

    test.each([
        [0, false],    // Special case: zero
        [1, false],    // Special case: one
        [-1, false],   // Negative number
        [4, false],    // Composite
        [6, false],    // Composite
        [8, false],    // Composite
        [9, false],    // Composite
        [10, false],   // Composite
        [15, false],   // Composite
        [25, false],   // Composite
        [100, false],  // Composite
    ])("returns false for non-prime numbers: %i", (input, expected) => {
        expect(checkPrime(input)).toBe(expected);
    });

    test("handles large prime numbers", () => {
        expect(checkPrime(101)).toBe(true);    // Prime
        expect(checkPrime(103)).toBe(true);    // Prime
        expect(checkPrime(1009)).toBe(true);   // Prime
        expect(checkPrime(7919)).toBe(true);   // Prime
    });

    test("handles large composite numbers", () => {
        expect(checkPrime(1001)).toBe(false);  // Composite
        expect(checkPrime(1009 * 1009)).toBe(false); // Large composite
    });

    test("handles edge cases", () => {
        expect(checkPrime(0)).toBe(false);     // Zero is not prime
        expect(checkPrime(1)).toBe(false);     // One is not prime
        expect(checkPrime(-5)).toBe(false);    // Negative number is not prime
    });
});
