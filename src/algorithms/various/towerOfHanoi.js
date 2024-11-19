//time complexity O(2^n)

/**
 * Solves the Tower of Hanoi problem using recursion.
 * The Tower of Hanoi problem is a mathematical puzzle where we have three rods and n disks.
 * The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
 * 1) Only one disk can be moved at a time.
 * 2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
 * 3) No disk may be placed on top of a smaller disk.
 *
 * @param {number} n - The number of disks
 * @param {string} start - The starting rod
 * @param {string} end - The destination rod
 * @param {string} middle - The middle rod
 * @param {Array<string>=} moves - An array to store the moves
 * @returns {Array<string>} The sequence of moves to solve the puzzle
 */
export function towerOfHanoi(n, start, end, middle, moves = []) {
    if (n === 1) {
        moves.push(`move Disk from ${start} to ${end}`);
        return moves;
    }
    towerOfHanoi(n - 1, start, middle, end, moves);
    moves.push(`move Disk from ${start} to ${end}`);
    towerOfHanoi(n - 1, middle, end, start, moves);
    return moves;
}




