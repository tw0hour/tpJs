import { assert } from "chai";
import { mySplit } from "../../../main/functions/string/split.js";

describe("*** test mySplit function ***",() => {

    it("should split first exemple",() => {
        let myString = "Bonjour, je m'appelle Jean !";
        assert.deepEqual(mySplit(myString," "),["Bonjour,", "je", "m'appelle", "Jean", "!"])
    });

    it("should split second exemple",() => {
        let myString = "I'm reading a wooden book.";
        assert.deepEqual(mySplit(myString,"oo"),["I'm reading a w", "den b", "k."])
    });

});