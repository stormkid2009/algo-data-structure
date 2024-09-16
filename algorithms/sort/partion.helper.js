function medianOfThree(arr,start,mid,end){
    let a = arr[start]
    let b = arr[mid]
    let c = arr[end]
    if(a < b !== a < c) return a;
    if(b < a !== b < c) return b;
    else{ return c};
}

function partition(arr,start,end){
    const mid = Math.floor((start+end)/2);
    const pivot = medianOfThree(arr,start,mid,end)
    console.log(`the value of pivot is : `,pivot);
    // we need to swap the pivot with last element of the array
    // so pivot will be in the last index in  the array
    let pivotIndex = arr.indexOf(pivot);
    [arr[pivotIndex],arr[end]] = [arr[end],arr[pivotIndex]]
    console.log(`now the pivot index is at last position of array`,end);
    //now lets compare throw the loop between each element
    // and the pivot
    // if element less than pivot swap to the left
    // else keep it in place
    let i = start; // keep index of element avaialble for swap
    for(let j = start; j < end ; j++){
        if(arr[j] < pivot){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++
        }
    }
    // now move the pivot to its right position
    // remember that we put the pivot at the end of array
     [arr[end],arr[i]] =[arr[i],arr[end]] ;
    console.log(`now we move the pivot back to its right position: `,i)
    return arr;
}

let array = [22,11,44,17,7,33,5];
console.log(partition(array,0,6))

