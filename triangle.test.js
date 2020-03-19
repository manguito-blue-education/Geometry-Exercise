const { getTriangleArea } = require("./geometry");

test("Triangle 3x2", () => {
  expect(getTriangleArea(3, 2)).toBe(3);
});

test("Triangle 5x4", () => {
  expect(getTriangleArea(5, 4)).toBe(10);
});

test("Triangle 10x10", () => {
  expect(getTriangleArea(10, 10)).toBe(50);
});

test("Triangle 0x60", () => {
  expect(getTriangleArea(0, 60)).toBe(0);
});

test("Triangle 12x11", () => {
  expect(getTriangleArea(12, 11)).toBe(66);
});
