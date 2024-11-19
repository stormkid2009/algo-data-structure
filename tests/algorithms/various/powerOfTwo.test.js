
import { powerOfTwo } from "../../../src/algorithms/various/powerOfTwo.js";

describe("powerOfTwo", () => {
    test("powerOfTwo", () => {
        expect(powerOfTwo(0)).toEqual(false);
        expect(powerOfTwo(1)).toEqual(true);
        expect(powerOfTwo(2)).toEqual(true);
        expect(powerOfTwo(3)).toEqual(false);
        expect(powerOfTwo(4)).toEqual(true);
        expect(powerOfTwo(5)).toEqual(false);
        expect(powerOfTwo(6)).toEqual(false);
    });
});