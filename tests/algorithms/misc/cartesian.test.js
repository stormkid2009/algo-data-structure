
import { cartesian } from "../../../src/algorithms/misc/cartesian";


describe("cartesian", () => {
    it("returns the cartesian product of two arrays", () => {
        const arrA = [1, 2];
        const arrB = ['a', 'b'];
        const result = cartesian(arrA, arrB);
        expect(result).toEqual([
            [1, 'a'],
            [1, 'b'],
            [2, 'a'],
            [2, 'b']
        ]);
    });

    it("handles one or both arrays being empty", () => {
        expect(cartesian([], [1, 2, 3])).toEqual([]); // Empty first array
        expect(cartesian([1, 2, 3], [])).toEqual([]); // Empty second array
        expect(cartesian([], [])).toEqual([]);        // Both arrays empty
    });

    it("handles arrays with one element each", () => {
        const arrA = [5];
        const arrB = ['x'];
        const result = cartesian(arrA, arrB);
        expect(result).toEqual([[5, 'x']]);
    });

    it("works for arrays of different lengths", () => {
        const arrA = [1];
        const arrB = [10, 20, 30];
        const result = cartesian(arrA, arrB);
        expect(result).toEqual([
            [1, 10],
            [1, 20],
            [1, 30]
        ]);
    });
});
