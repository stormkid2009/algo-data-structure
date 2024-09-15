//time complexity O(nlogn)
// we use divide and conquer approach
//in this algorithm we divide the array into two parts by selecting the last element as the pivot
//then we compare each element with the pivot
//if the element is less than the pivot we push it to the left array
//if the element is greater than the pivot we push it to the right array
//then we recursively call the quick sort function on the left and right arrays
//then we return the sorted array
//we do this until the array has only one element
// it uses a lot of memory rescources so it is not recommended for large arrays
// we can optimize it in version 2

function quickSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    //console.log(left, pivot, right)       to see how the array is divided and how many arrays we have
    return [...quickSort(left), pivot, ...quickSort(right)];
}


let list = [22, 11, 5, 33, 17,101,202,44,37,555,22,11,5,33,17];
console.log(quickSort(list))
//let newList = [22,11,5,33,17]
//quickSort(list)