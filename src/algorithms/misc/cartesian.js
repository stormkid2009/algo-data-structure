// time complexity O(mn) if m is the length of listA and n is the length of listB

/**
 * Generates the Cartesian product of two arrays.
 *
 * @param {array} arrA - The first array.
 * @param {array} arrB - The second array.
 * @return {array} A 2D array containing all possible pairs of elements from arrA and arrB.
 */
export function cartesian(arrA,arrB){
    let list = []
    for(let i=0;i < arrA.length; i++){
        for(let j=0; j < arrB.length; j++){
            list =[...list,[arrA[i],arrB[j]]];
        }
    }
    return list;
}
