"use strict"

/**
 * 

 * @returns {Accumulator} constructor function
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
accumulator.accumulate();
accumulator.accumulate();
console.log(accumulator.report());
accumulator = new Accumulator(5,10);
console.log(accumulator.report());
