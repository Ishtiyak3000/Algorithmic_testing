const {
  bubbleSort,
  selectionSort,

  mergeSort,
  quickSort,
} = require("../../algorithms/sorting/sort");

function runAllSorts(arr) {
  return {
    bubble: bubbleSort([...arr]),
    selection: selectionSort([...arr]),
   
    merge: mergeSort([...arr]),
    quick: quickSort([...arr]),
  };
}

describe("Integration Tests: Sorting Algorithms", () => {
  test("Sorts a normal unsorted array", () => {
    const arr = [5, 3, 8, 4, 1];
    const expected = [1, 3, 4, 5, 8];

    const results = runAllSorts(arr);

    expect(results.bubble).toEqual(expected);
    expect(results.selection).toEqual(expected);
    
    expect(results.merge).toEqual(expected);
    expect(results.quick).toEqual(expected);
  });

  test("Already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];

    const results = runAllSorts(arr);

    expect(results.bubble).toEqual(expected);
    expect(results.selection).toEqual(expected);

    expect(results.merge).toEqual(expected);
    expect(results.quick).toEqual(expected);
  });

  test("Reverse sorted array", () => {
    const arr = [9, 7, 5, 3, 1];
    const expected = [1, 3, 5, 7, 9];

    const results = runAllSorts(arr);

    expect(results.bubble).toEqual(expected);
    expect(results.selection).toEqual(expected);

    expect(results.merge).toEqual(expected);
    expect(results.quick).toEqual(expected);
  });

  test("Array with duplicates", () => {
    const arr = [4, 2, 4, 1, 2];
    const expected = [1, 2, 2, 4, 4];

    const results = runAllSorts(arr);

    expect(results.bubble).toEqual(expected);
    expect(results.selection).toEqual(expected);
    expect(results.merge).toEqual(expected);
    expect(results.quick).toEqual(expected);
  });

  test("Single element array", () => {
    const arr = [42];
    const expected = [42];

    const results = runAllSorts(arr);

    expect(results.bubble).toEqual(expected);
    expect(results.selection).toEqual(expected);
    expect(results.merge).toEqual(expected);
    expect(results.quick).toEqual(expected);
  });

  test("Empty array", () => {
    const arr = [];
    const expected = [];

    const results = runAllSorts(arr);

    expect(results.bubble).toEqual(expected);
    expect(results.selection).toEqual(expected);
    expect(results.merge).toEqual(expected);
    expect(results.quick).toEqual(expected);
  });

  test("Consistency: all sorting algorithms return same result", () => {
    const arr = [9, 1, 8, 3, 7, 2];

    const { bubble, selection, merge, quick } = runAllSorts(arr);

    expect(selection).toEqual(bubble);
    expect(merge).toEqual(bubble);
    expect(quick).toEqual(bubble);
  });
});
