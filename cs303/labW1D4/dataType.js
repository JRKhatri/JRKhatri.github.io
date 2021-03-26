"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, truncate , camelize}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
    let firstChar = str.charAt(0);
return firstChar.toUpperCase() + str.substr(1);
  }

  function checkSpam(str) {
    let spamText = str.toLowerCase();
    return (spamText.includes("viagra")||spamText.includes("xxxx"));
 
  }


  function truncate(str, maxlength) {
    if(str.length <= maxlength){
      return str;
    } else {
    let maxStr = str.substr(0,maxlength-1);
    return maxStr.concat("…");

  }
}
function extractCurrencyValue(str){
  return +str.substr(1);
}




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) {                       // for each item of arr
      partialSum += item;                        // add it to partialSum
      maxSum = Math.max(maxSum, partialSum);    // remember the maximum
      if (partialSum < 0) partialSum = 0;       // zero if negative
    }
  
    return maxSum;
  }


function camelize(str) {
  //-webkittransition
  let word=str;
  let pos = -1;
  while((pos= word.indexOf("-",pos +1))!= -1){
    if(pos===0){
    let uper = word.charAt(pos+1);
    word =  uper.toUpperCase() + word.substr(2);
    } else{
      let uper =word.charAt(pos+1);
      let  preWord = word.substr(0,pos);
      let postWord = word.substr(pos+2,word.length-1)
      
      word = preWord+ uper.toUpperCase()+postWord ;

    }
    
  }
  return word;
}
  


console.log(camelize("-webkit-he-llo-Mydear-"))