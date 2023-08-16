

// deposit event listener 
document.getElementById('btn_deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldById('input_deposit');

    // get previous deposit total
    const previousDepositTotal = getElementValueById('deposit_total');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // set deposit total value
    setElementValueById('deposit_total',newDepositTotal)


// get previous balance by using the function
const previousTotalBalance = getElementValueById('Total_balance');
const newTotalBalance = previousTotalBalance + newDepositAmount;
// set the new balance 
setElementValueById('Total_balance',newTotalBalance);

});

/* 
1.add withdraw button event handler
2.get withdraw amount by using getInputFieldById function
3.get previous withdraw amount by using getElementValueId function
4.calculate new withdraw total and set the value
4-5.set new withDraw total by using setElementValueById function
5.get previous balance total by using getElementValueById function
6.calculate new total balance
7.set total balance using setElementById
 */
// withdraw event listener 
document.getElementById('btn_withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldById('input_withdraw');

    const previousWithdrawTotal = getElementValueById('withdraw_total')
   
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setElementValueById('withdraw_total',newWithdrawTotal);

    const previousTotalBalance = getElementValueById('Total_balance');

    const newTotalBalance = previousTotalBalance -newWithdrawAmount;

    setElementValueById('Total_balance',newTotalBalance);


    

})
