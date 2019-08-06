// https://dev.to/thepracticaldev/daily-challenge-3-vowel-counter-34ni
// @author Mohamed Elidrissi
const test = require('./test');

function vowelsCount(input) {
  return (input.match(/(a|i|e|o|u)/gi) || []).length;
}

test(3, vowelsCount('Hello World'));
test(7, vowelsCount('VSCode is awesome'));
test(0, vowelsCount("Dry 'n cry"));
