function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const newS = s.split("");
  const newT = t.split("");
  newS.sort();
  newT.sort();

  return newS.join() === newT.join();

  const freqs = Array(26).fill(0);

  const toOrder = (char: string) => char.charCodeAt(0) - 97;

  for (let i = 0; i < s.length; i++) {
    freqs[toOrder(s[i])] += 1;
    freqs[toOrder(t[i])] -= 1;
  }

  return freqs.every((freq) => freq === 0);
}

function isAnagram1(s: string, t: string): boolean {
  let hash1: number = 0;
  let hash2: number = 0;

  const prime = [
    2, 6, 15, 28, 55, 78, 119, 152, 207, 290, 341, 444, 533, 602, 705, 848,
    1003, 1098, 1273, 1420, 1533, 1738, 1909, 2136, 2425, 2626,
  ];

  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    hash1 += prime[s.charCodeAt(i) - 97];
    hash2 += prime[t.charCodeAt(i) - 97];
  }
  return hash1 === hash2;
}
