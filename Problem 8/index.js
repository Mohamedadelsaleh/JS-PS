function makeNegative(num) {
  if(num === 0) return 0;
  return num > 0 ? -num : num;
}

console.log(makeNegative(-10));