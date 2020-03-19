const { getSquareArea } = require("./geometry");

test("Square Side => 3", () => {
  expect(getSquareArea(3)).toBe(9);
});

test("Square Side => 12", () => {
  expect(getSquareArea(12)).toBe(144);
});

test("Square Side => 27", () => {
  expect(getSquareArea(27)).toBe(729);
});

test("Square Side => 89", () => {
  expect(getSquareArea(89)).toBe(7921);
});

test("Square Side => 91", () => {
  expect(getSquareArea(91)).toBe(8281);
});
