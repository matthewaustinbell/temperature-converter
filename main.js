

const celciusInput = document.querySelector('#celcius > input'); 
const fahrenheitInput = document.querySelector ('#fahrenheit > input');

function roundNum(num) {
  return Math.round(num*100)/100; 
}

function celciusToFahrenheit() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  fahrenheitInput.value = roundNum(fTemp);
  celciusInput.value = roundNum(cTemp);
 }

 function fahrenheitToCelcius() {
   const fTemp = parseFloat(fahrenheitInput.value);
   const cTemp = (fTemp - 32) * (5/9);
   celciusInput.value = roundNum(cTemp);
   fahrenheitInput.value = roundNum(fTemp);
 }



function main() {
  celciusInput.addEventListener('input', celciusToFahrenheit);
  fahrenheitInput.addEventListener('input', fahrenheitToCelcius);
}

main();