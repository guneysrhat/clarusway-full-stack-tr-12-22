// ! es6 import syntax
import { calculateTotal, celsiusToFahrenheit, fahrenheitToCelsius, fibonacci } from './math';

// ! node modules import syntax
// const {
//   calculateTotal,
//   celsiusToFahrenheit,
//   fahrenheitToCelsius,
//   fibonacci,
// } = require("./math");

describe('::calculateTotal', () => {
  it('should exist', () => {
    expect(calculateTotal).toBeDefined();
  });

  it('should return a number', () => {
    expect(calculateTotal(100, 0.2)).toBe(120);
  });

  it('should calculate total with default VAT', () => {
    expect(calculateTotal(200)).toBe(236);
  });
});

describe('::fahrenheitToCelsius', () => {
  it('should exist', () => {
    expect(fahrenheitToCelsius).toBeDefined();
  });

  it('should return a number', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });

  it('should convert 50 F to 10 C', () => {
    expect(fahrenheitToCelsius(50)).toBe(10);
  });
});

describe('::celsiusToFahrenheit', () => {
  it('should exist', () => {
    expect(celsiusToFahrenheit).toBeDefined();
  });

  it('should return a number', () => {
    expect(celsiusToFahrenheit(10)).toBe(50);
  });

  it('should convert 20 C to 68 F', () => {
    expect(celsiusToFahrenheit(20)).toBe(68);
  });
});

describe('::fibonacci', () => {
  it('should exist', () => {
    expect(fibonacci).toBeDefined();
  });

  it('should return a number', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('should return the 10th number as 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  it('should return 1 without number', () => {
    expect(fibonacci()).toBe(1);
  });

  it('should throw error if the number is less than 1', () => {
    expect(() => fibonacci(0)).toThrow(new Error('Must enter a number greater than 0'));
  });
});
