/**
 * Calculator module with intentional bugs for workshop Exercise 3
 * Participants will use Bob to identify and fix these issues
 * 
 * BUGS INCLUDED:
 * 1. Division by zero not handled
 * 2. Missing return statement in multiply
 * 3. Incorrect operator precedence in calculate
 * 4. Type coercion issues in add
 * 5. Wrong operation in Subtract (adds instead of subtracts)
 * 6. Logic error in power function
 */

class Calculator {
  constructor() {
    this.result = 0;
  }

  /**
   * Divide two numbers
   * BUG 1: Division by zero not handled
   */
  divide(a, b) {
    return a / b;
  }

  /**
   * Multiply two numbers
   * BUG 2: Missing return statement
   */
  multiply(a, b) {
    const result = a * b;
    // Missing return!
  }

  /**
   * Calculate (a + b) * c
   * BUG 3: Incorrect operator precedence - missing parentheses
   */
  calculate(a, b, c) {
    // Should be (a + b) * c, but missing parentheses causes wrong order
    return a + b * c;
  }

  /**
   * Add two numbers
   * BUG 4: Type coercion - string concatenation instead of addition
   */
  add(a, b) {
    // This will concatenate strings instead of adding numbers
    return a + b;
  }

  /**
   * Subtract two numbers
   * BUG 5: Wrong operation - adds instead of subtracts
   * Also inconsistent naming (capital S)
   */
  Subtract(num1, num2) {
    // Wrong operation!
    return num1 + num2;
  }

  /**
   * Calculate power (base^exponent)
   * BUG 6: Modifying base parameter instead of accumulating result
   */
  power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      // Modifying base instead of multiplying result
      base = base * base;
    }
    return base;
  }

  /**
   * Get the current result
   */
  getResult() {
    return this.result;
  }

  /**
   * Reset the calculator
   */
  reset() {
    this.result = 0;
  }
}

module.exports = Calculator;

// Made with Bob
