
import { mergeSort } from "../../../src/algorithms/sort/mergeSort";

describe("mergeSort", () => {
    test("mergeSort", () => {
        expect(mergeSort([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    });
    test("mergeSort", () => {
        expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test("mergeSort", () => {
        expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    test("mergeSort", () => {
        expect(mergeSort(['c', 'b', 'a', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
    test("mergeSort", () => {
        expect(mergeSort([])).toEqual([]);
    });
    test("mergeSort", () => {
        expect(mergeSort(['B', 'A', 'C', 'D', 'E'])).toEqual(['A', 'B', 'C', 'D', 'E']);
    });
});