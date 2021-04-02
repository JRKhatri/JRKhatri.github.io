("use strict");

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests


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
        return;
    } 
    if(list.next === null){
      return list.value + " printed to console";
    } else {
      
      return list.value+" "+outputList(list.next);
      
      
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
    let objNext = list["next"];
    let objValue= list["value"];
    let concatValue="";
    while(objNext !== null){
      concatValue += objValue + " ";
        objValue= objNext["value"];
        objNext= objNext["next"]; 
    }
    return concatValue + objValue +" printed to console";
        }
                  
  
  console.log(outputListLoop(list));


/*recursive version prints 4 3 2 1 to console", reverseList(list), "4 3 2 1 printed to console");*/
    function reverseList(list){
        if(list === null){
            return;
        } 
        if(list.value === 1){
            return reverseList(list.next) +" " + list.value +" printed to console" ;
            
        }
        if(list.next !== null){
          
          return reverseList(list.next) +" "+ list.value;
        } else {
          
          return list.value;
        }
    }
  //  reverseList(list);


  /*loop version prints 4 3 2 1 to console",reverseListLoop(list), "4 3 2 1 printed to console");*/

  function reverseListLoop(list){
    let nodeNext = list["next"];
    let nodeValue = list["value"];
    let reverseStr="";
    while(nodeNext !== null){
       reverseStr = " " + nodeValue + reverseStr ;
        nodeValue= nodeNext["value"]
        nodeNext= nodeNext["next"] 
    }
 return nodeValue + reverseStr + " printed to console";
        }

    console.log(reverseListLoop(list));