var num1 = document.getElementById('1');
var num2 = document.getElementById('2');
var num3 = document.getElementById('3');
var num4 = document.getElementById('4');
var num5 = document.getElementById('5');
var num6 = document.getElementById('6');
var num7 = document.getElementById('7');
var num8 = document.getElementById('8');
var num9 = document.getElementById('9');
var num0 = document.getElementById('0');
var decimal = document.getElementById('dec');


var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');

var results = document.getElementById('results');
var calculate = document.getElementById('enter');
var clear = document.getElementById('clear');

num1.onclick = function() {
  results.innerHTML = results.innerHTML + num1.innerHTML;
}
num2.onclick = function() {
  results.innerHTML = results.innerHTML + num2.innerHTML;
}
num3.onclick = function() {
  results.innerHTML = results.innerHTML + num3.innerHTML;
}
num4.onclick = function() {
  results.innerHTML = results.innerHTML + num4.innerHTML;
}
num5.onclick = function() {
  results.innerHTML = results.innerHTML + num5.innerHTML;
}
num6.onclick = function() {
  results.innerHTML = results.innerHTML + num6.innerHTML;
}
num7.onclick = function() {
  results.innerHTML = results.innerHTML + num7.innerHTML;
}
num8.onclick = function() {
  results.innerHTML = results.innerHTML + num8.innerHTML;
}
num9.onclick = function() {
  results.innerHTML = results.innerHTML + num9.innerHTML;
}
num0.onclick = function() {
  results.innerHTML = results.innerHTML + num0.innerHTML;
}
decimal.onclick = function () {
    results.innerHTML = results.innerHTML + decimal.innerHTML;
}
// onclick functions for each operator
add.onclick = function() {
  results.innerHTML = results.innerHTML + add.innerHTML;
}
subtract.onclick = function() {
  results.innerHTML = results.innerHTML + subtract.innerHTML;
}
multiply.onclick = function() {
  results.innerHTML = results.innerHTML + multiply.innerHTML;
}
divide.onclick = function() {
  results.innerHTML = results.innerHTML + divide.innerHTML;
}

calculate.onclick = function() {
  results.innerHTML = eval(results.innerHTML);
}

clear.onclick = function() {
  results.innerHTML = '';
}