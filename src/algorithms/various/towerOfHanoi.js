//time complexity O(2^n)
/**
 * A recursive function that solves the Tower of Hanoi problem.
 *
 * @param {number} n - The number of disks in the Tower of Hanoi.
 * @param {number} start - The index of the starting peg.
 * @param {number} end - The index of the destination peg.
 * @param {number} middle - The index of the auxiliary peg.
 * @return {undefined} This function does not return a value, it logs the moves to the console.
 */
function towerOfHanoi(n,start,end,middle){
    if(n === 1){
        console.log(`move Disk from ${start} to ${end}`);
        return;
    }
    towerOfHanoi(n-1,start,middle,end);
    console.log(`move Disk from ${start} to ${end}`);
    towerOfHanoi(n-1,middle,end,start);
}

//towerOfHanoi(3,1,3,2)
towerOfHanoi(3,'A','C','B')