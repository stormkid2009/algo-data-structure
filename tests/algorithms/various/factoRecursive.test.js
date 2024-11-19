
import { factoRecursive } from "../../../src/algorithms/various/factoRecursive";

describe("factorial", () => {
    test("factorial of 0 is 1", () => {
        expect(factoRecursive(0)).toBe(1);
    });
    test("factorial of 1 is 1", () => {
        expect(factoRecursive(1)).toBe(1);
    });
    test("factorial of 2 is 2", () => {
        expect(factoRecursive(2)).toBe(2);
    });
    test("factorial of 3 is 6", () => {
        expect(factoRecursive(3)).toBe(6);
    });
    test("factorial of 4 is 24", () => {
        expect(factoRecursive(4)).toBe(24);
    });
});