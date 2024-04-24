function getAverage(marks){
  return Math.floor((marks.reduce((acc, val) => acc + val)) / marks.length);
}

console.log(getAverage([1,5,87,45,8,8]))