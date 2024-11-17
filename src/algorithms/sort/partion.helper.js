
/**
 * Partitions the given array around a pivot element.
 *
 * @param {array} arr - The input array to be partitioned.
 * @param {number} start - The starting index of the subarray to be partitioned.
 * @param {number} end - The ending index of the subarray to be partitioned.
 * @return {array} The partitioned array.
 */
function partition(arr,start,end){
    const mid = Math.floor((start+end)/2);
    const pivot = medianOfThree(arr,start,mid,end)
    // swap the pivot with last element of the array so it takes last slot
    let pivotIndex = arr.indexOf(pivot);
    [arr[pivotIndex],arr[end]] = [arr[end],arr[pivotIndex]]
    //compare  between each element and the pivot
    // if element less than pivot swap to the left
    // else keep it in place
    let i = start; // keep the index of element avaialble for swap
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



