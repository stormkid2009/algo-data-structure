function recursiveSearch(arr, target, index = 0) {
    if (index >= arr.length) {
        return -1;
    }

    if (arr[index] === target) {
        return index;
    }

    return recursiveSearch(arr, target, index + 1);
}

let list = [22, 5, 11, 33, 17];
console.log(recursiveSearch(list, 11));