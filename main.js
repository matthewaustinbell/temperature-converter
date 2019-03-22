const celciusInput = document.querySelector('#celcius > input'); 
const fahrenhietInput = document.querySelector ('#fahrenheit > input');

function celciusToFahrenhiet() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  fahrenhietInput.value = fTemp;
 
 }

 function fahrenheitToCelcius() {
   const fTemp = parseFLoat(fahrenhietInput.value);
   const cTemp = (fTemp - 32) * (5/9);
   celciusInput.value = cTemp;

 }

celciusInput.addEventListener('input', celciusToFahrenhiet);

