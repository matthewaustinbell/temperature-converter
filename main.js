const cel = document.getElementById('celsius')
const far = document.getElementById('fahrenheit')
const C2f = document.getElementById('C2f')
const f2C = document.getElementById('f2C')


function step1() {
  f2C.checked = false
 }

 function step2() {
   C2f.checked = false
 }

//radio functions
function valid() {
  if (C2f.checked) {
    c2f()
  } else if (f2C.checked) {
    f2c()
  }
}

function clean(){
 let cleanInput = document.getElementById('celsius');
  cleanInput.value = '';
}


function c2f() {
  far.value = (1.8 * cel.value) + 32
    if (far.value >= 90){
      document.body.classList.add("red");
    }
    else if (far.value <= 32){
      document.body.classList.add("blue")}
    else (document.body.classList.add("green"))
    // in the portion above we grabbed the class the whole BODY with document. and passed in the css class red. 
    // remove a class 
  
}

function f2c() {
  far.value = (cel.value - 32) / 1.8
  if (far.value >= 32){
    document.body.classList.add("red");
  }
  else if (far.value <= 0){
    document.body.classList.add("blue")}
  else (document.body.classList.add("green"))
}

document.getElementById('convertButton').addEventListener('click', valid);
document.getElementById('clearButton').addEventListener('click', clean);
//document.getElementById('celsius').addEventListener('keypress', valid);
//document.getElementById('fahrenheit').addEventListener('keypress', valid);