
                                          /* Partion function is helper to quick sort version 2*/
// the function purpose is to find the sorted position
// for our pivot and divide the array into 2 parts
// elements < pivot   at the left
// elements > pivot  at the right
function partition(arr,low,high){
    // choose the best value as pivot using median of three function
    const mid = Math.floor((low + high) / 2);
    const pivot = medianOfThree(arr, low, mid, high);  // 1. Choose pivot
    // i > keeps track of where the next smaller-than-pivot element should be placed
    let i=low;
    // we loop through the array from start to end
    // the purpose of the loop is is to compare each element with the pivot and 
    //decide whether to move it to the left (for smaller elements) or keep it in place (for larger elements).
    for(let j=low;j<high;j++){
        // if the element is smaller than the pivot
        if(arr[j]<arr[pivot]){
            // swap the element with the next smaller element
            [arr[i],arr[j]] = [arr[j],arr[i]];
            // the index i will be incremented only if the element is smaller than the pivot
            // so that we can keep track of where the next smaller element should be placed
            // while index j will increment every cycle of the loop
            i++;
        }
    }
    //After the loop completes, all elements smaller than the pivot have been moved to the left
    //but the pivot itself is still in its original position (which could be at low, mid, or high).
    //we move the pivot to its correct position by swapping arr[i] with arr[high]
    // arr[i] > the first element that's larger than the pivot
    // arr[high] > where the pivot was initially stored
    [arr[i],arr[pivot]] = [arr[pivot],arr[i]];
    // return the index of the pivot
    return i;

    
    
}