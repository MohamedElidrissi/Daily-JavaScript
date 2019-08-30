// https://dev.to/thepracticaldev/daily-challenge-9-what-s-your-number-3707
// @author Mohamed Elidrissi
const test = require('./test');

function createPhoneNumber(...nums) {
  if (nums.length !== 10) {
    return null;
  }

  for (let n of nums) {
    if (n < 0 || n > 9) return null;
  }

  function format(str, o) {
    return str.replace(/{([^{}]*)}/g, function(a, b) {
      let r = o[b];
      return typeof r === 'number' ? r : a;
    });
  }

  return format('({0}{1}{2}) {3}{4}{5}-{6}{7}{8}{9}', nums);
}

test('(123) 456-7890', createPhoneNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
test(null, createPhoneNumber(1, 2, 10, 4, -1, 6, 7, 8, 19, 0));
test(null, createPhoneNumber(1, 2, 5, 6, 8, 9, 0));
