var cel = document.getElementById('celsius')
var far = document.getElementById('fahrenheit')

var C2f = document.getElementById('C2f')
var f2C = document.getElementById('f2C')

//trying some code sent from matt gill
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
  };

const domStringBuilder = (temperature, unitOfTemp) => {
  if (finalTemp > 32 && unit === 'C'){
  domString = `<div class='textRed'>${finalTemp.toFixed(2)} degrees ${unit}</div>`;
  printToDom('tempOutput', domString);
}
  else if (finalTemp > 90 && unit === 'F'){
  domstring = `<div class='textRed'>${finalTemp.toFixed(2)} degrees ${unit}</div>`;
  printToDom('tempOutput', domString);
}

  else if (finalTemp < 0 && unit === 'C'){
      domString = `<div class='textBlue'></div?`;
      printToDom('tempOutput', domString);
      }
      else if (finalTemp < 32 && unit === 'F'){
      domstring = `<div class='textBlue'>${finalTemp.toFixed(2)} degrees ${unit}</div>`;
      printToDom('tempOutput', domString);
  }
  else {
      domString = `<div class='textGreen'>${finalTemp.toFixed(2)} degrees ${unit}</div>`;
      printToDom('tempOutput', domString);
  }  
};
//this is the end of the code from matt gill

// function step1() {
//   f2C.checked = false
// }

// function step2() {
//   C2f.checked = false
// }



//radio functions
function valid() {
  if (C2f.checked) {
    c2f()
  } else if (f2C.checked) {
    f2c()
  }
}

function Clean(){
  document.getElementById('display').innerHTML='';
}


function c2f() {
  far.value = (1.8 * cel.value) + 32
  let color = 'green';
  if(far.value>90){
    color = 'red';
  }
  else if (far.value<32){
    color = 'blue';
  }
  document.getElementById('divOutput').style.color = color;
  domStringBuilder = `<h2>${value} degrees C</h2>`
  //console.log(cel.value + ' Celsius is equal to ' + far.value + ' fahrenheit')
}

function f2c() {
  far.value = (cel.value - 32) / 1.8
  let color = 'green';
  if(value>90){
    color = 'red';
  }
  else if (value<32){
    color = 'blue';
  }
  document.getElementById('divOutput').style.color = color;
  domStringBuilder = `<h2>${value} degrees C</h2>`

  //console.log(cel.value + ' Fahrenheit is equal to ' + far.value + ' celsius')
}