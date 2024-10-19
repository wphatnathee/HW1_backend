function longestCommonPrefix(strs: string[]): string {
  let sorted = strs.sort((a, b) => (a < b ? -1 : 1));
  let output = "";
  let firstword = sorted[0];
  let lastword = sorted[sorted.length - 1];

  for (let i = 0; i < firstword.length; i++) {
    if (firstword[i] === lastword[i]) {
      output += firstword[i];
    } else {
      break;
    }
  }
  return output;
}

function longestCommonPrefix1(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let word = "";

  while (strs.every((str) => str.startsWith(word))) {
    const newWord = strs[0].substr(0, word.length + 1);

    if (newWord.length > word.length) {
      word = newWord;
    } else if (newWord.length === word.length) {
      return word;
    } else {
      break;
    }
  }

  return word.slice(0, -1);
}
