// implementaion of binary search algoritm
// Time complexity O(log n)

function binarySearch(arr, target) {
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

// Example usage

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 10)); // true
console.log(binarySearch(arr, 3));  // true
console.log(binarySearch(arr, 6));  // true
console.log(binarySearch(arr, 776)); // false
