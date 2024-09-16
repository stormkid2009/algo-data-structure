
function quickSort(arr) {
    if (!Array.isArray(arr)) {
        //throw new TypeError('Please input a valid list or array.')
        console.log(`Error: Please input a valid list or array.`)
        return;
    }
    if (arr.length < 2) return arr;
    return quickSortHelper(arr, 0, arr.length - 1);
}


function quickSortHelper(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortHelper(arr, low, pivotIndex - 1);
        quickSortHelper(arr, pivotIndex + 1, high);
    }
    return arr;
}
/*
function partition(arr, low, high) {
    const mid = Math.floor((low + high) / 2);
    const pivot = medianOfThree(arr, low, mid, high);
    //const pivot = arr[high];
    let i = low;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
}
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

//console.log(medianOfThree(list, 0, Math.floor(list.length / 2), list.length - 1))  // 22
//console.log(`partition: ${partition(list, 0, list.length - 1)}`)    // partition: 5
//console.log(`pivot index is:list[5] = ${list[5]}`)
