
import { climbStairCase } from "../../../src/algorithms/various/climbStairCase";

describe("climbStairCase", () => {
    test("climbStairCase", () => {
        expect(climbStairCase(0)).toEqual(0);
        expect(climbStairCase(1)).toEqual(1);
        expect(climbStairCase(2)).toEqual(2);
        expect(climbStairCase(3)).toEqual(3);
        expect(climbStairCase(4)).toEqual(5);
        expect(climbStairCase(5)).toEqual(8);
        expect(climbStairCase(6)).toEqual(13);
    });
});