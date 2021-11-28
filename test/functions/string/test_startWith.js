import { assert } from "chai";
import { myStartWith } from "../../../main/functions/string/startWith.js";

describe("*** test startWith function ***",() => {

    it("should return true",() => {
        let myString = "Et demain matin, j'te fais des gaufres au sucre !!";
        assert.deepEqual(myStartWith(myString,"Et demain"),true)
    });

    it("should return false",() => {
        let myString = "Les ogres c'est comme les oignons.";
        assert.deepEqual(myStartWith(myString,"Ça schlingue ?"),false)
    });

});