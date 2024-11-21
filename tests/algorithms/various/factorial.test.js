
import { factorial } from "../../../src/algorithms/various/factorial";

describe("factorial", () => {
    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120]    
    ])("factorial", (input, expected) => {
        expect(factorial(input)).toBe(expected);
    })
});