
//"use.strict"


// function area(){
//     console.log(this);
//     return this.side * this.side;
//   }
//   const square1 ={side:5,area:area}
//   console.log(area())
  
/** */
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// setTimeout(user.sayHi, 1000);
// setTimeout(() => user.sayHi(), 3000);

// setTimeout(function(){user.sayHi();},1000)

/** */
// let user = {
//   firstName: "John",
//   sayHi(){
//     console.log(`hello, ${this.firstName}`)
//   }
// };

// let firstName ="hap"

// function func(phrase) {
//   console.log(this.firstName);
// }
//user.sayHi=()=>{console.log("birthday")}
//let sayHi= user.sayHi
//user.sayHi=()=>{console.log("day")}

//sayHi();
/** */
//let today = new Date(2021, 3, 6, 1, 2, 3);
// console.log(new Date(-24*3600*1000))
// console.log(new Date(0));
// console.log(today);

// console.log(today.getTime())
// console.log(new Date(today.getTime()))
// const moonLanding = new Date('July 20, 20 00:20:18');

// console.log(moonLanding.getFullYear());
/** */
// "use strict";
// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// sayHi(); 
/** */
// let john = { name: "John", surname: "Smith", age: 10 }; 
// let pete = { name: "Pete", surname: "Hunt", age: 20 }; 
// let people = [ john, pete]; 

// let newO = people.map((item, index)=>{
//     let newObj ={
//         fullName: item.name,
//         id: index +1
//     };
//     return newObj;

// })
// console.log(newO)

/** */
//Use the map function to map the people array to the following: 
// [{ fullName: "John Smith", id: 1 }, 
// { fullName: "Pete Hunt", id: 2 }] 

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//      showList() {
//     this.students.forEach((student)=> { console.log(this.title + ': ' + student)
//     });
//     this.students.forEach(function(student) { console.log(this.title + ': ' + student)
// }.bind(group)) } // or instead of group we can use group.
//     };
//      group.showList();

/** */
// let now = new Date();
// console.log(now);
// now.setSeconds(now.getSeconds()+70);
// console.log(now);
// "use strict";
// let arr ="hello";
// //let str = (...arr);
// console.log({...arr});
//"use strict"

  // function printNumbers(from, to){
  //  let timer = setInterval(()=> {console.log(from);
  //   if(from === to){
  //     clearInterval(timer)
  //   };from++},1000)
  // }
  //    printNumbers(1,10);

  // function printNum(from, to){
  //   setTimeout(function run(){
  //     console.log(from);
  //     if(from < to){
  //       setTimeout(run,1000);
  //     }
  //     from++;
  //   },1000)
  // }
  // printNum(5,10)

  // function fast(from, to){
  //   let current = from;
  //   function go(){
  //     console.log(current);
  //     if(current === to){
  //       clearInterval(timer)
  //     }
  //     current++;
  //   }
  //   go();
  //   let timer = setInterval(go,1000)
  // }
  // fast(11, 15);

//   let node3 = {
//     name: "p",
//     value: "This is text in the a paragraph",
//     children: null
// };
// let node4 = {
//     name: "label",
//     value: "Name",
//     children: null
// };
// let node5 = {
//     name: "input",
//     value: "this was typed by a user",
//     children: null
// };
// let node2 = {
//     name: "div",
//     value: null,
//     children: [node4, node5]
// };
// let node1 = {
//     name: "body",
//     children: [node2, node3],
//     value: null,
// };

// function child(node){    
//     if (node.children === null) return;
//     for(let ch of node.children){
//         console.log(ch);
//         child(ch);
//     }
// }
// child(node1);
// const arr = [1, 2, 3];
// function myReduce(arr, callback, initialValue) {   
//   if(initialValue === undefined) initialValue = 0;
  
//   let result = initialValue;
//   for (let item of arr) {
//       result = callback(result, item);
//   }
//   return result;
// }

// const sum = (acc, val) => acc + val;

