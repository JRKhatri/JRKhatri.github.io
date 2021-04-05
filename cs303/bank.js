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

bank.findcustomerId = function(bankId){
    return bank.transactionDB.find(item => item.customerId===bankId);
};
console.log(bank.findcustomerId(3));

bank.getBalance = function(bankId){
    let customer = bank.findcustomerId(bankId);
    let customerBalance = customer.customerTransaction.reduce((sumBalance, trans) => sumBalance + trans);
    return customerBalance;
};
console.log(bank.getBalance(3));

bank.debit = function(bankId, amount){
    const debitAmount = -  amount;
    const customer= bank.findcustomerId(bankId);
    const currentBalance = bank.getBalance(bankId);
    const transaction =customer.customerTransaction;

    if(amount > currentBalance){
        return ("Amount is less than current balance");
    } else {
        transaction.push(debitAmount);
    }

};
console.log(bank.debit(1,10));
console.log(bank.findcustomerId(1));
console.log(bank.getBalance(1));

bank.credit = function (bankId, amount){
    const customer = bank.findcustomerId(bankId);
    const customerTrans = customer.customerTranasction;
    console.log(customerTrans);
   // customerTrans.push(amount);
   
};
//console.log(bank.getBalance(1));
bank.credit(1, 200);
//console.log(bank.findcustomerId(1));

//console.log(bank.getBalance(1));