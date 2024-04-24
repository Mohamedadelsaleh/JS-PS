// function solution(str){
//   return str.split('').reverse().join("");
// }

function solution(str){
  let n = ''
  for(let i of str){
    n = i+n
  }
  return n

}


console.log(solution("hello"))