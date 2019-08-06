// https://dev.to/thepracticaldev/daily-challenge-2-string-diamond-21n2
// @author Mohamed Elidrissi
const test = require('./test');

function diamond(size) {
  if (size <= 0 || size % 2 === 0) {
    return null;
  }

  let i = 1,
    reverse = false,
    stars = -1,
    output = '';

  while (i <= size) {
    stars += reverse ? -2 : 2;
    if (i == (size / 2).toFixed()) {
      reverse = true;
    }
    if (stars !== size) {
      output += ' '.repeat((size - stars) / 2);
    }
    output += `${'*'.repeat(stars)}\n`;
    i++;
  }
  return output;
}

test(null, diamond(-3));
test(null, diamond(4));
test(` *\n***\n *\n`, diamond(3));
test(`  *\n ***\n*****\n ***\n  *\n`, diamond(5));

console.log(diamond(5));
