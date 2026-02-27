#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 * Supports: Addition (+), Subtraction (-), Multiplication (×), Division (÷), Modulo (%), Power (^), Square Root (sqrt)
 * Usage: node calculator.js <operation> <num1> [<num2>]
 * Example: node calculator.js add 2 3
 *          node calculator.js sqrt 9
 */

const [,, operation, num1, num2] = process.argv;

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    console.error('Error: Cannot take square root of a negative number.');
    process.exit(1);
  }
  return Math.sqrt(n);
}

function printUsage() {
  console.log('Usage: node calculator.js <operation> <num1> [<num2>]');
  console.log('Operations: add (+), subtract (-), multiply (x), divide (/), modulo (%), power (^), sqrt');
  console.log('Examples:');
  console.log('  node calculator.js add 2 3');
  console.log('  node calculator.js sqrt 9');
}

if (!operation || !num1 || (['sqrt'].indexOf(operation.toLowerCase()) === -1 && !num2)) {
  printUsage();
  process.exit(1);
}

const a = parseFloat(num1);
const b = num2 !== undefined ? parseFloat(num2) : undefined;
if (isNaN(a) || (num2 !== undefined && isNaN(b))) {
  console.error('Operands must be valid numbers.');
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
  case 'modulo':
  case 'mod':
  case '%':
    result = modulo(a, b);
    break;
  case 'power':
  case 'pow':
  case '^':
    result = power(a, b);
    break;
  case 'squareroot':
  case 'sqrt':
    result = squareRoot(a);
    break;
  default:
    console.error('Unsupported operation.');
    printUsage();
    process.exit(1);
}

console.log(result);
