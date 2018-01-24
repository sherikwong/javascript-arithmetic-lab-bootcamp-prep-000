function add(a, b) {
  return a + b;
}


function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  return n += 1;
}

function dec(n) {
  return n -= 1;
}

function makeInt(n, base) {
 if (makeInt(n) === n) {
   return makeInt(n);
 } else if (base === 10) {
   return 0;
 } else {
   return NaN;
 }
}

function preserveDecimal(n) {
  return parseFloat(n);
}