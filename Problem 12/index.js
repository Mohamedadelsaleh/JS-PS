// function basicOp(operation, value1, value2){
//   let result;
//   switch (operation) {
//     case '+':
//       result = value1 + value2;
//       break;
//     case '-':
//       result = value1 - value2;
//       break;
//     case '*':
//       result = value1 * value2;
//       break;
//     case '/':
//       result = value1 / value2;
//       break;
//     default:
//       result = 0;
//   }
//   return result;
// }

function basicOp(operation, value1, value2){
  return eval(value1 + operation + value2)
}

console.log( basicOp('*', 4, 7));