/**
 * Sorts an array using the quick sort algorithm.
 *
 * @param {Array} arr - The input array of elements to be sorted.
 * @return {Array} The sorted array.
 *
 * @throws {TypeError} If the input is not a valid list or array.
 */
export function quickSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Please input a valid list or array.');
    }
    if (arr.length < 2) return arr;
    return quickSortHelper(arr, 0, arr.length - 1);
}

/**
 * Recursively sorts the array in place using the quicksort algorithm.
 *
 * @param {Array} arr - The array of elements to be sorted.
 * @param {number} low - The starting index of the subarray to be sorted.
 * @param {number} high - The ending index of the subarray to be sorted.
 * @return {Array} The sorted array.
 */
function quickSortHelper(arr, low, high) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortHelper(arr, low, pivotIndex - 1);
        quickSortHelper(arr, pivotIndex + 1, high);
    }
    return arr;
}

/**
 * Partitions the given array around a pivot element.
 *
 * @param {Array} arr - The input array to be partitioned.
 * @param {number} start - The starting index of the subarray to be partitioned.
 * @param {number} end - The ending index of the subarray to be partitioned.
 * @return {number} The index of the pivot element after partitioning.
 */
function partition(arr, start, end) {
    const mid = Math.floor((start + end) / 2);
    const pivot = medianOfThree(arr, start, mid, end);
    let pivotIndex = arr.indexOf(pivot);
    // Swap pivot to the end
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

    let i = start;
    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    // Place pivot in its correct position
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
}

/**
 * Returns the median of three elements in an array.
 *
 * @param {Array} arr - The input array.
 * @param {number} low - The index of the first element.
 * @param {number} mid - The index of the second element.
 * @param {number} high - The index of the third element.
 * @return {*} The median of the three elements.
 */
function medianOfThree(arr, low, mid, high) {
    const a = arr[low], b = arr[mid], c = arr[high];
    if ((a > b) !== (a > c)) return a;
    else if ((b > a) !== (b > c)) return b;
    else return c;
}
