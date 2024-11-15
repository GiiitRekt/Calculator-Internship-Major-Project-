// Function to clear all input and results
function clearAll() {
    document.getElementById('operation').value = '';
    document.getElementById('result').value = '';
}

// Function to append numbers to the current operation
function appendNumber(number) {
    document.getElementById('operation').value += number;
    calculateResult();
}

// Function to append decimal point to the current operation
function appendDecimal() {
    const operation = document.getElementById('operation').value;
    // Check if there's already a decimal point in the last number
    if (!operation || /[+\-*/%]$/.test(operation)) {
        document.getElementById('operation').value += '0.';
    } else if (!/\.\d*$/.test(operation)) {
        document.getElementById('operation').value += '.';
    }
    calculateResult();
}

// Function to append operators to the current operation
function appendOperator(operator) {
    document.getElementById('operation').value += ' ' + operator + ' ';
    calculateResult();
}

// Function to calculate the result of the current operation
function calculate() {
    const operation = document.getElementById('operation').value;
    try {
        // Replace square operator '^2' with '**2' for evaluation
        const result = eval(operation.replace(/\^2/g, '**2'));
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

// Function to calculate square of the number
function calculateSquare() {
    const operation = document.getElementById('operation').value;
    const lastNumber = operation.split(/\s+/).pop();
    if (!isNaN(lastNumber) && lastNumber.trim() !== '') {
        const square = Math.pow(Number(lastNumber), 2);
        document.getElementById('operation').value = operation.replace(lastNumber, square);
        calculateResult();
    }
}

// Function to calculate result in real-time
function calculateResult() {
    const operation = document.getElementById('operation').value;
    try {
        // Replace square operator '^2' with '**2' for evaluation
        const result = eval(operation.replace(/\^2/g, '**2'));
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
