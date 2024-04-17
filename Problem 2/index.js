function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if( arr[i] >= 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
};


// function positiveSum(arr) {
//   return arr.filter((el) => el >= 0 ).reduce((acc, curr) => acc + curr);
// };



console.log(positiveSum([1,-4,7,12]));