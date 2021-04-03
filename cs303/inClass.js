
//("use strict");
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


// let sat = users.reduce(function(item){
//       l
//       obj[item.id]=item;
//       console.log(obj);
      
//     }

// );

// const array123 = [1, 2, 3,4,5,6,7] 



// let result2 = array123.reduce((sum,current) => sum + current,0);



// let sumOf = array123.reduce(function(sum , current){
//   return sum + current;
// }, 0);

// console.log(sumOf);

let team =["Bob", "Jim", "Tim"];
//  const [bob,jim, tim] = team;
//  console.log(jim);

//  const team1 ={point: "Bob", shooting:"Fred",power:"Jim"};
//  const{point, shooting, power} = team1;
//  console.log(point,shooting,power);
// let team1 =["Bob", "Jim", "Tim"];
//  console.log(team1.splice(0,0));
//  console.log(team1);
//  console.log(team1.splice(0,1));
//  console.log(team1);
//  console.log(team1.splice(1,1));
//  console.log(team1);

 

//  let array4 =[1 , 2 , 3 ];
//   let sum = 0;
//   let indexSum = 0;
//  let result = array4.forEach((item, index)=> {
//     sum +=  item;
//     indexSum += index;
//    return sum;
//  });
//  console.log(sum);
//  console.log(indexSum)
//  console.log(result);

//  let array5 =["Morning",5, 10,20,30 ,10, "hello" ];

//  let aaa = array5.find((item)=> item==="hello");
//  console.log(aaa);

//  let arrObject = [
//    {class:301, subject: "Intro to JavaScript"},
//    {class:303, subject:"OO in JavaScript"},
//    {class:201, subject: "Intro to Java"}
//  ];
// let result = arrObject.find((item, index) => {item.class===301; console.log(item.subject);});
// console.log(result);
// let users1 = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"},
//   {id:4, name: "Pete"}
// ];

// let user = users1.map(item => item.id === 1);

// console.log(user);
// console.log(user.id);
// console.log(user[0]);
// console.log(user.length);


// let countries = ['Österreich', 'Andorra', 'Vietnam'];

// console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); 

// console.log( countries.sort( (a, b) => a.localeCompare(b) ) );

// function myMap(arr, fun){
//  let bbb = arr.map(fun);
//  return bbb;
// }
// function someFunc(aaa){
// return aaa.length;
// }
// let arrO =["happy", "birthday","to", "you"];
// console.log(myMap(arrO,someFunc));


//"use strict";
/* eslint-disable */
/* Write code that measures how long it takes to find the maximal subarray for an array that has 10 elements and another 
that has 100 elements using first the O(n) solution and then the O(n**2) solution.
*/

function getMaxSubSumSlow(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}

