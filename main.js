

// const celciusInput = document.querySelector('#celcius > input'); 
// const fahrenheitInput = document.querySelector ('#fahrenheit > input');
const tempConverterButton = document.querySelector('#convert-button');
const clearButton = document.querySelector('#clear-button');
const divOutput = document.querySelector('#divOutput'); 
const determineConverter = (e) => {
  let degreeValue = document.querySelector('input[name="degreeType"]:checked').value;
  if (degreeValue === 'fahrenheit'){
    fahrenheitToCelcius();
  } else if (degreeValue === "celsius"){ 
    celciusToFahrenheit();
  };
}

function roundNum(num) {
  return Math.round(num*100)/100; 
}

function celciusToFahrenheit() {
  console.log('toC function running');
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  fahrenheitInput.value = roundNum(fTemp);
  celciusInput.value = roundNum(cTemp);
 }

 function fahrenheitToCelcius() {
  console.log('toF function running');
   const fTemp = parseFloat(fahrenheitInput.value);
   const cTemp = (fTemp - 32) * (5/9);
   celciusInput.value = roundNum(cTemp);
   fahrenheitInput.value = roundNum(fTemp);
 }

 const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
 };

 
function main() {
//   celciusInput.addEventListener('input', celciusToFahrenheit);
//   fahrenheitInput.addEventListener('input', fahrenheitToCelcius);
  tempConverterButton.addEventListener('click',determineConverter);
}

main();

// input number

// select parameter 

// select convert button to see converted temp displayed    
// ---create a variable for covert button 
// ---add an event listener to the button 


// determine which radio button is selected
// run a fun formula inside the  function 
//---if ctemp covert to farenhiet 
//---else if ftemp converter to celcius

// use a print to dom function to return a value of the converted temp
// --- 











