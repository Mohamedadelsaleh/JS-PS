function noBoringZeros(n) {
  let str = n.toString();
  while( str.endsWith(0)){
    str = str.slice(0, str.length - 1)
  }
  return +str;
}

console.log(noBoringZeros(9060000))