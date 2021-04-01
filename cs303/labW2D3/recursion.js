("use strict");
/*• Sum all numbers till the given one */
function sumTo(num){
    if(num === 0){
        return 0
    } else {
        return num + sumTo(num -1);
    }

}

console.log(allSum(0));


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

console.log(calcFactorial(5));
console.log(calcFactorial(1));
console.log(calcFactorial(0));
console.log(calcFactorial(-1));

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

console.log(fibonacciNum(5));
console.log(fibonacciNum(0));
console.log(fibonacciNum(6));
console.log(fibonacciNum(8));

function travelNode(node, prop){
    if(node === null){
        return;
    }
    if(node[prop] === null){
        return;
    } else {
        for(let i = 0; i<node[prop].length; i++){
            console.log(node["name"]);
            return travelNode(node[prop][i],prop);
        }
    }
}