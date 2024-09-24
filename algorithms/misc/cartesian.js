

/**
 * Generates the Cartesian product of two arrays.
 *
 * @param {array} arrA - The first array.
 * @param {array} arrB - The second array.
 * @return {array} A 2D array containing all possible pairs of elements from arrA and arrB.
 */
function Cartesian(arrA,arrB){
    let list = []
    for(let i=0;i < arrA.length; i++){
        for(let j=0; j < arrB.length; j++){
            list =[...list,[arrA[i],arrB[j]]];
        }
    }
    return list;
}
let listA = [1,2]
let listB = [3,4]
console.log(Cartesian(listA,listB))