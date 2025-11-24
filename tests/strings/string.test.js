const {
  naiveStringMatching,
  rabinKarp,
  knuthMorrisPratt,
  boyerMoore,
} = require("../../algorithms/strings/string");

describe("String Matching Algorithms", () => {

  describe("naiveStringMatching", () => {
    test("should find single match", () => {
      const result = naiveStringMatching("hello", "ell");
      expect(result).toEqual([1]);
    });

    test("should find multiple matches", () => {
      const result = naiveStringMatching("aaaa", "aa");
      expect(result).toEqual([0, 1, 2]);
    });

    test("should return empty array if no match", () => {
      const result = naiveStringMatching("hello", "world");
      expect(result).toEqual([]);
    });

    test("should handle empty text", () => {
      const result = naiveStringMatching("", "a");
      expect(result).toEqual([]);
    });

    test("should handle empty pattern", () => {
      const result = naiveStringMatching("abc", "");
      expect(result).toEqual([0, 1, 2, 3]);
    });
  });

  describe("rabinKarp", () => {
    test("should find single match", () => {
      const result = rabinKarp("hello", "ell");
      expect(result).toEqual([1]);
    });

    test("should find multiple matches", () => {
      const result = rabinKarp("aaaa", "aa");
      expect(result).toEqual([0, 1, 2]);
    });

    test("should return empty array if no match", () => {
      const result = rabinKarp("hello", "world");
      expect(result).toEqual([]);
    });

    test("should handle empty text", () => {
      const result = rabinKarp("", "a");
      expect(result).toEqual([]);
    });

    test("should handle empty pattern", () => {
      const result = rabinKarp("abc", "");
      expect(result).toEqual([0, 1, 2, 3]);
    });
  });

  describe("knuthMorrisPratt", () => {
    test("should find single match", () => {
      const result = knuthMorrisPratt("hello", "ell");
      expect(result).toEqual([1]);
    });

    test("should find multiple matches", () => {
      const result = knuthMorrisPratt("aaaa", "aa");
      expect(result).toEqual([0, 1, 2]);
    });

    test("should return empty array if no match", () => {
      const result = knuthMorrisPratt("hello", "world");
      expect(result).toEqual([]);
    });

    test("should handle empty text", () => {
      const result = knuthMorrisPratt("", "a");
      expect(result).toEqual([]);
    });

    test("should handle empty pattern", () => {
      const result = knuthMorrisPratt("abc", "");
      expect(result).toEqual([0,1,2,3]);
    });
  });

  describe("boyerMoore", () => {
    test("should find single match", () => {
      const result = boyerMoore("hello", "ell");
      expect(result).toEqual([1]);
    });

    test("should find multiple matches", () => {
      const result = boyerMoore("aaaa", "aa");
      expect(result).toEqual([0, 1, 2]);
    });

    test("should return empty array if no match", () => {
      const result = boyerMoore("hello", "world");
      expect(result).toEqual([]);
    });

    test("should handle empty text", () => {
      const result = boyerMoore("", "a");
      expect(result).toEqual([]);
    });

    test("should handle empty pattern", () => {
      const result = boyerMoore("abc", "");
      expect(result).toEqual([0,1,2,3]);
    });
  });

  describe("Negative / not equal tests", () => {
    test("naiveStringMatching should not return wrong indices", () => {
      const result = naiveStringMatching("abc", "b");
      expect(result).not.toEqual([0, 2]);
    });

    test("rabinKarp should not match incorrect substring", () => {
      const result = rabinKarp("abc", "d");
      expect(result).not.toEqual([0]);
    });

    test("knuthMorrisPratt should not match incorrect substring", () => {
      const result = knuthMorrisPratt("abc", "d");
      expect(result).not.toEqual([0]);
    });

    test("boyerMoore should not match incorrect substring", () => {
      const result = boyerMoore("abc", "d");
      expect(result).not.toEqual([0]);
    });
  });
});
