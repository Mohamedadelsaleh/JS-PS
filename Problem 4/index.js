// function repeatStr (n, s) {
//   if(n > 1) {
//     let str = s;
//     for(var i = 1; i < n; i++) {
//       str += s;
//     }
//     return str;
//   }else {
//     return s
//   }
// }


function repeatStr (n, s) {
  return s.repeat(n)
}

console.log(repeatStr(6, "a"));