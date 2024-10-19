function isPerfectSquare(num: number): boolean {
  if (Math.ceil(Math.sqrt(num)) === Math.floor(Math.sqrt(num))) {
    return true;
  } else {
    return false;
  }
}
