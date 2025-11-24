const {
  linearSearch,
  binarySearch,
  ternarySearch,
} = require("../../algorithms/searching/search");

describe("Integration Tests: Search Algorithms", () => {
  const sorted = [1, 3, 5, 7, 9, 11, 13];
  const reversed = [...sorted].reverse();
  const withDuplicates = [2, 2, 2, 3, 3, 4, 10, 10];
  const empty = [];
  const single = [42];

  test("All search algorithms should find correct index in sorted array", () => {
    expect(linearSearch(sorted, 7)).toBe(3);
    expect(binarySearch(sorted, 7)).toBe(3);
    expect(ternarySearch(sorted, 7)).toBe(3);

    expect(linearSearch(sorted, 100)).toBe(-1);
    expect(binarySearch(sorted, 100)).toBe(-1);
    expect(ternarySearch(sorted, 100)).toBe(-1);
  });

  test("Searching in an empty array", () => {
    expect(linearSearch(empty, 5)).toBe(-1);
    expect(binarySearch(empty, 5)).toBe(-1);
    expect(ternarySearch(empty, 5)).toBe(-1);
  });

  test("Single-element array: match and no match", () => {
    expect(linearSearch(single, 42)).toBe(0);
    expect(binarySearch(single, 42)).toBe(0);
    expect(ternarySearch(single, 42)).toBe(0);

    expect(linearSearch(single, 5)).toBe(-1);
    expect(binarySearch(single, 5)).toBe(-1);
    expect(ternarySearch(single, 5)).toBe(-1);
  });
  test("Array with duplicates", () => {
    expect(linearSearch(withDuplicates, 2)).toBe(0);
    expect(linearSearch(withDuplicates, 999)).toBe(-1);
    expect(binarySearch(withDuplicates, 999)).toBe(-1);
    expect(ternarySearch(withDuplicates, 999)).toBe(-1);
  });

  test("Binary/Ternary search mismatch on unsorted or reversed array", () => {

    expect(linearSearch(reversed, 7)).toBe(3);
    expect(binarySearch(reversed, 7)).toBe(3);
    expect(ternarySearch(reversed, 7)).toBe(-1);
  });

  test("Large array search integration", () => {
    const large = Array.from({ length: 5000 }, (_, i) => i * 2);

    expect(linearSearch(large, 6000)).toBe(3000);
    expect(binarySearch(large, 6000)).toBe(3000);
    expect(ternarySearch(large, 6000)).toBe(3000);
    expect(binarySearch(large, 7777)).toBe(-1);
    expect(ternarySearch(large, 7777)).toBe(-1);
  });

  test("Searching boundary values", () => {
    expect(linearSearch(sorted, 1)).toBe(0);
    expect(binarySearch(sorted, 1)).toBe(0);
    expect(ternarySearch(sorted, 1)).toBe(0);

    expect(linearSearch(sorted, 13)).toBe(6);
    expect(binarySearch(sorted, 13)).toBe(6);
    expect(ternarySearch(sorted, 13)).toBe(6);
  });

  test("Negative (not-equal) tests", () => {
    expect(linearSearch(sorted, 9)).not.toBe(-1);
    expect(binarySearch(sorted, 9)).not.toBe(-1);
    expect(linearSearch(sorted, 100)).not.toBe(3);
    expect(binarySearch(sorted, 100)).not.toBe(3);
    expect(ternarySearch(sorted, 100)).not.toBe(3);
  });
});
