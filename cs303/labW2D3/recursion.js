("use strict");

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests


/*• Sum all numbers till the given one */
function sumTo(num){
    if(num === 0){
        return 0
    } else {
        return num + sumTo(num -1);
    }

}




/*Calculate factorial*/

function factorial(num){
    if(num < 0){
        return num;
    }
    if(num === 0){
        return 0;
    }
    if(num === 1){
        return 1;
    } else {
        return num * factorial(num -1);
    }
}



/*• Fibonacci numbers (the dynamic programming solution is optional)*/

function fibonacci(num){
    if(num === 0){
        return 0;
    }
    if(num ===1){
        return 1;
    } else {
        return  fibonacci(num-1) + fibonacci(num -2);
    }
}

/*recursive version prints 1 2 3 4 to console",outputList(list), "1 2 3 4 printed to console");*/

function outputList(list){
    if(list === null){
        return NaN;
    } 
    if(list["next"]=== null){
        
        return console.log(list["value"]);
    } else {
        
        return console.log(list["value"]) + outputList(list["next"]);
    }
    
    }

    // let list = {
    //     value: 1,
    //     next: {
    //       value: 2,
    //       next: {
    //         value: 3,
    //         next: {
    //           value: 4,
    //           next: null
    //         }
    //       }
    //     }
    //   };

//    console.log(outputList(list));

/*"iterative version prints 1 2 3 4 to console" - outputListLoop(list), "1 2 3 4 printed to console");*/

function outputListLoop(list){
    let x = list["next"];
    let y = list["value"];
    while(x !== null){
        console.log(y);
        y= x["value"];
        x= x["next"];
        
    }
    console.log(y);
        }


/*recursive version prints 4 3 2 1 to console", reverseList(list), "4 3 2 1 printed to console");*/
    function reverseList(list){
        if(list === null){
            return;
        }
        if(list["next"] === null){
             console.log((list["value"]));
        } else{
            reverseList(list["next"]) + console.log(list["value"])
        }
    }
  //  reverseList(list);