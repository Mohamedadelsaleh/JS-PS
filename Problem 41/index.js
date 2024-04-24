function shortcut (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u' ]
  return string.split('').filter((el) => !vowels.includes(el)).join('');
}

console.log(shortcut('how are you today?'))