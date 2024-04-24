function rentalCarCost(d) {
  const totalCost = d * 40;
  let payed;
  if(d >= 7) {
    return payed = totalCost - 50;
  }else if(d >= 3 && d < 7 ){
    return payed = totalCost - 20;
  }else {
    return payed = totalCost
  }
}

  console.log(rentalCarCost(7));