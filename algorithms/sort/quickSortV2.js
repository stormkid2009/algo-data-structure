function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const mid = Math.floor((low + high) / 2);
    const pivot = medianOfThree(arr, low, mid, high);
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

function medianOfThree(arr, low, mid, high) {
    const a = arr[low], b = arr[mid], c = arr[high];
    if ((a > b) !== (a > c)) return a;
    else if ((b > a) !== (b > c)) return b;
    else return c;
}

let list = [22, 11, 5, 33, 17, 101, 202, 44, 37, 555, 22, 11, 5, 33, 17];
//console.log(quickSort(list));
console.log(medianOfThree(list, 0, Math.floor(list.length / 2), list.length - 1))  // 22
console.log(`partition: ${partition(list, 0, list.length - 1)}`)    // partition: 5
console.log(`pivot index is:list[5] = ${list[5]}`)
