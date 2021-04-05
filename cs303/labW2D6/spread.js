"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests



function copyArray(arr){
    const newArr = [...arr];
   return newArr;
   

}

function concat(arr1, arr2){
    let newArr =[...arr1,...arr2];
    return newArr;

}

function findMin(...numbers) {
    let arr = numbers;
  return Math.min(...arr)
  }
  
  
function combineObjs(obj1, obj2){
    let newObj ={ ...obj1, ...obj2};
    return newObj;

}