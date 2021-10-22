const api = "https://api.exchangerate-api.com/v4/latest/USD"; 
getDollarRate();
function getDollarRate() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayDollarResults);
}
function displayDollarResults(currency) {
   $('#invoice_modal_dollar_rate').val(currency.rates.PHP);
  //  console.log(currency.rates);
}