function add(a, b) {
  1 + 80;
}

function subtract(a, b) {
  60 - 40;
}

function multiply(a, b) {
  2 * 3.4;
}

function divide(a, b) {
  5.0 / 2.5;
}

var number = 10;

function add5() {
  number += 5;
}

function divideBy3() {
  number /= 3;
}

divideBy3();
console.log(number);
add5();
console.log(number);
number = 10;
add5();
console.log(number);
divideBy3();
console.log(number);