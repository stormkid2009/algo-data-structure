function quickSort(arr) {
    if (!Array.isArray(arr)) {
        console.log(`Error: Please input a valid list or array.`);
        return;
    }
    if (arr.length < 2) return arr;
    return quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr, low, high) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortHelper(arr, low, pivotIndex - 1);
        quickSortHelper(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const mid = Math.floor((low + high) / 2);
    const pivot = medianOfThree(arr, low, mid, high);
    // Move pivot to the end
    let pivotIndex = arr.indexOf(pivot);
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
    
    let i = low;
    for (let j = low; j < high; j++) {
        if (arr[j] < arr[high]) {
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

// Testing
console.log(quickSort(null));                   // Expected: 'Please input a valid list or array.'
console.log(quickSort('xyz'));                  // Expected: 'Please input a valid list or array.'
console.log(quickSort(123));                    // Expected: 'Please input a valid list or array.'
let list = [5, 9, 3, 4, 6, 2, 0, 1, 7, 8];
console.log(quickSort(list));                   // Expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let newList = ['d', 'e', 'c', 'a', 'f', 'b'];
console.log(quickSort(newList));                // Expected: ['a', 'b', 'c', 'd', 'e', 'f']
let mixList = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 'f', 6, 'g', 7, 'h', 8, 'i', 9, 'j', 10];
console.log(quickSort(mixList));                // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
let capitalSmall = ['A','Z','a','z','Y','y','X','x','W','w','V','v','U','u','T','t','S','s','R','r','Q','q','P','p','O','o','N','n','M','m','L','l','K','k','J','j','I','i','H','h','G','g','F','f','E','e','D','d','C','c','B','b'];
console.log(quickSort(capitalSmall));
