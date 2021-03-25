("use strict");

let calc = new Calculator();

/**
 * @returns {Object} this is a constructor function
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




console.log(calc);
calc.setValues(5,10);
console.log(calc);
console.log(calc.sum());
console.log(calc.mul());

  