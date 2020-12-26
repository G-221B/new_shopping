export function removeLastItemByVal(arr, val) {
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    const item = arr[i];
    if (item === val) {
      arr.splice(i, 1);
      return;
    }
  }
}
