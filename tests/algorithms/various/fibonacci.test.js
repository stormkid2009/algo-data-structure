
import { fibonacci } from "../../../src/algorithms/various/fibonacci";

describe("fibonacci", () => {
    test("fibonacci of -1 is []", () => {
        expect(fibonacci(-1)).toStrictEqual([]);
    })
    test("fibonacci of 0 is 0", () => {
        expect(fibonacci(0)).toBe(0);
    }); 
    test("fibonacci of 1 is [0,1]", () => {
        expect(fibonacci(1)).toStrictEqual([0,1]);
    });
    test("fibonacci of 2 is [0,1,1]", () => {
        expect(fibonacci(2)).toStrictEqual([0,1,1]);
    });
    test("fibonacci of 3 is [0,1,1,2]", () => {
        expect(fibonacci(3)).toStrictEqual([0,1,1,2]);
    });
    test("fibonacci of 4 is [0,1,1,2,3]", () => {
        expect(fibonacci(4)).toStrictEqual([0,1,1,2,3]);
    });
    test("fibonacci of 5 is [0,1,1,2,3,5]", () => {
        expect(fibonacci(5)).toStrictEqual([0,1,1,2,3,5]);
    });
})