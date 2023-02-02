function isAnagram(s, t) {
  let first = s.split("").sort();
  let second = t.split("").sort();
  console.log(first);
  console.log(second);
  if (first.length !== second.length)
    return "This word not have the same length";

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return "It is NOT Anagram!";
    }
  }
  return "It is Anagram";
}

let result = isAnagram("anagram", "nagaram");
let result2 = isAnagram("anagram", "nagarah");

console.log(result);
console.log(result2);
