// the function is an optimization technique for selecting the pivot in QuickSort
//Choosing the right pivot is crucial because it directly affects the performance of the algorithm
// Time complexity O(n²) for QuickSort, which is very slow for large arrays.
// but choose good pivot will result in better performance of QuickSort as 2 subarrays are nearly equal of size
// Time complexity O(nlogn)

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
    if ((a > b) !== (a > c)) return a;  // a is the median
    else if ((b > a) !== (b > c)) return b;  // b is the median
    else return c;  // c is the median
}
