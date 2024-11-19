
import { towerOfHanoi } from "../../../src/algorithms/various/towerOfHanoi.js";

describe('towerOfHanoi', () => {
    test('solves Tower of Hanoi for 1 disk', () => {
        const moves = towerOfHanoi(1, 'A', 'C', 'B');
        expect(moves).toEqual(['move Disk from A to C']);
    });

    test('solves Tower of Hanoi for 2 disks', () => {
        const moves = towerOfHanoi(2, 'A', 'C', 'B');
        expect(moves).toEqual([
            'move Disk from A to B',
            'move Disk from A to C',
            'move Disk from B to C'
        ]);
    });

    test('solves Tower of Hanoi for 3 disks', () => {
        const moves = towerOfHanoi(3, 'A', 'C', 'B');
        expect(moves).toEqual([
            'move Disk from A to C',
            'move Disk from A to B',
            'move Disk from C to B',
            'move Disk from A to C',
            'move Disk from B to A',
            'move Disk from B to C',
            'move Disk from A to C'
        ]);
    });

    test('solves Tower of Hanoi for 4 disks', () => {
        const moves = towerOfHanoi(4, 'A', 'C', 'B');
        expect(moves).toEqual([
            'move Disk from A to B',
            'move Disk from A to C',
            'move Disk from B to C',
            'move Disk from A to B',
            'move Disk from C to A',
            'move Disk from C to B',
            'move Disk from A to B',
            'move Disk from A to C',
            'move Disk from B to C',
            'move Disk from B to A',
            'move Disk from C to A',
            'move Disk from B to C',
            'move Disk from A to B',
            'move Disk from A to C',
            'move Disk from B to C'
        ]);
    });
});
