function removeEveryOther(arr){
  // let newArr = [];
  // for(let i=0; i < arr.length; i++) {
  //   if(i%2 === 0){
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;
  return arr.filter((_, i) => i % 2 === 0 )
}

  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));