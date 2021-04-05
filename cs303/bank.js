"use strict";
/*create the object named bank with the following methods:
1.debit(id, amount), deduct amount from customer transaction list, but only if the amount is less than the current balance.
2. credit(id, amount), adds positive amount to customer transcation list.
3. getBalance(id), returns current balance of that customer. Tthe balance should be computed as the cum of all recorded transcation amounts.
4. saveTransaction(id, amount) save this transcation amount to the customreTransactions list for this customer 
getBankBalance : returns sum of all customer balances

the bank objest should have transactionsDB property, which will be an array of objects containint all the customer objects. Coustomer objects will have properties customerId  and suctomerTransactions,*/

const bank = { transactionDB: []
};
bank.transactionDB =[
{customerId: 1, customerTransaction:[10,50,-40]},
{customerId: 2, customerTransaction:[10,10,-10]},
{customerId: 3, customerTransaction:[5,-5,55]}
];

bank.findCustomer = function(bankId){
    return bank.transactionDB.find(item => item.customerId===bankId);
};
//console.log(bank.findCustomer(3));

bank.getBalance = function(bankId){
    let customer = this.findCustomer(bankId);
    let customerBalance = customer.customerTransaction.reduce((sumBalance, trans) => sumBalance + trans);
    return customerBalance;
};
//console.log(bank.getBalance(3));

bank.debit = function(bankId, amount){
    const debitAmount = -  amount;
    const customer= this.findCustomer(bankId);
    const currentBalance = this.getBalance(bankId);
    const transaction = customer.customerTransaction;
   
    if(amount > currentBalance){
        return ("Amount is less than current balance");
    } else {
        transaction.push(debitAmount);
    }

};
// console.log(bank.debit(1,10));
// console.log(bank.findCustomer(1));
// console.log(bank.getBalance(1));

bank.credit = function (bankId, amount){
    const customer= this.findCustomer(bankId);
    if(amount < 0){
        return console.log(`Invalid amount: ${amount}, enter correct amount.`);
    }else{
    customer.customerTransaction.push(amount);
    } 
};
// console.log(bank.getBalance(1));
// bank.credit(1, -200);
// console.log(bank.findCustomer(1));
// console.log(bank.getBalance(1));

bank.saveTransaction = function(bankId, amount){
    const customer = this.findCustomer(bankId);
    customer.customerTransaction.push(amount);
};
//  bank.saveTransaction(3, 30);
//  console.log(bank.findCustomer(3));



bank.getBankBalance = function(){
    const customerArr = bank.transactionDB;
    let sum =0;
    for(let prop of customerArr){
        let propId = prop.customerId;
        sum +=this.getBalance(propId);

    }
    return sum;
};
console.log(bank.getBankBalance());

/**2. Recall the bank question from the first exam. The transactionsDB is publicly 
 * accessible to any code that has access to the bank object. 
 * Write a makeBank function that will encapsulate and return the bank object.
 *  Make the transactionsDB private by making it a local variable in the makeBank 
 * function instead of a property on the bank object.
const bank = { transactionsDB: [],}; 
bank.transactionsDB = [
{ customerId: 1, customerTransactions: [10, 50, -40] }, 
{ customerId: 2, customerTransactions: [10, 10, -10] },
 { customerId: 3, customerTransactions: [5, -5, 55] }];

bank.getBalance = function (id) {
const customer = bank.transactionsDB.find(customer => customer.customerId === id); let balance = 0;
for (const trans of customer.customerTransactions) { balance += trans; }
return balance; };
@returns {number} returns sum of all balances */ bank.bankBalance = function () { //IMPLEMENT THIS */

    function makeBank() {
        const transactionsDB = [
            { customerId: 1, customerTransactions: [10, 50, -40] },
            { customerId: 2, customerTransactions: [10, 10, -10] }];
        const bank = {};
        bank.debit = function (id, amount) {
        bank.credit = function (id, amount) {
        return bank;
    }
    const bank = makeBank();