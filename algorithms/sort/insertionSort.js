// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
// It consists of two phases: the sorting phase and the rearranging phase.
// The first phase is sorting, where you compare each element of the array with the elements that have already been sorted.
//the second phase is rearranging, where you swap the elements if they are in the wrong order.
// The algorithm starts by taking the first element of the array and inserting it into the correct position in the sorted part of the array.
// The algorithm then takes the second element of the array and inserts it into the correct position in the sorted part of the array.
// This process continues until the entire array is sorted.

// Time complexity O(n^2)
// insertion sort is more efficient than bubble sort in cases where the input array is almost sorted and for large arrays

function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let key = arr[i + 1];
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

let list = [22, 11, 5, 33, 17];
console.log(insertionSort(list));
console.log(list);