
import { cartesian } from "../../../src/algorithms/misc/cartesian";

describe("cartesian", () => {   
    test("returns the Cartesian product of two arrays", () => {
        const arrA = [1, 2];
        const arrB = [3, 4];
        const expected = [[1, 3], [1, 4], [2, 3], [2, 4]];
        expect(cartesian(arrA, arrB)).toEqual(expected);
    });
    test("returns an empty array if one of the arrays is empty", () => {
        const arrA = [];
        const arrB = [1, 2];
        const expected = [];
        expect(cartesian(arrA, arrB)).toEqual(expected);
    })
});