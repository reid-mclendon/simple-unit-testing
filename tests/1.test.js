const { expect } = require("@jest/globals");
const checkFive = require("../src/1");
test("checkFive returns a message about being less than 5 when given a number less than 5", () => {
  expect(checkFive(3)).toBe("3 is less than 5.");
});

test("checkFive returns a message about being equal to 5 when given a number equal to 5", () => {
  expect(checkFive(5)).toBe("5 is equal to 5.");
});

test("checkFive returns a message about being equal to 5 when given a number equal to 5", () => {
  expect(checkFive(5)).toBe("5 is equal to 5.");
});

test("checkFive returns a message about being greater than 5 when given a number greater than 5", () => {
  expect(checkFive(7)).toBe("7 is greater than 5.");
});
