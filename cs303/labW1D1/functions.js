"use strict";
/**
 1. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
 */
/**
 * 
 * @param {number} aaa is a number
 * @param {number} bbb is a number 
 * @param {number} ccc is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(aaa, bbb, ccc){ 
    if(aaa > bbb && bbb > ccc){
        return aaa;
    }else if (bbb > aaa && bbb > ccc ){
        return bbb;
    } else {
    return ccc;
    }
}



/*2. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the
 numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) 
 should return 24.
*/
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for(let num of arr){
        tot +=num;
    }
    return tot;
}
console.log(sum([1,2,3]));

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} product of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for(let num of arr){
        tot *= num;
    }
    return tot;

}
console.log(multiply([3,2,10]));



/* 3 Write a function findLongestWord() that takes an array of words and returns the length of the 
longest one.
*/
/**
 * 
 * @param {Object} arr Array containing words for finding longest length of words;
 * @returns {number} length of the longest word.
 */
function findLongestWord(arr){
    let longest =0;
    let longWord ="";
    for(let ele of arr){
     let word = String(ele);
     let length = word.length;
     if(length > longest){
         longest = length;
         longWord = word;
     }
     
    }
    return longWord;
}

console.log(findLongestWord(["apple", "banana","pineapple is very good", "guava"]));


/*4. Reverse an Array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as
 argument by reversing its elements. Neither may use the standard reverse method.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/
/**
 * 
 * @param {Object} arr Elements for reverse
 * @returns {Object} Array with reverse elements
 */
function reverseArray(arr){
    let newArray=[];
    let j = 0;
    for(let i = arr.length-1; i>=0; i--){
        newArray[j]= arr[i];
        j++;
    }
    return newArray;
}

console.log(reverseArray(["A", "B", "C"]));





let arrayValue = [1, 2, 3, 4, 5];
/**
 * 
 * @param {Object} arr Elements for reverse
 * @returns {Object} Array with reverse elements
 */
function reverseArrayInPlace(arr){
    let newArray=[];
    let j = 0;
    for(let i = arr.length-1; i>=0; i--){
        newArray[j]= arr[i];
        j++;
    }
    return newArray;
}

console.log(reverseArrayInPlace(arrayValue));





/*
5. Write a function, scoreExams, that takes an array of arrays of student answers and an array of the 
correct answers. It should compare each student’s answers against the correct answers and return an 
array holding the scores of each student. The score for each student is a count of the number of correct 
answers (i.e., matches with the key of correct answers). For example
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2]; 
scoreExams(studentAnswers, correctAnswers)); --> [2, 2, 2]
*/
/**
 * 
 * @param {Object} studentAns First Array containing array to check
 * @param {Object} correctAns Second Array with correct elements
 * @returns {Object} Array having correct numbers matching elements;
 */
function scoreExams(studentAns, correctAns){
    let score = [];
    for(let i = 0; i< studentAns.length; i++){
        let count =0;
        for (let j =0; j< studentAns[i].length; j++){
        if(studentAns[i][j]=== correctAns[j]){
            count++;
        }
        
        }
        score.push(count);
        
    }
    return score;

}
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2]; 
console.log(scoreExams(studentAnswers, correctAnswers));// [2, 2, 2]

