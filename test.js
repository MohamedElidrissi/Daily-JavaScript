// @author Mohamed Elidrissi

function test(expected, actual) {
  console.assert(expected === actual, `Expected ${expected} but got ${actual}`);
}

module.exports = test;
