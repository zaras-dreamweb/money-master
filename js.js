// --------------function for expense Inputs
function getInputs(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    if (inputValue >= 0) {
        return inputValue;
    }
    // -----error messages
    else if (inputValue < 0) {
        document.getElementById('error-message').style.display = 'block';
    }
    else {
        return alert('Please enter only a number');
    }
}
// -------------function for calculating expense total
function calculateExpense() {
    const food = getInputs('foodId');
    const rent = getInputs('rentId');
    const cloths = getInputs('clothsId');
    const totalCost = food + rent + cloths;

    // error message
    const income = getInputs('incomeId');
    if (totalCost > income) {
        return alert('Sorry! Expense can not be bigger then Income');
    }
    else {
        return totalCost;
    }
}

// -------------function for calculation total balance
function calculateBalance() {
    const income = getInputs('incomeId');
    const balance = income - calculateExpense();
    return balance;
}
// --------------function for calculation saving amount
function savingAmount() {
    const saveinput = getInputs('save-input');
    const income = getInputs('incomeId');
    amount = (income * saveinput) / 100;
    return amount;
}

// -------------- calculate button event handler
document.getElementById('calculate-btn').addEventListener('click', function () {
    document.getElementById('total-expense').innerHTML = calculateExpense();
    document.getElementById('balance').innerHTML = calculateBalance();

})

// -------------- save button event handler
document.getElementById('save-btn').addEventListener('click', function () {
    document.getElementById('saving-account').innerHTML = savingAmount();

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceValue = parseFloat(remainingBalance.innerHTML);
    remainingBalance.innerHTML = calculateBalance() - savingAmount();

    // --------- error message
    const savings = savingAmount();
    const balanceCheck = calculateBalance();
    if (savings > balanceCheck) {
        alert("Sorry! Savings can not be bigger than total balance");
    }
})