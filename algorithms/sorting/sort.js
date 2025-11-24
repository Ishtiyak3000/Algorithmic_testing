function bubbleSort(arr) {
  const n = arr.length;
  const result = [...arr];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}
function selectionSort(arr) {
  const n = arr.length;
  const result = [...arr];
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      const temp = result[i];
      result[i] = result[minIndex];
      result[minIndex] = temp;
    }
  }
  return result;
}
function mergeSort(arr) {
  if (arr.length <= 1) return [...arr];

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}
function quickSort(arr) {
  if (arr.length <= 1) return [...arr];

  const result = [...arr];
  quickSortHelper(result, 0, result.length - 1);
  return result;
}

function quickSortHelper(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSortHelper(arr, low, pi - 1);
    quickSortHelper(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

module.exports = {
  bubbleSort,
  selectionSort,
  mergeSort,
  quickSort,
};
