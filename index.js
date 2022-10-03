const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');
let displayVal = "0";
let numQueue = [];
let oper = "";

(Array.from(buttons)).forEach(elem => {
  elem.addEventListener('click', e => {
    
    let val = e.target.innerText;

    if (val === "AC") {

      displayVal = "0";
      numQueue.length = 0;
      oper = "";

    } else {
      
      if (e.target.className === "oper") {
        if (numQueue.length == 0) {

          numQueue.push(displayVal);
          displayVal = "0";
          oper = val;

        } else {

          numQueue.push(displayVal);
          displayVal = operate(oper, numQueue[0], numQueue[1]);
          oper = "";
          numQueue.length = 0;

        }
      } else {

        if (displayVal === "0") {
          displayVal = val;
        } else {
          displayVal += val;
        }

      }

    }

    updateDisplay(displayVal);
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
      return add(numOne, numTwo);
    case '-':
      return subtract(numOne, numTwo);
    case '*':
      return multiply(numOne, numTwo);
    case '/':
      return divide(numOne, numTwo);
  }
}