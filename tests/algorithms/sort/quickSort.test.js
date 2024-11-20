
import { quickSort } from '../../../src/algorithms/sort/quickSort.js';

describe("quickSort", () => {
    test("quickSort", () => {
        expect(quickSort([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    });
    test("quickSort", () => {
        expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test("quickSort", () => {
        expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    test("quickSort", () => {
        expect(quickSort(['c', 'b', 'a', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
    test("quickSort", () => {
        expect(quickSort([])).toEqual([]);
    });
    test("quickSort", () => {
        expect(quickSort(['B', 'A', 'C', 'D', 'E'])).toEqual(['A', 'B', 'C', 'D', 'E']);
    });
});