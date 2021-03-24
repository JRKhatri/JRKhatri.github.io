"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Object} constructor function;
 */
function Accumulator(initialValue, increment){
    this.currentValue = initialValue;
    this.increment = increment;

    this.accumulate = function(){
        const increase = this.currentValue + this.increment;
        this.currentValue = increase;
    };
    this.report = function(){
        return this.currentValue;
    };
}

let accumulator = new Accumulator(5,10);



/**
 * @returns {Object} this is a constructor function
 */
 function Calculator(){
    this.value1 =0;
   this.value2 =0;

  this.setValues = function(operand1, operand2){
      this.value1 = operand1;
      this.value2 = operand2;
  };
  this.sum = function(){
      const tot = this.value1 + this.value2;
      return tot;
  };
  this.mul= function(){
      const product = this.value1 * this.value2;
      return product;
  };
}
     