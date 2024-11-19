
import { factorial } from "../../../src/algorithms/various/factorial";

describe("factorial", () => {
    test("factorial of 0 is 1", () => {
        expect(factorial(0)).toBe(1);
    });

    test("factorial of 1 is 1", () => {
        expect(factorial(1)).toBe(1);
    });

    test("factorial of 2 is 2", () => {
        expect(factorial(2)).toBe(2);
    });

    test("factorial of 3 is 6", () => {
        expect(factorial(3)).toBe(6);
    }); 
    test("factorial of 4 is 24", () => {
        expect(factorial(4)).toBe(24);
    });
});