// https://dev.to/thepracticaldev/daily-challenge-1-string-peeler-4nep
// @author Mohamed Elidrissi
const test = require('./test');

function stringPeeler(string) {
  if (!string || string.length <= 2) {
    return null;
  }
  const arr = string.split('');
  arr.splice(0, 1);
  arr.splice(-1, 1);
  return arr.join('');
}

test(null, stringPeeler('hi'));
test('ell', stringPeeler('Hello'));
test('ohamed Elidriss', stringPeeler('Mohamed Elidrissi'));
