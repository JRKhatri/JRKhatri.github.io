("use strict");

/* Create an object calculator with three methods:
    getValues(operand1, operand2) takes two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.
*/

let calc = new Calculator();
/**
 * @return{Object} calulator constructor;
 */
function Calculator(){
    this.a =0;
    this.b =0;

  this.setValues = function(operand1, operand2){
      this.a = operand1;
      this.b = operand2;
  };
  this.sum = function(){
      const tot = this.a + this.b;
      return tot;
  };
  this.mul= function(){
      const product = this.a * this.b;
      return product;
  };
}

calc.setValues(20,30);

console.log(calc);
console.log( calc.sum() ); 
console.log( calc.mul() );

//module.exports = {Calculator};
