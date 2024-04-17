function squareOrSquareRoot(array) {
  return array.map((ele) => Number.isInteger(Math.sqrt(ele)) ? Math.sqrt(ele) : ele * ele);  
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));