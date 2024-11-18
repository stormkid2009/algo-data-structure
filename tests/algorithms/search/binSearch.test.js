
import { binarySearch } from "../../../src/algorithms/search/binSearch";


describe('binarySearch', () => {
    test('returns the correct index when the target is found', () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 3;
        expect(binarySearch(arr, target)).toBe(2);
    });

    test('returns -1 when the target is not in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 6;
        expect(binarySearch(arr, target)).toBe(-1);
    });

    test('works with an empty array', () => {
        const arr = [];
        const target = 3;
        expect(binarySearch(arr, target)).toBe(-1);
    });

    test('works with duplicate elements', () => {
        const arr = [1, 2, 3, 3, 5];
        const target = 3;
        expect(binarySearch(arr, target)).toBe(2); // Returns the first occurrence
    });

    test('works with strings in the array', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const target = 'c';
        expect(binarySearch(arr, target)).toBe(2);
    });
});