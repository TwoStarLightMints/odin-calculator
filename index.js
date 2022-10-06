const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');
let displayVal = "0";
let numQueue = [];
let oper = "";

(Array.from(buttons)).forEach(elem => {
  elem.addEventListener('click', e => {

    
  });
});


function round (val) {
  let array = `${val}`.split("");
  if (array.length > 14) {
    return (array.slice(0, 14)).join("");
  }
  return val;
}

function updateDisplay (newVal) {
  display.innerText = round(newVal);
}



// Math functions
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
      return add(numOne, numTwo);
    case '-':
      return subtract(numOne, numTwo);
    case '*':
      return multiply(numOne, numTwo);
    case '/':
      return divide(numOne, numTwo);
  }
}