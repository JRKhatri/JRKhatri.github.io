"use strict"

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
let calc = new Calculator();
  