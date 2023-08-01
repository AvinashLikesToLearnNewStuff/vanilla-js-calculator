const numbers = document.querySelectorAll("[data-number]");
const outputField = document.querySelector(".output-field");
const evaluate = document.querySelector(".equal");
const clearbtn = document.querySelector(".clear");

let userInput = 0;
let currentOperation;
let evaluatedOperation;
let firstNumber;
let sum;

numbers.forEach((number) => number.addEventListener("click", getNumber));
clearbtn.addEventListener("click", clearEverything);

const operations = document.querySelectorAll(".operation");
operations.forEach((operation) => operation.addEventListener("click", getSum));

function getNumber(number) {
  if (!currentOperation) {
    userInput += number.currentTarget.dataset.number; //needs to be corrected
    userInput.toString();
    outputField.textContent += number.currentTarget.dataset.number;
    userInput = parseInt(userInput);
    return userInput;
  } else {
    evaluatedOperation = currentOperation;
    currentOperation === "";
    userInput += number.currentTarget.dataset.number; //needs to be corrected
    userInput.toString();
    outputField.textContent += number.currentTarget.dataset.number;
    userInput = parseInt(userInput);
    return userInput;
  }
}

function getSum(Sum) {
  currentOperation = Sum.currentTarget.dataset.operator;
  outputField.textContent += currentOperation;
  console.log(currentOperation);
  firstNumber = userInput;
  userInput = 0;
  return currentOperation;
}

evaluate.addEventListener("click", evaluateSum);

function evaluateSum() {
  console.log(`${firstNumber}${evaluatedOperation}${userInput}`);
  //if the user presses = sign, it should calculate the sum
  firstNumber = parseInt(firstNumber);
  userInput = parseInt(userInput);

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
      console.log("Invalid operation");
  }

  console.log(sum);
  outputField.textContent = sum;
  userInput = sum;
  return sum;
}
function clearEverything() {
  userInput = 0;
  currentOperation = "";
  evaluatedOperation = "";
  firstNumber = 0;
  outputField.textContent = "";
}
