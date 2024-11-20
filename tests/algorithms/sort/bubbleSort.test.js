
import { bubbleSort } from "../../../src/algorithms/sort/bubbleSort";

describe("bubbleSort", () => {
    // Test valid cases
    test.each([
        { input: [5, 3, 1, 2, 4], expected: [1, 2, 3, 4, 5], description: 'unsorted array of numbers' },
        { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5], description: 'already sorted array' },
        { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5], description: 'reverse sorted array' },
        { input: ['c', 'b', 'a', 'd', 'e'], expected: ['a', 'b', 'c', 'd', 'e'], description: 'unsorted array of lowercase letters' },
        { input: [], expected: [], description: 'empty array' },
        { input: ['B', 'A', 'C', 'D', 'E'], expected: ['A', 'B', 'C', 'D', 'E'], description: 'unsorted array of uppercase letters' }
    ])('correctly sorts $description', ({ input, expected }) => {
        expect(bubbleSort(input)).toStrictEqual(expected);
    });

    // Test invalid inputs
    test.each([
        { input: null, description: 'null input' },
        { input: undefined, description: 'undefined input' },
        { input: {}, description: 'non-array input (object)' },
        { input: 123, description: 'non-array input (number)' },
        { input: 'string', description: 'non-array input (string)' }
    ])('throws an error for $description', ({ input }) => {
        expect(() => bubbleSort(input)).toThrow(TypeError);
    })
});