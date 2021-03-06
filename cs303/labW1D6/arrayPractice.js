"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
    return arr.map((element) => {let doubleAge ={};
doubleAge["name"]= element["name"]; doubleAge["age"]= 2*element["age"];
return doubleAge;
}
    )
    
}


function filterEven(arr){
   return arr.filter(item => item % 2 === 0)

}

function filterOver10(arr) {
    return arr.filter(element => { return element["age"] > 10;

})
}
function findEvenNum(arr){
    return arr.find(element => element % 2 === 0)

}

function findEvenAge(arr){
    return arr.find(element => element["age"] % 2 === 0)

}

function includesEvenNum(arr){
    return arr.include(66);


}

function includesEvenAge(arr){
    for(let element of arr){
        for(let prop in element){
            arr[element[prop]].includes(66)
        }
    }
}