

let exchangeRates = {
    USD: 1,
    EUR: 0.86,
    SYR: 6000,
    INR: 81
};

function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;
    let targetCurrency = document.getElementById("target-currency").value;
    let exchangeRate = exchangeRates[targetCurrency] / exchangeRates[currency];
    let convertedAmount = (amount * exchangeRate).toFixed(2);
    document.getElementById("result").innerHTML = `${convertedAmount} ${targetCurrency}`;
}

let convertButton = document.getElementById("convert-button");
convertButton.addEventListener("click", convertCurrency);
