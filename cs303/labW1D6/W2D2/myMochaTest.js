"use strict";
const assert = require("assert"); 
let textArray;
describe("my map mocha test", function () {
    beforeEach(function () {
         textArray = ["John","Jack","Hi"];
    });

    it("counts length of each array element", function () {
        assert.deepEqual(myMap(textArray,function(elem){return elem.length;}), [4,4,2]);
        assert.strictEqual(textArray, ["John","Jack","Hi"]);  //original array return;
    });
});