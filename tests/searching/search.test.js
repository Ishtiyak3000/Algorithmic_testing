const {
  linearSearch,
  binarySearch,
  ternarySearch,
} = require("../../algorithms/searching/search");

describe("Search Algorithms", () => {

  describe("linearSearch", () => {
    test("should find element in middle", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(linearSearch(arr, 3)).toBe(2);
    });

    test("should find first element", () => {
      const arr = [10, 20, 30];
      expect(linearSearch(arr, 10)).toBe(0);
    });

    test("should find last element", () => {
      const arr = [10, 20, 30];
      expect(linearSearch(arr, 30)).toBe(2);
    });

    test("should return -1 if element not found", () => {
      const arr = [1, 2, 3];
      expect(linearSearch(arr, 4)).toBe(-1);
    });

    test("should handle empty array", () => {
      expect(linearSearch([], 1)).toBe(-1);
    });

    test("should handle negative numbers", () => {
      const arr = [-5, -3, -1, 0, 2];
      expect(linearSearch(arr, -3)).toBe(1);
      expect(linearSearch(arr, -10)).toBe(-1);
    });

    test("should handle array with duplicates", () => {
      const arr = [1, 2, 2, 2, 3];
      expect(linearSearch(arr, 2)).toBe(1);
    });
  });

  describe("binarySearch", () => {
    test("should find element in middle", () => {
      const arr = [1, 3, 5, 7, 9];
      expect(binarySearch(arr, 5)).toBe(2);
    });

    test("should find first element", () => {
      const arr = [2, 4, 6, 8];
      expect(binarySearch(arr, 2)).toBe(0);
    });

    test("should find last element", () => {
      const arr = [2, 4, 6, 8];
      expect(binarySearch(arr, 8)).toBe(3);
    });

    test("should return -1 if element not found", () => {
      const arr = [1, 2, 3, 4];
      expect(binarySearch(arr, 5)).toBe(-1);
    });

    test("should handle empty array", () => {
      expect(binarySearch([], 1)).toBe(-1);
    });

    test("should handle negative numbers", () => {
      const arr = [-10, -5, 0, 5, 10];
      expect(binarySearch(arr, -5)).toBe(1);
      expect(binarySearch(arr, -15)).toBe(-1);
    });

    test("should handle array with duplicates", () => {
      const arr = [1, 2, 2, 2, 3];
      const result = binarySearch(arr, 2);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(3);
    });
  });

  describe("ternarySearch", () => {
    test("should find element in middle", () => {
      const arr = [1, 3, 5, 7, 9];
      expect(ternarySearch(arr, 5)).toBe(2);
    });

    test("should find first element", () => {
      const arr = [2, 4, 6, 8];
      expect(ternarySearch(arr, 2)).toBe(0);
    });

    test("should find last element", () => {
      const arr = [2, 4, 6, 8];
      expect(ternarySearch(arr, 8)).toBe(3);
    });

    test("should return -1 if element not found", () => {
      const arr = [1, 2, 3, 4];
      expect(ternarySearch(arr, 5)).toBe(-1);
    });

    test("should handle empty array", () => {
      expect(ternarySearch([], 1)).toBe(-1);
    });

    test("should handle negative numbers", () => {
      const arr = [-10, -5, 0, 5, 10];
      expect(ternarySearch(arr, -5)).toBe(1);
      expect(ternarySearch(arr, -15)).toBe(-1);
    });

    test("should handle array with duplicates", () => {
      const arr = [1, 2, 2, 2, 3];
      const result = ternarySearch(arr, 2);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(3);
    });
  });
  
  describe("Negative / not equal tests", () => {
    test("linearSearch should not return wrong index", () => {
      const arr = [1, 2, 3];
      expect(linearSearch(arr, 2)).not.toBe(0);
    });

    test("binarySearch should not return wrong index", () => {
      const arr = [1, 2, 3];
      expect(binarySearch(arr, 3)).not.toBe(1);
    });

    test("ternarySearch should not return wrong index", () => {
      const arr = [1, 2, 3];
      expect(ternarySearch(arr, 1)).not.toBe(2);
    });
  });
});
