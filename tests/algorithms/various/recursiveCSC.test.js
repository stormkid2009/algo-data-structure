
import { recursiveCSC } from "../../../src/algorithms/various/recursiveCSC";

describe("recursiveCSC", () => {
    test("recursiveCSC", () => {
        expect(recursiveCSC(0)).toEqual(0);
        expect(recursiveCSC(1)).toEqual(1);
        expect(recursiveCSC(2)).toEqual(2);
        expect(recursiveCSC(3)).toEqual(3);
        expect(recursiveCSC(4)).toEqual(5);
        expect(recursiveCSC(5)).toEqual(8);
        expect(recursiveCSC(6)).toEqual(13);
    });
});