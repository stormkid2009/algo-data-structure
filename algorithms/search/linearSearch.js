// implementaion of linear search algoritm
// Time complexity O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        //console.log("i before if condition: ", i);
        if (arr[i] === target) {
            //console.log("i after if condition: ", i);
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))

