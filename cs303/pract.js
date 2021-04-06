
"use.strict"


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


let user = {
  firstName: "John",
  sayHi(){
    console.log(`hello, ${this.firstName}`)
  }
};

// let firstName ="hap"

// function func(phrase) {
//   console.log(this.firstName);
// }
//user.sayHi=()=>{console.log("birthday")}
let sayHi= user.sayHi
//user.sayHi=()=>{console.log("day")}



sayHi();
