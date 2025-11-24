function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
function jumpSearch(arr, target) {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  let curr = step;
  while (curr < n && arr[curr - 1] < target) {
    prev = curr;
    curr += step;
  }

  for (let i = prev; i < Math.min(curr, n); i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) return low;
      return -1;
    }

    const pos =
      low +
      Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[pos] === target) return pos;
    if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }

  return -1;
}
function exponentialSearch(arr, target) {
  const n = arr.length;
  if (n === 0) return -1;

  if (arr[0] === target) return 0;

  let i = 1;
  while (i < n && arr[i] <= target) i *= 2;

  return binarySearchRecursive(arr, target, i / 2, Math.min(i, n - 1));
}
function ternarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const third = Math.floor((right - left) / 3);
  const mid1 = left + third;
  const mid2 = right - third;

  if (arr[mid1] === target) return mid1;
  if (arr[mid2] === target) return mid2;

  if (target < arr[mid1]) return ternarySearch(arr, target, left, mid1 - 1);
  else if (target > arr[mid2])
    return ternarySearch(arr, target, mid2 + 1, right);
  else return ternarySearch(arr, target, mid1 + 1, mid2 - 1);
}

module.exports = {
  linearSearch,
  binarySearch,
  jumpSearch,
  interpolationSearch,
  exponentialSearch,
  ternarySearch,
};
