
import { powerOfTwo } from "../../../src/algorithms/various/powerOfTwo.js";


describe("powerOfTwo", () => {
    test.each([
        [1, true],    // 2^0
        [2, true],    // 2^1
        [4, true],    // 2^2
        [8, true],    // 2^3
        [16, true],   // 2^4
        [32, true],   // 2^5
        [64, true],   // 2^6
        [128, true],  // 2^7
        [256, true],  // 2^8
        [512, true],  // 2^9
        [1024, true], // 2^10
    ])("returns true for valid power of two: %i", (input, expected) => {
        expect(powerOfTwo(input)).toBe(expected);
    });

    test.each([
        [0, false],    // Special case: zero
        [-1, false],   // Negative number
        [3, false],    // Non-power of two
        [5, false],    // Non-power of two
        [10, false],   // Non-power of two
        [12, false],   // Non-power of two
        [15, false],   // Non-power of two
        [500, false],  // Non-power of two
        [999, false],  // Non-power of two
    ])("returns false for invalid input: %i", (input, expected) => {
        expect(powerOfTwo(input)).toBe(expected);
    });

    test("handles large powers of two", () => {
        expect(powerOfTwo(2 ** 20)).toBe(true); // 2^20
        expect(powerOfTwo(2 ** 30)).toBe(true); // 2^30
    });

    test("handles very large numbers and invalid large inputs", () => {
        expect(powerOfTwo(2 ** 40)).toBe(true); // 2^40
        expect(powerOfTwo(2 ** 50)).toBe(true); // 2^50
        expect(powerOfTwo((2 ** 50) - 1)).toBe(false); // Not a power of two
    });
});
