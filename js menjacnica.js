currencyOneElement = document.getElementById('curency-one')
currencyTwoElement = document.getElementById('curency-two')
amountOne = document.getElementById('amount-one')
amountTwo = document.getElementById('amount-two')

rates={
    'USD':1,
    'EUR':0.95,
    'RSD':111.66
}
calculate()
function calculate(){
    currencyOne = currencyOneElement.value
    currencyTwo = currencyTwoElement.value
  rate = rates[currencyTwo]/rates[currencyOne]
  amountTwo.value=(amountOne.value*rate).toFixed(2)
}
currencyOneElement.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)

currencyTwoElement.addEventListener('change',calculate)
amountTwo.addEventListener('input',calculate)
