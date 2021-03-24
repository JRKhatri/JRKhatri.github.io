("use strict");

/* Create an object calculator with three methods:
    getValues(operand1, operand2) takes two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.
*/

let calc = new Calculator();

calc.setValues(20,30);

function Calculator(){
    value1 =0;
    value2 =0;

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
};


console.log(calc);
console.log( "expect 15 : ", calc.sum() ); 
console.log("expect 50 : ", calc.mul() );

module.exports = {Calculator};
