let display = document.getElementById('display');

// Append numbers to the display
function appendNumber(number) {
    display.textContent += number;
}

// Append operators to the display
function appendOperator(operator) {
    if (display.textContent === '') return;
    const lastChar = display.textContent.slice(-1);
    if ('+-*/'.includes(lastChar)) return; // Prevent multiple operators
    display.textContent += operator;
}

// Clear the display
function clearDisplay() {
    display.textContent = '';
}

// Delete the last character
function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

// Evaluate the expression
function calculate() {
    try {
        display.textContent = eval(display.textContent) || '0';
    } catch (error) {
        display.textContent = 'Error';
    }
}
