function sumArray(array) {
  if (array == null) return 0;
  return array.sort((a, b) => a - b).slice(1, -1)?.reduce((acc, curr) => acc + curr, 0);
}


console.log(sumArray([1,-4,7,12]));