function countSheeps(sheep) {
  let sheepCount = 0;
  sheep.map(shep => shep ? sheepCount++ : sheepCount)
  return sheepCount;
}

console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));