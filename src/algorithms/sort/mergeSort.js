// implementation of merge sort

/**
 * Sorts an array in ascending order using the merge sort algorithm.
 *
 * @param {Array} arr - the array to be sorted
 * @return {Array} the sorted array
 */
export function mergeSort(arr) {
    // check if input is array
    if(!Array.isArray(arr)) {
        throw new TypeError('Please input a valid list or array.');
    }
    // base case arrat with 1 or 0 elements
    if (arr.length < 2) {
        return arr
    }
    // declare middle variable
    let mid = Math.floor(arr.length / 2)
    // declare left and right array
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    // return merge
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

/**
 * Merges two arrays in ascending order.
 *
 * @param {Array} leftArr - The left array to be merged.
 * @param {Array} rightArr - The right array to be merged.
 * @return {Array} The merged array in ascending order.
 */
function merge(leftArr, rightArr) {
    // create a empty array
    let sortedArr = []
    // while left and right array has elements
    while (leftArr.length && rightArr.length) {
        // if left element is less than right element
        if (leftArr[0] <= rightArr[0]) {
            // push left element to sorted array
            sortedArr.push(leftArr.shift())
        } else {
            // push right element to sorted array
            sortedArr.push(rightArr.shift())
        }
    }
    // return sorted array
    return [...sortedArr, ...leftArr, ...rightArr]
}


