// implementaion of linear search algoritm
// Time complexity O(n)

/**
 * Performs a linear search on a given array to find the index of a target value.
 *
 * @param {array} arr - The array to be searched.
 * @param {any} target - The target value to search for.
 * @return {number} The index of the target value if found, -1 otherwise.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))

