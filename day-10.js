// https://dev.to/thepracticaldev/daily-challenge-12-next-larger-number-3f3o
// @author Mohamed Elidrissi
const test = require('./test');

function nextLargerNumber(n) {
  if (n < 0) return -1;

  const digits = n.toString().split('');
  let possibleCombinations = [];

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      const combination = Array.from(digits);
      const first = combination.splice(i, 1).join('');
      const second = combination.splice(j, 1).join('');

      combination.splice(i, 0, second);
      combination.splice(j, 0, first);

      possibleCombinations.push(parseInt(combination.join('')));
    }
  }
  possibleCombinations = possibleCombinations.filter(v => v > n);
  return possibleCombinations.length > 0
    ? Math.min(...possibleCombinations)
    : -1;
}

test(21, nextLargerNumber(12));
test(2091, nextLargerNumber(2019));
test(-1, nextLargerNumber(5));
test(-1, nextLargerNumber(-16));
