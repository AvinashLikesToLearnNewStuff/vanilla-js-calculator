const numbers = document.querySelectorAll("[data-number]");
const outputField = document.querySelector(".output-field");
const evaluate = document.querySelector(".equal");

let userInput = 0;
let currentOperation;
let evaluatedOperation;
let firstNumber;
let sum;

numbers.forEach((number) => number.addEventListener("click", getNumber));

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
  if (evaluatedOperation === "+") {
    sum = +firstNumber + +userInput;
    console.log(sum);
    outputField.textContent = sum;
    userInput = sum;
    return sum;
  }

  if (evaluatedOperation === "-") {
    sum = +firstNumber - +userInput;
    console.log(sum);
    outputField.textContent = sum;
    userInput = sum;
    return sum;
  }

  if (evaluatedOperation === "*") {
    sum = +firstNumber * +userInput;
    console.log(sum);
    outputField.textContent = sum;
    userInput = sum;
    return sum;
  }

  if (evaluatedOperation === "/") {
    sum = +firstNumber / +userInput;
    console.log(sum);
    outputField.textContent = sum;
    userInput = sum;
    return sum;
  }
}
