// implementaion of binary search algoritm
// Time complexity O(log n)

function recursiveBinarySearch(arr, target) {

    return helper(arr, target,0,arr.length - 1);
}
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

// Example usage

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(recursiveBinarySearch(arr, 10)); // true
console.log(recursiveBinarySearch(arr, 3));  // true
console.log(recursiveBinarySearch(arr, 6));  // true
console.log(recursiveBinarySearch(arr, 776)); // false
