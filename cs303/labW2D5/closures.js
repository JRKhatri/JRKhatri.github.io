"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
 function inArray(arr){
    return function(target){
      return  arr.includes(target);
    };

}
/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
    return function(element){
        return element > low && element< high;
    };


}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){
        
    return function(ele1, ele2){
        return ele1[fieldName]> ele2[fieldName]? 1:-1;
    };
        }



/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {

  }

  let army = makeArmy();
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...