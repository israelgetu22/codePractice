function goodPair(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; arr.length; i++) {
      if (arr[i] === arr[j]) {
        count = count + 1;
      }
    }
  }
  return count;
}

console.log(goodPair([1, 1, 2, 3, 1, 1, 3]));
