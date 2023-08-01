const numbers = document.querySelectorAll("[data-number]");
const outputField = document.querySelector(".output-field");
const evaluate = document.querySelector(".equal");

let userInput = 0;
let currentOperation;
let evaluatedOperation;
let firstNumber;
let sum;

numbers.forEach((number) => number.addEventListener("click", getNumber));

const operation = document.querySelector(".operation");
operation.addEventListener("click", getSum);

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
  console.log(`${firstNumber}+${evaluatedOperation}+${userInput}`);
  //if the user presses = sign, it should calculate the sum
  firstNumber = parseInt(firstNumber);
  userInput = parseInt(firstNumber);
  evaluatedOperation = parseInt(firstNumber);
  sum = +firstNumber + evaluatedOperation + +userInput;
  return sum;
}
