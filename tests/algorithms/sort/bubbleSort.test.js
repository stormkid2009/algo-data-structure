
import { bubbleSort } from "../../../src/algorithms/sort/bubbleSort";

describe("bubbleSort", () => {
    test("bubbleSort", () => {
        expect(bubbleSort([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    });
    test("bubbleSort", () => {
        expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test("bubbleSort", () => {
        expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    test("bubbleSort", () => {
        expect(bubbleSort(['c', 'b', 'a', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
    test("bubbleSort", () => {
        expect(bubbleSort([])).toEqual([]);
    });
    test("bubbleSort", () => {
        expect(bubbleSort(['B', 'A', 'C', 'D', 'E'])).toEqual(['A', 'B', 'C', 'D', 'E']);
    });
});