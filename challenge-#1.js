// https://dev.to/thepracticaldev/daily-challenge-1-string-peeler-4nep
// @author Mohamed Elidrissi

function stringPeeler(string) {
  if (!string || string.length <= 2) {
    return null;
  }
  const arr = string.split("");
  arr.splice(0, 1);
  arr.splice(-1, 1);
  return arr.join("");
}

function test(string, expected) {
  const actual = stringPeeler(string);
  console.assert(expected === actual, `Expected ${expected} but got ${actual}`);
}

test("hi", null);
test("Hello", "ell");
test("Mohamed Elidrissi", "ohamed Elidriss");
