
import { recursiveSearch } from "../../../src/algorithms/search/recursiveSearch";

describe('recursiveSearch', () => {
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
                expect(recursiveSearch(arr, target)).toBe(expected);
            }
        );
    });

    // Edge cases
    describe('edge cases', () => {
        test('returns -1 for an empty array', () => {
            expect(recursiveSearch([], 1)).toBe(-1);
        });

        test('returns -1 for a non-existent target value', () => {
            expect(recursiveSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
        });
    });

    // Large inputs
    describe('large inputs', () => {
        test('returns -1 when the target is not in a large array', () => {
            const largeArray = Array.from({ length: 1e6 }, (_, i) => i); // Array [0, 1, 2, ..., 999999]
            expect(recursiveSearch(largeArray, 1e6)).toBe(-1);
        });

        test('returns the correct index when the target is in a large array', () => {
            const largeArray = Array.from({ length: 1e6 }, (_, i) => i); // Array [0, 1, 2, ..., 999999]
            expect(recursiveSearch(largeArray, 500000)).toBe(500000);
        });
    });
});