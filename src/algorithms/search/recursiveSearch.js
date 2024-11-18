/**
 * Performs a recursive linear search on an array to find the index of a target value.
 *
 * @param {array} arr - The array to be searched.
 * @param {any} target - The target value to search for.
 * @param {number} [index=0] - The starting index of the search.
 * @return {number} The index of the target value if found, -1 otherwise.
 */
export function recursiveSearch(arr, target, index = 0) {
    if (index >= arr.length) {
        return -1;
    }

    if (arr[index] === target) {
        return index;
    }

    return recursiveSearch(arr, target, index + 1);
}

