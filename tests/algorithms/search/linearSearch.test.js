
import { linearSearch } from '../../../src/algorithms/search/linearSearch.js';

describe('linearSearch', () => {
    // Valid input tests
    describe('valid inputs', () => {
        test.each([
            { arr: [1, 2, 3, 4, 5], target: 3, expected: 2 },
            { arr: [1, 2, 3, 4, 5], target: 1, expected: 0 },
            { arr: [1, 2, 3, 4, 5], target: 5, expected: 4 },
            { arr: ['a', 'b', 'c'], target: 'b', expected: 1 },
            { arr: [true, false, true], target: false, expected: 1 },
        ])(
            'returns $expected for $target in array $arr',
            ({ arr, target, expected }) => {
                expect(linearSearch(arr, target)).toBe(expected);
            }
        );
    });

    // Edge cases
    describe('edge cases', () => {
        test('returns -1 for an empty array', () => {
            expect(linearSearch([], 1)).toBe(-1);
        });

        test('returns -1 when the target is not in the array', () => {
            expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
        });

        test('correctly handles arrays with duplicate elements', () => {
            expect(linearSearch([1, 2, 3, 3, 4], 3)).toBe(2); // Returns the first occurrence
        });

        test('works with arrays containing `null` or `undefined`', () => {
            expect(linearSearch([null, undefined, 1], null)).toBe(0);
            expect(linearSearch([null, undefined, 1], undefined)).toBe(1);
        });

        test('works with an array containing mixed data types', () => {
            const mixedArray = [1, 'a', true, null, undefined];
            expect(linearSearch(mixedArray, 'a')).toBe(1);
            expect(linearSearch(mixedArray, true)).toBe(2);
        });
    });

    // Large inputs
    describe('performance tests', () => {
        const largeArray = Array.from({ length: 1e6 }, (_, i) => i); // Array [0, 1, 2, ..., 999999]

        test('correctly finds the first element in a large array', () => {
            expect(linearSearch(largeArray, 0)).toBe(0);
        });

        test('correctly finds the last element in a large array', () => {
            expect(linearSearch(largeArray, 999999)).toBe(999999);
        });

        test('returns -1 when the target is not in a large array', () => {
            expect(linearSearch(largeArray, 1e6)).toBe(-1);
        });
    });
});
