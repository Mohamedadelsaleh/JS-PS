function findAverage(array) {
  if (array && array.length > 0) {
    return (array.reduce((acc, curr) => acc + curr)) / array.length
  }
  return 0;
}

console.log(findAverage([1,2,5]));