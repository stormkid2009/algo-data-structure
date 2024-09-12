function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Check if the target is present at mid
        if (arr[mid] === target) {
            return true; // Target found
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

    return false; // Target not found
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7];
const target = 6;

const result = binarySearch(array, target);
console.log(result); // Output: true
