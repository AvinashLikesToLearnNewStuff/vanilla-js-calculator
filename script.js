const numbers = document.querySelectorAll("[data-number]");
const outputField = document.querySelector(".output-field");
const evaluate = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");

let userInput = "0";
let currentOperation = "";
let evaluatedOperation = "";
let firstNumber = 0;
let sum = 0;

numbers.forEach((number) => number.addEventListener("click", getNumber));
clearBtn.addEventListener("click", clearEverything);

const operations = document.querySelectorAll(".operation");
operations.forEach((operation) => operation.addEventListener("click", getSum));

function getNumber(event) {
  const number = event.currentTarget.dataset.number;
  userInput += number;
  outputField.textContent = userInput;
}

function getSum(event) {
  currentOperation = event.currentTarget.dataset.operator;
  outputField.textContent += currentOperation;
  firstNumber = parseFloat(userInput);
  userInput = "";
}

function evaluateSum() {
  userInput = parseFloat(userInput);
  switch (evaluatedOperation) {
    case "+":
      sum = firstNumber + userInput;
      break;
    case "-":
      sum = firstNumber - userInput;
      break;
    case "*":
      sum = firstNumber * userInput;
      break;
    case "/":
      sum = firstNumber / userInput;
      break;
    default:
      console.log("Unsupported operation");
  }
  console.log(sum);
  outputField.textContent = sum;
  userInput = sum.toString();
}

function clearEverything() {
  userInput = "0";
  currentOperation = "";
  evaluatedOperation = "";
  firstNumber = 0;
  sum = 0;
  outputField.textContent = userInput;
}
