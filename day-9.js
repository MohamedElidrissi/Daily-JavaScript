// https://www.codewars.com/kata/553e6558e848c5a3180000bc
// @author Mohamed Elidrissi
const test = require('./test');

function fibonacci(step) {
  if (step < 0) return null;

  const fib = [0, 1];
  for (let i = 2; i <= step; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[step];
}

test(3, fibonacci(4));
test(0, fibonacci(0));
test(610, fibonacci(15));
test(null, fibonacci(-2));
