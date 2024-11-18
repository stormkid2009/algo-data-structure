// implementaion of binary search algoritm
// Time complexity O(log n)

/**
 * Performs a recursive binary search on a sorted array to find the index of a target value.
 *
 * @param {array} arr - A sorted array of values.
 * @param {any} target - The target value to search for.
 * @return {number} The index of the target value if found, -1 otherwise.
 */
export function recursiveBinarySearch(arr, target) {

    return helper(arr, target,0,arr.length - 1);
}
/**
 * Performs a recursive binary search on a sorted array to find the index of a target value.
 *
 * @param {array} arr - A sorted array of values.
 * @param {any} target - The target value to search for.
 * @param {number} start - The starting index of the search range.
 * @param {number} end - The ending index of the search range.
 * @return {number} The index of the target value if found, -1 otherwise.
 */
 function helper(arr, target,start,end) {
    

        if(start > end) return -1; // Target not found
        let mid = Math.floor((start + end) / 2);

        // Check if the target is present at mid
        if (arr[mid] === target) {
            return mid; // Target found at index mid
        }

        // If target is smaller, search the left half
        else if (arr[mid] > target) {
            return helper(arr, target,start,mid - 1);
        } 
        // If target is larger, search the right half
        else{
            return helper(arr, target,mid + 1,end);
        }

}


