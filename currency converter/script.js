const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');
const historyList = document.getElementById('historyList');

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        result.textContent = 'Please enter a valid amount';
        return;
    }

    convertCurrency(amount, fromCurrency, toCurrency);
});

function convertCurrency(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        'USD': 1,
        'EUR': 0.85,
        'GBP': 0.75,
        'JPY': 110
    };

    const convertedAmount = (amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(2);
    result.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

    addToHistory(amount, fromCurrency, convertedAmount, toCurrency);
}

function addToHistory(amount, fromCurrency, convertedAmount, toCurrency) {
    const listItem = document.createElement('li');
    listItem.textContent = `${amount} ${fromCurrency} to ${convertedAmount} ${toCurrency}`;
    historyList.prepend(listItem);
}