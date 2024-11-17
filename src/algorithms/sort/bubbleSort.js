function sort(arr) {
    let swapped;

    do {
        swapped = false;  // set swapped to false at the start of each iteration
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap elements
                swapped = true;  // set swapped to true if a swap was made
            }
            console.log(arr);
        }
    } while (swapped);   


    return arr;
}

const myArray = [22, 11, 5, 33, 17];

sort(myArray);