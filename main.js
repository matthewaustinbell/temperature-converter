var cel = document.getElementById('celsius')
var far = document.getElementById('fahrenheit')

var C2f = document.getElementById('C2f')
var f2C = document.getElementById('f2C')

function step1() {
  f2C.checked = false
}

function step2() {
  C2f.checked = false
}

function valid() {
  if (C2f.checked) {
    c2f()
  } else if (f2C.checked) {
    f2c()
  }
}

function Clean(){
  document.getElmentById('display').innerHTML='';
}


function c2f() {
  far.value = (1.8 * cel.value) + 32
  console.log(cel.value + ' Celsius is equal to ' + far.value + ' fahrenheit')
}

function f2c() {
  far.value = (cel.value - 32) / 1.8
  console.log(cel.value + ' Fahrenheit is equal to ' + far.value + ' celsius')
}