import { assert } from "chai";
import { myContains } from "../../../main/functions/string/contains.js";

describe("test contains functions",()=>{

    it("should return 13",()=>{
        let myString = "Salut tu est qui ?";
        assert.deepEqual(myContains(myString,"qui",5),13);

    });

    it("should return -1",()=>{
        let myString = "une petite phrase";
        assert.deepEqual(myContains(myString,"non",2),-1);
    });
});