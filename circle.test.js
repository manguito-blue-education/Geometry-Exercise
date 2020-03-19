const { getCircleArea } = require("./geometry");

test("Circle radius => 3", () => {
  expect(getCircleArea(3)).toBe(28.27);
});

test("Circle radius => 12", () => {
  expect(getCircleArea(12)).toBe(452.39);
});

test("Circle radius => 27", () => {
  expect(getCircleArea(27)).toBe(2290.22);
});

test("Circle radius => 89", () => {
  expect(getCircleArea(89)).toBe(24884.56);
});

test("Circle radius => 91", () => {
  expect(getCircleArea(91)).toBe(26015.53);
});
