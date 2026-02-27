#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 * Supports: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
 * Usage: node calculator.js <operation> <num1> <num2>
 * Example: node calculator.js add 2 3
 */

const [,, operation, num1, num2] = process.argv;

function printUsage() {
  console.log('Usage: node calculator.js <operation> <num1> <num2>');
  console.log('Operations: add (+), subtract (-), multiply (x), divide (/)');
  console.log('Example: node calculator.js add 2 3');
}

if (!operation || !num1 || !num2) {
  printUsage();
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);
if (isNaN(a) || isNaN(b)) {
  console.error('Both operands must be valid numbers.');
  process.exit(1);
}

let result;
switch (operation.toLowerCase()) {
  case 'add':
  case '+':
    result = a + b;
    break;
  case 'subtract':
  case '-':
    result = a - b;
    break;
  case 'multiply':
  case 'x':
  case '*':
    result = a * b;
    break;
  case 'divide':
  case '/':
  case '÷':
    if (b === 0) {
      console.error('Error: Division by zero.');
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.error('Unsupported operation.');
    printUsage();
    process.exit(1);
}

console.log(result);
