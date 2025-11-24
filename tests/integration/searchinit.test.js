const {
  linearSearch,
  binarySearch,
  ternarySearch,
} = require("../../algorithms/search");

describe("Integration Tests: Search Algorithms", () => {
  // -------------------------------
  // COMMON DATASETS
  // -------------------------------
  const sorted = [1, 3, 5, 7, 9, 11, 13];
  const reversed = [...sorted].reverse();
  const withDuplicates = [2, 2, 2, 3, 3, 4, 10, 10];
  const empty = [];
  const single = [42];

  // ------------------------------------
  // 1. Search should behave consistently
  // ------------------------------------
  test("All search algorithms should find correct index in sorted array", () => {
    expect(linearSearch(sorted, 7)).toBe(3);
    expect(binarySearch(sorted, 7)).toBe(3);
    expect(ternarySearch(sorted, 7)).toBe(3);

    // negative test
    expect(linearSearch(sorted, 100)).toBe(-1);
    expect(binarySearch(sorted, 100)).toBe(-1);
    expect(ternarySearch(sorted, 100)).toBe(-1);
  });

  // ----------------------------------------------------------
  // 2. Searching in empty array → all algorithms must return -1
  // ----------------------------------------------------------
  test("Searching in an empty array", () => {
    expect(linearSearch(empty, 5)).toBe(-1);
    expect(binarySearch(empty, 5)).toBe(-1);
    expect(ternarySearch(empty, 5)).toBe(-1);
  });

  // ----------------------------------------------------------
  // 3. Single-element array behaviour
  // ----------------------------------------------------------
  test("Single-element array: match and no match", () => {
    expect(linearSearch(single, 42)).toBe(0);
    expect(binarySearch(single, 42)).toBe(0);
    expect(ternarySearch(single, 42)).toBe(0);

    expect(linearSearch(single, 5)).toBe(-1);
    expect(binarySearch(single, 5)).toBe(-1);
    expect(ternarySearch(single, 5)).toBe(-1);
  });

  // ----------------------------------------------------------
  // 4. Duplicates: linear returns first match, binary/ternary *may differ*
  // ----------------------------------------------------------
  test("Array with duplicates", () => {
    expect(linearSearch(withDuplicates, 2)).toBe(0);

    // binarySearch may give index 0 or 1 → check "one of" but in extended style
    const bIndex = binarySearch(withDuplicates, 2);
    expect([0, 1]).toContain(bIndex);

    const tIndex = ternarySearch(withDuplicates, 2);
    expect([0, 1]).toContain(tIndex);

    // negative case
    expect(linearSearch(withDuplicates, 999)).toBe(-1);
    expect(binarySearch(withDuplicates, 999)).toBe(-1);
    expect(ternarySearch(withDuplicates, 999)).toBe(-1);
  });

  // ----------------------------------------------------------
  // 5. Binary & ternary should NOT work on unsorted data → mismatch expected
  // ----------------------------------------------------------
  test("Binary/Ternary search mismatch on unsorted or reversed array", () => {
    // linear works
    expect(linearSearch(reversed, 7)).toBe(3);

    // binary/ternary MUST fail (return -1)
    expect(binarySearch(reversed, 7)).toBe(-1);
    expect(ternarySearch(reversed, 7)).toBe(-1);

    // not equal tests
    expect(binarySearch(reversed, 7)).not.toBe(3);
    expect(ternarySearch(reversed, 7)).not.toBe(3);
  });

  // ----------------------------------------------------------
  // 6. Large dataset behaviour
  // ----------------------------------------------------------
  test("Large array search integration", () => {
    const large = Array.from({ length: 5000 }, (_, i) => i * 2);

    expect(linearSearch(large, 6000)).toBe(3000);
    expect(binarySearch(large, 6000)).toBe(3000);
    expect(ternarySearch(large, 6000)).toBe(3000);

    // negative
    expect(binarySearch(large, 7777)).toBe(-1);
    expect(ternarySearch(large, 7777)).toBe(-1);
  });

  // ----------------------------------------------------------
  // 7. Cross-check: all algorithms should agree on first/last element
  // ----------------------------------------------------------
  test("Searching boundary values", () => {
    expect(linearSearch(sorted, 1)).toBe(0);
    expect(binarySearch(sorted, 1)).toBe(0);
    expect(ternarySearch(sorted, 1)).toBe(0);

    expect(linearSearch(sorted, 13)).toBe(6);
    expect(binarySearch(sorted, 13)).toBe(6);
    expect(ternarySearch(sorted, 13)).toBe(6);
  });

  // ----------------------------------------------------------
  // 8. Not-equal tests: ensure incorrect results do NOT match
  // ----------------------------------------------------------
  test("Negative (not-equal) tests", () => {
    expect(linearSearch(sorted, 9)).not.toBe(-1);
    expect(binarySearch(sorted, 9)).not.toBe(-1);

    // target not present
    expect(linearSearch(sorted, 100)).not.toBe(3);
    expect(binarySearch(sorted, 100)).not.toBe(3);
    expect(ternarySearch(sorted, 100)).not.toBe(3);
  });
});
