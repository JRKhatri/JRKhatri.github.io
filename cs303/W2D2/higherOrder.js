
"use strict";
/**
 * 2. Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and 
 * a function as arguments and returns a new array that is formed by applying the function to each element 
 * of the array and saving the result in the new array. Do not use the Array.map method in your code.
 */

function myMap(arr, fun){
    let mapArray=[]
    for(let element of arr){
      mapArray.push(mapFunc(element))
    }
    return mapArray;
}
function mapFunc(elem){
    return elem.length;
}
let arrayA=["hello", "how", "are", "you"];

console.log(myMap(arrayA, mapFunc));



/**
 * 3. Do the same for Array.filter and Array.reduce.
 */

function myFilter(arr, func){
    let filterArray =[];
    for(let element of arr){
        if(filterFunc(element)){
            filterArray.push(element)
        }
        
}
return filterArray;
}

function filterFunc(elem){
    return elem % 2 === 0
}

let arrayNum = [1,3,2,4,6,5,8,7,9,22,33,44];
console.log(myFilter(arrayNum, filterFunc));

function myReduce(arr, func){
    let reduceResult = 0;
    for(let element of arr){
        const prev =0;
         reduceResult += reduceFunc(prev, element)
    }
    return reduceResult;
}

function reduceFunc(prev, elem){
    return prev + elem;

}
let arrayN = [1,3,2,4,6,5,3,-2];
console.log(myReduce(arrayN, reduceFunc));


