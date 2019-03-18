console.log('hello');

const toCelsius =  () => {

    
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(x);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(x);

}

const toFahrenheit =  () => {

}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  console.log("event", e);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);