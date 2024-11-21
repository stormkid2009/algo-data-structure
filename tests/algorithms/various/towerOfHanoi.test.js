
import { towerOfHanoi } from "../../../src/algorithms/various/towerOfHanoi.js";


describe("towerOfHanoi", () => {
    test.each([
        [1, "A", "C", "B", ["move Disk from A to C"]], // 1 disk
        [2, "A", "C", "B", [
            "move Disk from A to B",
            "move Disk from A to C",
            "move Disk from B to C"
        ]], // 2 disks
        [3, "A", "C", "B", [
            "move Disk from A to C",
            "move Disk from A to B",
            "move Disk from C to B",
            "move Disk from A to C",
            "move Disk from B to A",
            "move Disk from B to C",
            "move Disk from A to C"
        ]], // 3 disks
    ])(
        "solves Tower of Hanoi for %i disks from %s to %s using %s as auxiliary",
        (n, start, end, middle, expected) => {
            const result = towerOfHanoi(n, start, end, middle);
            expect(result).toEqual(expected);
        }
    );

    test("handles larger cases correctly (4 disks)", () => {
        const result = towerOfHanoi(4, "A", "C", "B");
        expect(result).toEqual([
            "move Disk from A to B",
            "move Disk from A to C",
            "move Disk from B to C",
            "move Disk from A to B",
            "move Disk from C to A",
            "move Disk from C to B",
            "move Disk from A to B",
            "move Disk from A to C",
            "move Disk from B to C",
            "move Disk from B to A",
            "move Disk from C to A",
            "move Disk from B to C",
            "move Disk from A to B",
            "move Disk from A to C",
            "move Disk from B to C"
        ]);
    });

    test("handles edge cases", () => {
        const result = towerOfHanoi(5, "A", "C", "B");
        expect(result.length).toBe(2 ** 5 - 1); // 31 moves
        expect(result[0]).toBe("move Disk from A to C"); // First move
        expect(result[result.length - 1]).toBe("move Disk from A to C"); // Last move
    });
    
});
