// https://dev.to/thepracticaldev/daily-challenge-10-calculator-23n7
// @author Mohamed Elidrissi
const test = require('./test');

// Ikr, why dont I just use javascript's `eval` function?
// Well, it ain't a challenge unless you make it challenging

function calculate(exp) {
  if (exp === undefined || exp === '') return null;

  const divisions = exp.match(/-?[0-9]+\/[0-9]+/g);
  if (divisions !== null) {
    divisions.forEach(v => {
      exp = exp.replace(v, eval(v));
    });
  }

  const multiplications = exp.match(/-?[0-9]+\*[0-9]+/g);
  if (multiplications !== null) {
    multiplications.forEach(v => {
      exp = exp.replace(v, eval(v));
    });
  }

  const substractions = exp.match(/-?[0-9]+\-[0-9]+/g);
  if (substractions !== null) {
    substractions.forEach(v => {
      exp = exp.replace(v, eval(v));
    });
  }

  const additions = exp.match(/-?[0-9]+\+[0-9]+/g);
  if (additions !== null) {
    additions.forEach(v => {
      exp = exp.replace(v, eval(v));
    });
  }

  return eval(exp);
}

// FIXME: Multiple operations with the same operator sometime break the calculator. e.g:
// test(10, calculate('2+2*2*2'));

test(36, calculate('10+2*14-4/2'));
test(28, calculate('18/2-15+34'));
test(46, calculate('8+23+4*5-10/2'));
test(null, calculate(''));
test(null, calculate());
