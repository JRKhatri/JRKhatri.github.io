//"use strict";  
/* eslint-disable */

/**
 * @returns {undefined}
 */
 function sayHi() {
   let lat = 41.00;
   let long = -92.96;
    console.log(this);
  }

  sayHi(); // undefined
  console.log(lat);