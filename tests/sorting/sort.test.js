
const {
  bubbleSort,
  selectionSort,
  mergeSort,
  quickSort,
} = require("../../algorithms/sorting/sort");

describe("Bubble Sort", () => {

  test("sorts a normal array", () => {
    expect(bubbleSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
  });

  test("sorts an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts array with duplicates", () => {
    expect(bubbleSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test("sorts array with negative numbers", () => {
    expect(bubbleSort([0, -1, 5, -10, 3])).toEqual([-10, -1, 0, 3, 5]);
  });

  test("sorts array with single element", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  test("sorts empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test("does not equal incorrect sorted array", () => {
    expect(bubbleSort([5, 2, 9, 1])).not.toEqual([5, 2, 9, 1]);
  });

  test("does not equal array with missing element", () => {
    expect(bubbleSort([3, 1, 2])).not.toEqual([1, 2]);
  });
});

describe("Selection Sort", () => {

  test("sorts a normal array", () => {
    expect(selectionSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
  });

  test("sorts an already sorted array", () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse array", () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts array with duplicates", () => {
    expect(selectionSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test("sorts array with negative numbers", () => {
    expect(selectionSort([0, -1, 5, -10, 3])).toEqual([-10, -1, 0, 3, 5]);
  });

  test("sorts array with single element", () => {
    expect(selectionSort([42])).toEqual([42]);
  });

  test("sorts empty array", () => {
    expect(selectionSort([])).toEqual([]);
  });

  test("does not equal unsorted array", () => {
    expect(selectionSort([5, 4, 3, 2])).not.toEqual([5, 4, 3, 2]);
  });

  test("does not equal array with wrong order", () => {
    expect(selectionSort([3, 1, 2])).not.toEqual([3, 2, 1]);
  });
});

describe("Merge Sort", () => {

  test("sorts a normal array", () => {
    expect(mergeSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
  });

  test("sorts an already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse array", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts array with duplicates", () => {
    expect(mergeSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test("sorts array with negative numbers", () => {
    expect(mergeSort([0, -1, 5, -10, 3])).toEqual([-10, -1, 0, 3, 5]);
  });

  test("sorts array with single element", () => {
    expect(mergeSort([42])).toEqual([42]);
  });

  test("sorts empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("does not equal incorrectly sorted array", () => {
    expect(mergeSort([3, 1, 4, 2])).not.toEqual([4, 3, 2, 1]);
  });

  test("does not equal array with missing element", () => {
    expect(mergeSort([3, 1, 4, 2])).not.toEqual([1, 2, 3]);
  });
});

describe("Quick Sort", () => {
 
  test("sorts a normal array", () => {
    expect(quickSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
  });

  test("sorts an already sorted array", () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse array", () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts array with duplicates", () => {
    expect(quickSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test("sorts array with negative numbers", () => {
    expect(quickSort([0, -1, 5, -10, 3])).toEqual([-10, -1, 0, 3, 5]);
  });

  test("sorts array with single element", () => {
    expect(quickSort([42])).toEqual([42]);
  });

  test("sorts empty array", () => {
    expect(quickSort([])).toEqual([]);
  });

  test("does not equal reversed array", () => {
    expect(quickSort([8, 3, 5, 1])).not.toEqual([8, 5, 3, 1]);
  });

  test("does not equal unsorted array", () => {
    expect(quickSort([5, 4, 2, 1])).not.toEqual([5, 4, 2, 1]);
  });
});
