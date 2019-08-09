// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// @author Mohamed Elidrissi
const test = require('./test');

function isSquare(n) {
  for (let i = 0; i <= n; i++) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
}

test(false, isSquare(-1));
test(true, isSquare(0));
test(false, isSquare(26));
