function firstNonConsecutive (arr) {
  let number = null;
  for(let i = 0; i < arr.length - 1; i++) {
    if((arr[i] + 1) !== arr[i + 1]) {
      number = arr[i + 1]
      break;
    }
  }
  return number;
}

  console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]));