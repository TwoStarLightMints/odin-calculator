const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

// Empty state: displayVal = "", numQueue = [], oper = ""
let displayVal = "";
let numQueue = [];
let numBuffer = "";
let oper = "";

(Array.from(buttons)).forEach(elem => {
  elem.addEventListener('click', e => {

    let input = e.target.value;
    let inputClass = e.target.className;
    
    if (inputClass === "oper") {
      
      // Clear everything
      if (input === "AC") {

        displayVal = "";
        numBuffer = "";
        numQueue.length = 0;
        oper = "";
        updateDisplay(displayVal);
      
      } else if (input === "=") {

        if (checkForNum(numQueue, numBuffer)) {

          numQueue.push(numBuffer);
          if (numQueue[1] === "0" && oper === "/") {

            displayVal = "No, try again";
            numBuffer = "";
            numQueue.length = 0;
            oper = "";
            updateDisplay(displayVal);

          } else {

            numQueue[0] = operate(oper, numQueue[0], numQueue[1]);
            displayVal = numQueue[0];
            numQueue.length = 1;
            numBuffer = "";
            oper = "";
            updateDisplay(displayVal);

          }
          
        }

      } else {

        // If there is a number in the display (must use isNaN for
        // when the number is 0)
        if (!isNaN(parseFloat(displayVal))) {

          if (numQueue.length == 0) {

            numQueue.push(numBuffer);
            numBuffer = "";
            oper = input;

          // A number is in the queue, so there is also a
          // previous operation, so to press the operation
          // button again and avoid NaN, there must be a display
          // value other than "" waiting
          } else if (numQueue.length == 1 && oper !== "") {

            numQueue.push(numBuffer);
            numQueue[0] = operate(oper, numQueue[0], numQueue[1]);
            numQueue.length = 1;
            displayVal = numQueue[0];
            numBuffer = "";
            oper = input;
            updateDisplay(displayVal);

          }
          
        }
      }

    // If we get here, the button is a number
    } else {

      // Update the number buffer, then set display value to
      // number buffer
      numBuffer += input;
      displayVal = numBuffer;
      updateDisplay(displayVal);

    }
  });
});


function checkForNum(queue, buffer) {
  return (queue.length != 0 && !isNaN(parseFloat(buffer)))
}

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
  return num1 / num2;
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