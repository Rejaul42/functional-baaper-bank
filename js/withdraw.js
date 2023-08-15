document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get new withdraw amount 
    const newWithdrawAmount = getInputValueById('withdraw-field');

    // Validation

    if(isNaN(newWithdrawAmount)){
        alert('Please inter number');
        return;
    }
    
    // get previous withdraw amount 
    const previousWithdrawAmount = getTextValueById('total-withdraw');
    

    // set total balance 

    const previousBalance = getTextValueById('total-balance');

    // Validation 
    if(newWithdrawAmount > previousBalance){
        alert('Tor baper bank e eto tk nai')
        return;
    }
    
    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;
    // set total withdraw amount 
    setTextValueById('total-withdraw', totalWithdraw);

    const totalBalance = previousBalance - newWithdrawAmount;

    setTextValueById('total-balance', totalBalance);
})