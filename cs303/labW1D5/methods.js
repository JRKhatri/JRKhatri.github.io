"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests

/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher 
or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
function filterRange(arr, a, b) {
    let filtered =arr.filter(function(item){ return item >=a && item <=b;
  })
  return filtered;
}


/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all 
values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
 
  function filterRangeInPlace(arr, a, b) {
   // [1,5, 3, 8, 1] 2,4
     for(let i =0; i<arr.length; i++){
         if(arr[i] < a || arr[i] > b){
             arr.splice(i,1)
             i--;
         }
     }
     }
    
     /* 
Create a constructor function Calculator that creates “extendable” calculator objects.
The task consists of two parts.  (see https://javascript.info/array-methods)
*/
/*1.First, implement the method calculate(str) that takes a string like "1 + 2" in the 
format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
 2.Then add the method addMethod(name, func) that teaches the calculator a new operation. 
 It takes the operator name and the two-argument function func(a,b) that implements it.
For instance, let’s add the multiplication *, division / and power **:

*/
  function Calculator() {
      this.methods = {
          "+": (a , b) => a + b,
          "-": (a , b) => a - b,
          
      }
      this.calculate = function(str){
          let splitArr = str.split(" ");
           let a = +splitArr[0];
           let operator = splitArr[1];
           let b = +splitArr[2];

          if(!this.methods[operator]|| isNaN(a) || isNaN(b)){
              return NaN;
          }
          return this.methods[operator](a, b)
          
      }
      this.addMethod = function(operatorStr,func){
           this.methods[operatorStr]= func;
      }
    }

  /* Create a function unique(arr) that should return an array with unique items of arr. */

  function unique(arr) {
      let uniqueItems =[];
      for(let item of arr){
          if(!uniqueItems.includes(item)){
              uniqueItems.push(item)
          }
      }
      return uniqueItems;
  }
/*
Let’s say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
see example:  https://javascript.info/array-methods
Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.
*/

  function groupById(array) {
    return array.reduce((newObj, item) => {
        newObj[item.id]=item;
        return newObj;
    }, {})
  }