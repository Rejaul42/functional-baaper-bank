document.getElementById('btn-deposit').addEventListener('click', function(){
    // get new deposit amount
    const newDepositAmount = getInputValueById('deposit-field');

    // validation

    if(isNaN(newDepositAmount)){
        alert('Please enter a number')
        return;
    }

    // get previous deposit amount
    const previousDepositAmount = getTextValueById('deposit-total');
    const totalDepositAmount = newDepositAmount + previousDepositAmount;

    // set total deposit amount 

    setTextValueById('deposit-total', totalDepositAmount);

    //  set total balance 

    const previousBalance = getTextValueById('total-balance');
    const totalBalance = previousBalance + newDepositAmount;
    setTextValueById('total-balance', totalBalance);

})