// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";
 
// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var submitButton = document.getElementById("submit-button");
var resultFrom;
var resultTo;
var searchValue;

 
// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
 
// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
 
search.addEventListener('input', updateValue);
 
// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}
 
// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);
 
// function getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
        if (fromCurrency === toCurrency) {
        document.getElementById("error-message").style.display = "block";
      } else {
        document.getElementById("error-message").style.display = "none";
        // perform the currency conversion
      }
}
var clickCount = 0;

submitButton.addEventListener("click", function() {
  clickCount++;
  if (clickCount >= 3) {
    submitButton.disabled = true;
    alert("Maximum attempts reached, Please try again later :)")
    
  }
}); 
// display results after conversion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML =
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
    
      
}
 
// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }