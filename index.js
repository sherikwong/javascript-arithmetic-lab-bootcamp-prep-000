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
  if () {
    
  }
  return parseInt(n, base);
  
}

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })


function preserveDecimal(n) {
  return parseFloat(n);
}