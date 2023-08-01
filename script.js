const numbers = document.querySelectorAll("[data-number]");
const outputField = document.querySelector(".output-field");
let userInput;
let currentOperation;
let firstNumber;

numbers.forEach((number) => number.addEventListener("click", getNumber));
const operation = document.querySelector(".operation");
operation.addEventListener("click", getSum);

function getNumber(number) {
  while (!currentOperation) {
    userInput = number.currentTarget.dataset.number; //needs to be corrected
    outputField.textContent += number.currentTarget.dataset.number;
    return userInput;
  }
}

function getSum(Sum) {
  currentOperation = Sum.currentTarget.dataset.operator;
  outputField.textContent += currentOperation;
  console.log(currentOperation);
  firstNumber = userInput;
  return currentOperation;
}
