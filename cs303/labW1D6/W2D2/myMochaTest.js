"use strict";
const assert = require("assert"); 
let textArray;
let lengthFunc;

describe("my map mocha test", function () {
    beforeEach(function () {
         textArray = ["John","Jack","Hi"];
         lengthFunc = element => element.length;  
    });

    it("counts length of each array element", function () {
        assert.strictEqual(myMap(textArray,lengthFunc), [4,4,2]);
        assert.strictEqual(textArray, ["John","Jack","Hi"]);  //original array return;
    });
});