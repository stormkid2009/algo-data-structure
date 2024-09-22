function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
        const mid = Math.floor(arr.length / 2)
        const leftArr = arr.slice(0,mid)
        const rightArr = arr.slice(mid)
    // keep repeat slice array
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr];
}
let list = [22,11,5,33,17]
console.log(mergeSort(list))