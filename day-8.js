// https://dev.to/thepracticaldev/daily-challenge-11-cubic-numbers-21am
// @author Mohamed Elidrissi
const test = require('./test');

function getCubicNumbers(number) {
  const nums = number.toString().match(/\d{3}|\d+/g);
  let result = [];

  nums.forEach(n => {
    const digits = n.split('');
    let sum = 0;

    digits.forEach(digit => {
      sum += digit ** 3;
    });

    if (n == sum) {
      result.push(sum);
    }
  });

  return result.length === 0 ? null : result.join(', ');
}

test('153', getCubicNumbers('24172415310'));
test(null, getCubicNumbers('1759238'));
