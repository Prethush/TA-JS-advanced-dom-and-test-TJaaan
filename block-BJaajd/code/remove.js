function removeArray(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}

module.exports = removeArray;
