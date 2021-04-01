"use strict";

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  };
  const Intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHi() {
      return `Hello, my name is ${this.name}. I am ${this.age}. My job is ${this.job}.`;

     //IMPLEMENT THIS
  }
  
  // add sayHi function to both objects
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  console.log(Manager.sayHi()); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  console.log(Intern.sayHi()); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'