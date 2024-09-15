function sort(arr) {
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
            console.log(arr);
        }
    } while (swapped);   


    return arr;
}

const myArray = [22, 11, 5, 33, 17];

sort(myArray);