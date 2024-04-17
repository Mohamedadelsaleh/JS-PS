function digitize(n) {
  let xd = n.toString().split('').reverse().map((el) => +el);
  return xd;
  
}

console.log(digitize(162843));