const {
  naiveStringMatching,
  rabinKarp,
  knuthMorrisPratt,
  boyerMoore,
} = require("../../algorithms/strings/string");

describe("String Algorithms Integration Tests", () => {
  const text = "abracadabra";
  const pattern = "abra";

  test("All algorithms find same positions for a given pattern", () => {
    const naiveResult = naiveStringMatching(text, pattern);
    const rkResult = rabinKarp(text, pattern);
    const kmpResult = knuthMorrisPratt(text, pattern);
    const bmResult = boyerMoore(text, pattern);
    expect(naiveResult).toEqual(rkResult);
    expect(naiveResult).toEqual(kmpResult);
    expect(naiveResult).toEqual(bmResult);
  });

  test("Algorithms return empty array for non-existent pattern", () => {
    const nonexistentPattern = "xyz";

    expect(naiveStringMatching(text, nonexistentPattern)).toEqual([]);
    expect(rabinKarp(text, nonexistentPattern)).toEqual([]);
    expect(knuthMorrisPratt(text, nonexistentPattern)).toEqual([]);
    expect(boyerMoore(text, nonexistentPattern)).toEqual([]);
  });

  test("Algorithms handle empty text", () => {
    const emptyText = "";

    expect(naiveStringMatching(emptyText, pattern)).toEqual([]);
    expect(rabinKarp(emptyText, pattern)).toEqual([]);
    expect(knuthMorrisPratt(emptyText, pattern)).toEqual([]);
    expect(boyerMoore(emptyText, pattern)).toEqual([]);
  });

  test("Algorithms handle empty pattern", () => {
    const emptyPattern = "";

    expect(naiveStringMatching(text, emptyPattern)).toEqual(
      Array.from({ length: text.length + 1 }, (_, i) => i)
    );
    expect(rabinKarp(text, emptyPattern)).toEqual(
      Array.from({ length: text.length + 1 }, (_, i) => i)
    );
    expect(knuthMorrisPratt(text, emptyPattern)).toEqual(
      Array.from({ length: text.length + 1 }, (_, i) => i)
    );
    expect(boyerMoore(text, emptyPattern)).toEqual(
      Array.from({ length: text.length + 1 }, (_, i) => i)
    );
  });

  test("Algorithms handle repeated patterns", () => {
    const repeatedText = "aaaaa";
    const repeatedPattern = "aa";
    const expected = [0, 1, 2, 3];

    expect(naiveStringMatching(repeatedText, repeatedPattern)).toEqual(
      expected
    );
    expect(rabinKarp(repeatedText, repeatedPattern)).toEqual(expected);
    expect(knuthMorrisPratt(repeatedText, repeatedPattern)).toEqual(expected);
    expect(boyerMoore(repeatedText, repeatedPattern)).toEqual(expected);
  });

  test("Algorithms handle pattern longer than text", () => {
    const shortText = "hi";
    const longPattern = "hello";

    expect(naiveStringMatching(shortText, longPattern)).toEqual([]);
    expect(rabinKarp(shortText, longPattern)).toEqual([]);
    expect(knuthMorrisPratt(shortText, longPattern)).toEqual([]);
    expect(boyerMoore(shortText, longPattern)).toEqual([]);
  });
});
