// script.js
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;
let secondOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    } else if (operator) {
        secondOperand = parseFloat(currentInput);
        calculateResult();
        operator = op;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    secondOperand = null;
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculateResult() {
    if (operator && currentInput) {
        secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        display.value = result;
        firstOperand = result;
        currentInput = '';
        operator = '';
    }
}
