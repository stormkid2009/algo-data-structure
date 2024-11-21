
import { recursiveCSC } from "../../../src/algorithms/various/recursiveCSC";

describe("recursiveCSC", () => {
    test.each([
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 8],
        [6, 13],
    ])("recursiveCSC", (input, expected) => {
        expect(recursiveCSC(input)).toBe(expected);
    })
});