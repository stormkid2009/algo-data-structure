
import { recursiveBinarySearch } from "../../../src/algorithms/search/recursiveBinSearch";

describe('recursiveBinarySearch', () => {
    test('returns the correct index when the target is found', () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 3;
        expect(recursiveBinarySearch(arr, target)).toBe(2);
    });

    test('returns -1 when the target is not in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 6;
        expect(recursiveBinarySearch(arr, target)).toBe(-1);
    });

    test('works with an empty array', () => {
        const arr = [];
        const target = 3;
        expect(recursiveBinarySearch(arr, target)).toBe(-1);
    }); 

    test('works with duplicate elements', () => {
        const arr = [1, 2, 3, 3, 5];
        const target = 3;
        expect(recursiveBinarySearch(arr, target)).toBe(2); // Returns the first occurrence
    });
    })