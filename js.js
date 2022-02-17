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

function savingAmount() {
    const saveinput = getInputs('save-input');
    const income = getInputs('incomeId');
    amount = (income * saveinput) / 100;
    return amount;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    document.getElementById('total-expense').innerHTML = calculateExpense();
    document.getElementById('balance').innerHTML = calculateBalance();

})

document.getElementById('save-btn').addEventListener('click', function () {
    document.getElementById('saving-account').innerHTML = savingAmount();

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceValue = parseFloat(remainingBalance.innerHTML);
    remainingBalance.innerHTML = calculateBalance() - savingAmount();

})