//time complexity O(nlogn)
// we use divide and conquer approach

/**
 * Sorts an array in ascending order using the recursive quicksort algorithm.
 *
 * @param {Array} arr - the array to be sorted
 * @return {Array} the sorted array
 */
function quickSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Please input a valid list or array.')
        return;
    }
    if (arr.length < 2) return arr;
    return quickSortHelper(arr, 0, arr.length - 1);
}


/**
 * Recursively sorts an array in ascending order using the quicksort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @param {number} low - The starting index of the subarray to be sorted.
 * @param {number} high - The ending index of the subarray to be sorted.
 * @return {Array} The sorted array.
 */
function quickSortHelper(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortHelper(arr, low, pivotIndex - 1);
        quickSortHelper(arr, pivotIndex + 1, high);
    }
    return arr;
}

/**
 * Partitions the given array around a pivot element, rearranging elements so that all elements less than the pivot are on the left and all elements greater are on the right.
 *
 * @param {Array} arr - the array to be partitioned
 * @param {number} start - the starting index of the subarray to be partitioned
 * @param {number} end - the ending index of the subarray to be partitioned
 * @return {Array} the partitioned array
 */
function partition(arr,start,end){
    const mid = Math.floor((start+end)/2);
    const pivot = medianOfThree(arr,start,mid,end)
    let pivotIndex = arr.indexOf(pivot);
    [arr[pivotIndex],arr[end]] = [arr[end],arr[pivotIndex]]
    let i = start; // keep the index of element avaialble for swap
    for(let j = start; j < end ; j++){
        if(arr[j] < pivot){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++
        }
    }
    // now move the pivot to its right position
    // remember that we put the pivot at the end of array
     [arr[end],arr[i]] =[arr[i],arr[end]] ;
    console.log(`now we move the pivot back to its right position: `,i)
    return arr;
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

// testing
console.log(quickSort(null));                   // excpected 'Please input a valid list or array.'
console.log(quickSort('xyz'));                   // excpected 'Please input a valid list or array.'
console.log(quickSort(123));                   // excpected 'Please input a valid list or array.'
let list = [5, 9, 3, 4, 6, 2, 0, 1, 7, 8];
console.log(quickSort(list));                 //excpected [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let newList = ['d', 'e', 'c', 'a', 'f', 'b'];
console.log(quickSort(newList));            // excpected ['a', 'b', 'c', 'd', 'e', 'f']

