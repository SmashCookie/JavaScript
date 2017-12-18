let equalBtn = document.getElementById('equals'),
    divideBtn = document.getElementById('divide'),
    subtractBtn = document.getElementById('subtract'),
    multiplyBtn = document.getElementById('multiply'),
    additionBtn = document.getElementById('addition'),
    output = document.getElementById('calculatorResult'),
    clearBtn = document.getElementById('clearCalculator'),
    changeTableBtn = document.getElementById('changeTable');

// Stores the value for the calculations.
let firstNumber = 0,
    secondNumber = 0;

// Decides which math method to use.
let add = false,
    divide = false,
    subtract = false,
    multiply = false,
    haveFirstNumber = false,
    needToClearResult = false;

// Adds a number from the calculator buttons in to the input field.
function addNumber(number) {
  if (needToClearResult === true) {
    output.value = "";
    output.value += number;
    needToClearResult = false;
  } else {
    output.value += number;
  }
}

function selectTable(method) {
  // stores the first number and selects math table method
    if (method === "divide") {
      saveNumber();
      checkIfUserNeedsToClearResult()
      changeTableMethod("divide");
    }
    else if(method === "multiply") {
      saveNumber();
      checkIfUserNeedsToClearResult()
      changeTableMethod("multiply");
    }
    else if(method === "subtract") {
      saveNumber();
      checkIfUserNeedsToClearResult()
      changeTableMethod("subtract");
    }
    else if(method === "addition") {
      saveNumber();
      checkIfUserNeedsToClearResult()
      changeTableMethod("addition");
    }
}

// Saves the current number
function saveNumber() {
  if (haveFirstNumber === false) {
    firstNumber = Number(output.value);
    console.log(firstNumber);
  } else {
    secondNumber = Number(output.value);
  }
}

function checkIfUserNeedsToClearResult() {
  if (needToClearResult === false) {
    needToClearResult = true;
  } else {
    needToClearResult = false;
  }
}

function clearCalculatorResult() {
  output.value = "";
}

function changeTableMethod(table) {
  switch (table) {
    case "divide":
      divide = true;
      subtract = false;
      multiply = false;
      add = false;
      break;
    case "multiply":
      divide = false;
      subtract = false;
      multiply = true;
      add = false;
      break;
    case "subtract":
      divide = false;
      subtract = true;
      multiply = false;
      add = false;
      break;
    case "addition":
      divide = false;
      subtract = false;
      multiply = false;
      add = true;
      break;
    default:
      alert("Error: changeTableMethod()");
  }
  haveFirstNumber = true;
}

function clearSavedNumbers() {
  firstNumber = 0;
  secondNumber = 0;
}

equalBtn.onclick = function() {
  secondNumber = Number(output.value);
  if (add === true) {
    output.value = (firstNumber + secondNumber);
  }
  else if (subtract === true) {
    output.value = (firstNumber - secondNumber);
  }
  else if (multiply === true) {
    output.value = (firstNumber * secondNumber);
  }
  else if (divide === true) {
    output.value = (firstNumber / secondNumber);
  }
  else {
    output.value = (firstNumber + secondNumber);
  }
  haveFirstNumber = false;
  clearSavedNumbers();
}

clearBtn.onclick = function() {
  clearCalculatorResult();
}

changeTableBtn.onclick = function() {
  if (output.value.charAt(0) != "-") {
    output.value = "-" + output.value;
  } else if (output.value.charAt(0) === "-"){
    output.value = output.value.substr(1);
  }
}
