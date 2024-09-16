// the function is an optimization technique for selecting the pivot in QuickSort
//Choosing the right pivot is crucial because it directly affects the performance of the algorithm
//The pivot divides the array into two subarrays, and the performance of QuickSort
//depends on how well-balanced these subarrays are. If the pivot is not chosen wisely, it
//could result in highly unbalanced partitions, leading to inefficient sorting. The ideal pivot
//divides the array into two halves that are as equal in size as possible
// bad choice of bad pivot will result in poor performance of QuickSort as it makes 2 subarrays not equal of size
//    [small]     pivot      [large ....... ] or [large ......... ]         pivot      [small]
// Time complexity O(n²) for QuickSort, which is very slow for large arrays.
// but choose good pivot will result in better performance of QuickSort as 2 subarrays are equal of size
// Time complexity O(nlogn)

function medianOfThree(arr, low, mid, high) {
    const a = arr[low], b = arr[mid], c = arr[high];
    if ((a > b) !== (a > c)) return a;  // a is the median
    else if ((b > a) !== (b > c)) return b;  // b is the median
    else return c;  // c is the median
}
