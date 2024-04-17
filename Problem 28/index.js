function remove (string) {
  // let newStr = string.split("");
  // if(newStr[newStr.length - 1] === "!") {
  //   return newStr.slice(0, -1).join("");
  // }
  // return newStr.join("");

  return string.endsWith('!') ? string.slice(0, -1) : string;
}

  console.log(remove("Hi!"));