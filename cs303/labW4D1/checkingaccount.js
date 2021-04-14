"use strict";
/* global Account  */

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class CheckingAccount extends Account{
    constructor(number,overdraft){
        super(number);
        this._overdraftLimit = overdraft;
    }
    getOverdraft(){
        return this._overdraftLimit;
    }

    setOverdraft(amount){
        this._overdraftLimit = amount;
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            if(amount > this._overdraftLimit || this._balance - amount < -this._overdraftLimit)
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        } 
        this._balance -= amount;
    }

    toString(){
       return "CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overdraftLimit;

    }



}

const checking = new CheckingAccount(1, 200);
        //     checking.getNumber();
        //     checking.getOverdraft();
        //     console.log(checking);
        //    console.log(checking.getOverdraft());
        //    checking.setOverdraft(250);
        //     console.log(checking.getOverdraft());
        //     checking.withdraw(200);
        //     console.log(checking.getBalance());
        //     console.log(checking);
        //     console.log(checking.withdraw(51));
        //     checking.toString
        //     console.log(checking)
            














/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.CheckingAccount = CheckingAccount;