// implementaion of binary search algoritm
// Time complexity O(log n)

/**
 * Performs a binary search on a sorted array to find the index of a target value.
 *
 * @param {array} arr - A sorted array of values.
 * @param {any} target - The target value to search for.
 * @return {number} The index of the target value if found, -1 otherwise.
 */
export function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Check if the target is present at mid
        if (arr[mid] === target) {
            return mid; // Target found
        }

        // If target is smaller, search the left half
        if (target < arr[mid]) {
            end = mid - 1;
        } 
        // If target is larger, search the right half
        else {
            start = mid + 1;
        }
    }

    return -1; // Target not found
}


