
import { insertionSort } from "../../../src/algorithms/sort/insertionSort";

describe("insertionSort", () => {
    test("insertionSort", () => {
        expect(insertionSort([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    });
    test("insertionSort", () => {
        expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test("insertionSort", () => {
        expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    test("insertionSort", () => {
        expect(insertionSort(['c', 'b', 'a', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
    test("insertionSort", () => {
        expect(insertionSort([])).toEqual([]);
    });
    test("mergeSort", () => {
        expect(insertionSort(['B', 'A', 'C', 'D', 'E'])).toEqual(['A', 'B', 'C', 'D', 'E']);
    });
});