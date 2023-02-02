function defan(address) {
  const rep = /\./g;
  const res = address.replace(rep, "[.]");
  return res;
}

console.log("Output: " + defan("1.1.1.1"));
console.log("Output: " + defan("225.144.196.1.0"));
