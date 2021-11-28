import {assert} from "chai";
import { padSpace,myPadRight } from "../../../../main/functions/string/Pad/padRight.js";

describe("*** test padRight function ***",() => {

    it("should return 45",() => {
        assert.deepEqual(myPadRight(" ", "45", 8),"45      ")
    });

    it("should return 11011   ",() => {
        assert.deepEqual(padSpace("11011", 8),"11011   ")
    });

});