function createArray(number){
  let newArray = [];
  
  for(let counter = 0; counter < number; counter++){
    newArray.push(counter + 1 );
  }
  
  return newArray;
}

  console.log(createArray(5));