// Alias for MathOperation
type MathOperation = (x: number, y: number) => number;

// Usage
const addition: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

// Test
console.log("Addition result:", addition(5, 3));
console.log("Subtraction result:", subtract(8, 3));