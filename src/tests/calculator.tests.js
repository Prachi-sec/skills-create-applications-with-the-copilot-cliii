// calculator.tests.js
// Unit tests for calculator functions: addition, subtraction, multiplication, division
// Uses Jest framework

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator-lib');

describe('Calculator Basic Operations', () => {
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator Extended Operations', () => {
  test('modulo with 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('power with 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('square root with √16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 0 = 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('modulo with negative numbers', () => {
    expect(modulo(-5, 2)).toBe(-1);
    expect(modulo(5, -2)).toBe(1);
  });

  test('power with negative exponent', () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test('square root of negative throws error', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot take square root of a negative number');
  });
});

describe('Calculator Edge Cases', () => {
  test('Addition with negative numbers', () => {
    expect(add(-2, 3)).toBe(1);
  });

  test('Subtraction resulting in negative', () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  test('Multiplication by zero', () => {
    expect(multiply(0, 100)).toBe(0);
  });

  test('Division by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
});
