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
  ternarySearch,
};
