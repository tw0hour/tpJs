import {assert} from "chai";
import { padZeros,myPadLeft } from "../../../../main/functions/string/Pad/padLeft.js";

describe("*** test padLeft function ***",() => {

    it("should return 000123",() => {
        assert.deepEqual(myPadLeft("0", "123", 6),"000123")
    });

    it("should return 00011011",() => {
        assert.deepEqual(padZeros("11011", 8),"00011011")
    });

});