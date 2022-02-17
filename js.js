function getInputs(inputId) {
    const Input = document.getElementById(inputId);
    const InputValue = parseFloat(Input.value);
    return InputValue;
}

function calculateExpense() {
    const food = getInputs('foodId');
    const rent = getInputs('rentId');
    const cloths = getInputs('clothsId');
    const totalCost = food + rent + cloths;
    return totalCost;
}
function calculateBalance() {
    const income = getInputs('incomeId');
    const balance = income - calculateExpense();
    return balance;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    document.getElementById('total-expense').innerHTML = calculateExpense();
    document.getElementById('balance').innerHTML = calculateBalance();

})

// document.getElementById('save-btn').addEventListener('click', function () {


//     const savingAmount = (getInputs('save-input') * getInputs('incomeId')) / 100;
//     // console.log(savingAmount);
//     const saveAmountInput = document.getElementById('saving-account');
//     saveAmountInput.innerHTML = savingAmount;

//     //const remainingBalance = document.getElementById('remaining-balance');
//     // let remainingBalanceValue = parseFloat(remainingBalance.innerHTML);
//     // // console.log(remainingBalanceValue);

//     //remainingBalance.innerHTML = balance - savingAmount;
//     // console.log(balance);
//     // console.log(savingAmount);
//     let remainingBalance = balance - savingAmount;

// })