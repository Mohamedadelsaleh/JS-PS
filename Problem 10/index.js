function countPositivesSumNegatives(input) {
  if (input === null) return [];
  let counter = 0;
  let nega = 0;
  input.map((value) => {
    if(value > 0) {
      counter += 1;
    }else if (value < 0) {
      nega += value;
    }
  })
  if (nega === 0 && counter === 0) return [];
  return [counter, nega];
}

console.log(countPositivesSumNegatives([0,0]));