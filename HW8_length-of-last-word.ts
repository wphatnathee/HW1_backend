function lengthOfLastWord(s: string): number {
  let n: number = s.length;
  let result: number = 0;
  while (n > 0) {
    n--;
    if (s[n] !== " ") {
      result++;
    } else if (result > 0) {
      return result;
    }
  }
  return result;
}

function lengthOfLastWord1(s: string): number {
  return s.trimEnd().split(" ").pop().length;
}
