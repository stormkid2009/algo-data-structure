// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
// It consists of two phases: the sorting phase and the rearranging phase.
// Time complexity O(n^2)
// insertion sort is more efficient than bubble sort in cases where the input array is almost sorted and for large arrays

/**
 * Sorts an array of elements in ascending order using the insertion sort algorithm.
 *
 * @param {Array} arr - The array of elements to be sorted.
 * @return {Array} The sorted array.
 */
export function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let key = arr[i + 1];  // key is the element to be inserted
        let j = i;
        // loop to compare key with each element in the sorted part of the array
        while (j >= 0 && arr[j] > key) {
            // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr; // Return the sorted array
}

