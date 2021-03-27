
("use strict");
/*
Create 3 objects, student1, student2, student3
 property studentId :  s101, s102, s103 respectively
property quiz answers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
push the students into an array, quiz
 write a function, gradeQuiz, that takes the quiz array and an array of correct answers,
  e.g., [3,1,2,4] and returns an object that has properties with the names of each studentId 
  and the value of the property will be their score on the quiz (one point for each correct answer)
 expect   { s101: 3, s102: 2, s103: 3 }
*/

// const student1 = {studentId : "s101", quizAns:[1,1,2,4]}
// const student2 = {studentId : "s102", quizAns: [1,2,3,1]}
// const student3 = {studentId : "s103", quizAns:[2,1,3,4]}
// const answer =[3,1,2,4];

// let quiz =[];
// quiz.push(student1);
// quiz.push(student2);
// quiz.push(student3);

// function gradeQuiz(studentArray, ansArray){
//     let grade ={};
//     for(let element of studentArray){
//      const score = check(element.quizAns, ansArray);
//      grade[element.studentId]= score;
//     }
//     return grade;
//         }

//  function check(studentAns, correctAns){
//      let count = 0;
//      for(let i = 0; i< studentAns.length; i++){
//          if(studentAns[i]=== correctAns[i]){
//              count++;
//          }
//      }
//      return count;
//  }
   
//  console.log(gradeQuiz(quiz,answer));




// Write a function, averageScore, that takes the grade report object and returns the average score of 
// all the students. Your function should work for any number of students, but if you are not sure how to
// do that at least make it work for the given 3 students. Hint: to handle any number remember 
// the for .. in slide. 

// const gradeReport = { s101: 3, s102: 2, s103: 3}; 
// function averageScore(obj){
//     let count = 0;
//     let sum =0;
//     for(let score in obj){
//         sum += obj[score]
//         count++;
//     }
//     const average = sum /count;
//     return average;
// }

// //console.log(averageScore(gradeReport));
// //let name = "HARY"
// let user = { name: "John",
//  age: 30,
//   sayHi() {
//     // "this" is the "current object"
//     return (this.name); }
//     };
//    console.log(user.sayHi()); // John


   

//    let calculator ={
//        value1:0,
//        value2:0,
   
//        getValues: function(operand1, operand2){
//            this.value1 = operand1;
//            this.value2 = operand2;
//        },
//        sum :function(){
//            const tot = this.value1 +this.value2;
//            return tot;
//        },
//        mult : function(){
//            const product = this.value1 * this.value2;
//            return product;
//        }
//    };
// calculator.getValues(5,10);


//use forEach method to log all even elements

//Exercise
const numbers =[1,5,18,2,77,108];
// use fileter, find  and findIndex to find alll the even numbers 
// the first even numbers
// the index of first even numbber

// let name = "Jyoti";
// console.log(name.substr(0)); //Jyoti
// console.log(name.substr(1));  //yoti
// console.log(name.substr(1,3)); //yot
// console.log(name.substr(3,1)); // t
// console.log(name); //Jyoti
// let x = "120&$$$$";
// console.log(parseInt(x));

// console.log(+"113"===Number("123"));

// let lengths =["name", "address","country"].filter(
//     function(element, index ,arr){
//         const newItem = ""+index + ":" + element.length + "array is :" + arr;
//         return newItem;
//     }
// )

// console.log(lengths);

// let arr =[1,2,3,4,5];
// let result = arr.reduce(function(preValue, item){
//     return preValue + item;
// }, 0); 
// // or result2 = arr.reduce((sum,current) => sum + current,0);

// let resultMax = arr.reduce(function(preValue, item){return Math.max(preValue, item);},0);
// console.log(resultMax);


//console.log(isNaN("a"));

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
//console.log(users[1]);
//   assert.deepEqual(groupById(users), {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
//   });


let sat = users.reduce(function(item){
      l
      obj[item.id]=item;
      console.log(obj);
      
    }

);
