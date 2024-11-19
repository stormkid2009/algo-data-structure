
import {checkPrime} from "../../../src/algorithms/various/primeNum.js";

describe("checkPrime", () => {
    test("checkPrime", () => {
        expect(checkPrime(0)).toEqual(false);
        expect(checkPrime(1)).toEqual(false);
        expect(checkPrime(2)).toEqual(true);
        expect(checkPrime(3)).toEqual(true);
        expect(checkPrime(4)).toEqual(false);
        expect(checkPrime(5)).toEqual(true);
        expect(checkPrime(6)).toEqual(false);
    });
});