function makeArray(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
const arr10 = makeArray(10);
const arr100 = makeArray(100);

let start = Date.now(); // milliseconds count from 1 Jan 1970
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now(); // done
console.log( `The loop took ${end - start} ms` ); // subtract numbers, not dates

console.log(Date.now())



let peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, 
{ name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];


function includesEvenAge(arr){
    for(let element of arr){
        for(let prop in element){
            if(prop === "age"){
            console.log(element[prop])
          return arr.includes(element[prop]===15);
        }
    }
       
    }
    
}
console.log(includesEvenAge(peopleArray));
// function doublesAges(arr){
//   return arr.filter((element) => { return element["age"]>10;
// }  
//   )  
// }
//  console.log(doublesAges(peopleArray)); 
//  console.log(peopleArray)

//  let numArray = [5, 0, 7, 77, -20, 300, 51, 2];

//  numArray.includes()

// function countLetters(str, letter){
//     if(str.length ===0){
//         return 0;
//     } else {
//         if(str[0] === letter){
//         return 1 + countLetters(str.substring(1), letter)
//         }
//       return countLetters(str.substring(1),letter);
//     }

// }
// console.log(countLetters("hapapayand", "z"))

// const arr = [1,2,3,4,5];

// function myMap(arr, cbk){
//     let mapArray=[];
//     for(let element of arr){
//       mapArray.push(cbk(element));
//     }
//     return mapArray;
// }
// console.log()

// const dblFun = num => num * 2;
// const squareFun = num => num * num;

// console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));//
// console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));

// function area(){
//     console.log(this);
//     return this.side * this.side;
// }
// const square1 ={side:5, area:area};
// console.log(square1.area());

let list = {value: 1, next: {value: 2, next: {value: 3,next: {value: 4, next:  { value: 5, next: null}}}}};

// function outputList(list){
//     if(list === null){
//         return;
//     } 
//     if(list.next === null){
//       return list.value + " printed to console";
//     } else {
      
//       return list.value+" "+outputList(list.next);
      
      
//     }
         
         
//        }
    
// console.log(outputList(list));



/*recursive version prints 4 3 2 1 to console", reverseList(list), "4 3 2 1 printed to console");*/

// function reverseList(list){
//   if(list === null){
//             return;
//         } 
//         if(list.value === 1){
//             return reverseList(list.next) +" " + list.value +" printed to console" ;
            
//         }
//         if(list.next !== null){
          
//           return reverseList(list.next) +" "+ list.value;
//         } else {
          
//           return list.value;
//         }
//       }
// console.log(reverseList(list));



// function outputListLoop(list){
//   let objNext = list["next"];
//   let objValue= list["value"];
//   let concatValue="";
//   while(objNext !== null){
//     concatValue += objValue + " ";
//       objValue= objNext["value"];
//       objNext= objNext["next"]; 
//   }
//   return concatValue + objValue +" printed to console";
//       }
                

// console.log(outputListLoop(list));

/* prints 4 3 2 1 to console" reverseListLoop(list), "4 3 2 1 printed to console");
  */
// function reverseListLoop(list){
//     let nodeNext = list["next"];
//     let nodeValue = list["value"];
//     let reverseStr="";
//     while(nodeNext !== null){
//        reverseStr = " " + nodeValue + reverseStr ;
//         nodeValue= nodeNext["value"]
//         nodeNext= nodeNext["next"] 
//     }
//  return nodeValue + reverseStr + " printed to console";
//         }

//     console.log(reverseListLoop(list));




// node1 = {value:50, next: null};
// head = {value: 10, next: node1};
// head={value :5, next: head}
// console.log(head);



// let indArray = ["hello", "hi","my","go"]

// function myFindIndex(arr, callback){
//     for(let i =0; i<arr.length; i++){
//         if(callback(arr[i])){
//             return i;
//         }
//     }

// }

// company["sales"][1]["name"];
// company["sales"][1]["salary"];
// let second =company.development.sites[2];
// second["name"]; second["salary"]



// function log() { console.log("No Arguments");
// }
// function log(x) {
// console.log("1 Argument: " + x); }
// function log(x, y) {
// console.log("2 Arguments: " + x + ", " + y);
// }
// log(); log(5); log(6, 7);

// let a, b, c, d, e;
// a = {a:1, b:2, c:3, d: 44}
// b = {...a }
// console.log(b) // {a:1, b:2, c:3, d: 44}
// b.a = 100;
// console.log(a) // {a:1, b:2, c:3, d: 44}
// console.log(b);

// function makeWorker()

// { let name = "Pete";

//     return function() { console.log(name); };

// }

// let name = "John";

// // create a function

// let work = makeWorker();

// // call it

// work(); // what will it show?
// let filter1To7 = inArray(arr);
       // assert.strictEqual(filter1To7(5), true);
let arr = [1, 2, 3, 4, 5, 6, 7];
        

// function inArray(arr){
//     return function(target){
//       return  arr.includes(target )
//     }

// }
// let filter1To7 = inArray(arr);

// console.log(filter1To7(6));

let users1 = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

//   it("sorts users by name", function(){
//     let nameSortedKey = [
//       { name: "Ann", age: 19, surname: "Hathaway" },
//       { name: "John", age: 20, surname: "Johnson"},
//       { name: "Pete", age: 18, surname: "Peterson" },
//     ];
   // let nameSortedAnswer = users.sort(byField("name"));
   // assert.deepEqual( nameSortedAnswer, nameSortedKey);
  //});
        
//   function byField(fieldName){
//     return function(a,b){
//         return a[fieldName]> b[fieldName]? 1:-1;
//     }
// }

// let nameSortedAnswer = users1.sort(byField("name"));
// console.log(nameSortedAnswer);

// let arr1=["hari","aapp","mohan","baba"];
// console.log(arr1.sort());

let army = makeArmy();
      
    
      it("army[0] shows 0", function() {
        const shooter0 = army[0]();
        assert.strictEqual(shooter0, 0);
      });
    
    
      it("army[5] shows 5", function() {
        const shooter5 = army[5]();
        assert.strictEqual(shooter5, 5);
      });