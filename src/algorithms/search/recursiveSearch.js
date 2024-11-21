/**
 * Performs a recursive linear search on an array to find the index of a target value.
 *
 * @param {array} arr - The array to be searched.
 * @param {any} target - The target value to search for.
 * @param {number} [index=0] - The starting index of the search.
 * @return {number} The index of the target value if found, -1 otherwise.
 */
// export function recursiveSearch(arr, target, index = 0) {
//     if (index >= arr.length) {
//         return -1;
//     }

//     if (arr[index] === target) {
//         return index;
//     }

//     return recursiveSearch(arr, target, index + 1);
// }


// we use a stack because recursion make rangeError full of call stack with large arrays

/**
 * Performs a linear search on an array to find the index of a target value using a stack.
 *
 * @param {array} arr - The array to be searched.
 * @param {any} target - The target value to search for.
 * @return {number} The index of the target value if found, -1 otherwise.
 */
export function recursiveSearch(arr, target) {
    const stack = [{ index: 0 }];

    while (stack.length > 0) {
        const { index } = stack.pop();

        if (index >= arr.length) {
            return -1; // Target not found
        }
        if (arr[index] === target) {
            return index; // Target found
        }
        stack.push({ index: index + 1 });
    }
}

