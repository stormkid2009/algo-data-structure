
import { sort } from "../../../src/algorithms/sort/bubbleSort";

describe("bubbleSort", () => {
    test("sort", () => {
        expect(sort([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    });
    test("sort", () => {
        expect(sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test("sort", () => {
        expect(sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    test("sort", () => {
        expect(sort(['c', 'b', 'a', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
});