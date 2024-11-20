//time complexity O(nlogn)
// we use divide and conquer approach
// it uses a lot of memory rescources so it is not recommended for large arrays
// we can optimize it in reucrisve version

/**
 * Sorts an array using the quicksort algorithm.
 *
 * @param {Array} arr - the array to be sorted
 * @return {Array} the sorted array
 */
export function quickSort(arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError('Please input a valid list or array.');
    }
    if(arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1]; // last element is pivot
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]); // elements less than pivot go to left
        } else {
            right.push(arr[i]); // elements greater than pivot go to right
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}


