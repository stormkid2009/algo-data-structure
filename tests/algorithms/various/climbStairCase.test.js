
import { climbStairCase } from "../../../src/algorithms/various/climbStairCase";

describe("climbStairCase", () => {
    test.each([
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 8],
        [6, 13],
    ])("climbStairCase", (input, expected) => {
        expect(climbStairCase(input)).toBe(expected);
    })
});