const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');
let displayVal = "";

(Array.from(buttons)).forEach(elem => {
  elem.addEventListener('click', e => {
    let val = e.target.innerText;
    if (val === "Clear") {
      displayVal = "";
      updateDisplay(displayVal);
    } else {
      displayVal += val;
      updateDisplay(displayVal);
    }
  });
});

function updateDisplay (newVal) {
  display.innerText = newVal;
}

function add (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  if (num2 != '0') {
    return num1 / num2;
  }
}

function operate (oper, num1, num2) {
  let numOne = parseFloat(num1);
  let numTwo = parseFloat(num2);

  switch (oper) {
    case '+':
      add(numOne, numTwo);
      break;
    case '-':
      subtract(numOne, numTwo);
      break;
    case '*':
      multiply(numOne, numTwo);
      break;
    case '/':
      divide(numOne, numTwo);
      break;
  }
}