// console.log("expect: 6: ", arr.reduce(sum, 0));
// console.log("expect: 6: ", myReduce(arr, sum, 0));
// console.log("expect: 6: ", myReduce(arr, sum));

// ["h","l","m"].forEach(function(item,index,array){})

"use strict";
// function perimeter(){ 
//   console.log(this);
//    return 4 * this.side;
//   }

// const shape = {side: 5, perimeter: perimeter};
// console.log(shape.perimeter());

// const abc = {a:1, b:2, add: function() { console.log("1+2 = 3?",this.a + this.b); }} 
// abc.add(); //works
// //setTimeout(abc.add, 2000); //problem!
// setTimeout(abc.add.bind(abc), 2000); //works
// setTimeout(function() {abc.add.call(abc)}, 2000); //works 
// setTimeout(function() {abc.add.apply(abc)}, 2000); //works

// let user = { firstName: "John", sayHi() {
//   console.log(`Hello, ${this.firstName}!`); }
//   };
//   setTimeout(user.sayHi, 1000); // Hello, undefined!
//"use strict"

// function Accumulator(initialValue, increment){
//   this.currentValue = initialValue;
//   this.increment = increment;
//   this.accumulate= function(){
//   const accumulateValue = this.currentValue + this.increment;
//   this.currentValue = accumulateValue;
//   }
// }
// let acc = new Accumulator(5,10);
// console.log(acc);
// acc.accumulate();
// acc.accumulate();
// console.log(acc.currentValue);
// console.log(acc.increment)

// const bicycle = {
//   gear :1,
//   speed :0,
//   applyBrake: function(decrement){
//       this.speed -= decrement;
//   },
//   speedUp: function(increment){
//       this.speed += increment;
//   }
// }

// const mountainBike = {
//   gear : 3,
//   speed : 2,
//   seatHeight: 2,
//   adjustSeatHt :function(newHeight){
//     this.seatHeight = newHeight;

//   }
// };
// mountainBike.__proto__=bicycle;

// console.log(mountainBike);
// mountainBike.speedUp(100);
// mountainBike.applyBrake(10);
// console.log("92:" + mountainBike.speed);
// console.log("3:" + mountainBike.gear);


// function makeCounter(){
  
// let count =0;
// return function(increment){
//   if(increment === undefined){
//     count =count +1;
//   } else{
//     count = count+ increment;
//   }
//   if(increment >3){
//     return "warning"
//   } else {
//     count++;
//   }
// }
// }

const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];

quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
 function answerComparator(ans1, ans2) {
  return ans1.qid > ans2.qid ? 1 : -1;
//IMPLEMENT THIS
}


/**
* 
* @param {*} sid student id
* @returns {number} score for student
* find this student
* sort the student answers
* compare them against key and add up matches
*/
// quiz.scoreStudent = function (sid) {
// //IMPLEMENT THIS
// let student = this.students.find(item => item.sid === sid);
// let studentAns = student.answers;

// studentAns.sort(answerComparator);

// let score = 0;
// let index=0;

// for(let element of studentAns){
  
//   if(element.ans === this.key[index].ans){
    
//       score++;
//   }
//   index++;
// }
// return score;
// };
"use strict";

// class Name {
//   constructor(name){
//     this.name = name;
//   }
//   sayHi(){console.log("HI")}
// };


// let per = new Name("Jyoti");
// console.log(per);
// console.log(Object.getOwnPropertyNames(per))

// class Counter{
//   constructor(){
//   this._count = 0;
//   }
//   up() {
//     this._count+= 1;
//   return this._count;
//   }
//   down() {
//     this._count -=1;
//   return this._count;
//   }
//   }

//   let counter = new Counter();

// console.log( counter.up() ); 
// console.log( counter.up() ); 
// console.log( counter.down() ); 

let animal ={
  eats : true
}

let  snoopy ={
  name: "Snoopy",
};

console.log(snoopy.__proto__);
//console.log(animal.__proto__);