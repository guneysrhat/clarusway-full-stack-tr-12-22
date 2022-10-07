const calculateTotal = (total, vat = 0.18) => total * (1 + vat);

const fahrenheitToCelsius = (temp) => (temp - 32) / 1.8;

const celsiusToFahrenheit = (temp) => temp * 1.8 + 32;

const fibonacci = (num = 1) => {
  if (num < 1) {
    throw new Error('Must enter a number greater than 0');
  }
  const series = [1, 1];
  for (let i = 2; i < num; i++) {
    const a = series[i - 1];
    const b = series[i - 2];
    series.push(a + b);
  }
  return series[num - 1];
};

// ! es6 export syntax
export { calculateTotal, fahrenheitToCelsius, celsiusToFahrenheit, fibonacci };
export default calculateTotal;

// ! node modules export syntax
// module.exports = {
//   calculateTotal,
//   fahrenheitToCelsius,
//   celsiusToFahrenheit,
//   fibonacci,
// };
