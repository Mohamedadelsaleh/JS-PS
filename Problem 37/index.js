function position(letter){
  const alfa = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alfa.split("").indexOf(letter) + 1}`;
}

  console.log(position("w"));