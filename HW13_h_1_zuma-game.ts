function findMinStep(board: string, hand: string): number {
  let res = hand.length + 1;
  let recursion = function (board, hand, cnt) {
    if (board.length === 0) {
      res = Math.min(res, cnt);
      return;
    }

    if (cnt >= res || hand.length === 0) return;
    let set = new Set();
    for (let i = 0; i < hand.length; i++) {
      if (set.has(hand[i])) continue;
      for (let j = 0; j < board.length; j++) {
        if (
          j < board.length - 1 &&
          board[j] === board[j + 1] &&
          hand[i] === board[j]
        )
          continue;
        let newBoard = board.slice(0, j + 1) + hand[i] + board.slice(j + 1);
        recursion(
          simplifyBoard(newBoard),
          hand.slice(0, i) + hand.slice(i + 1),
          cnt + 1
        );
      }
      set.add(hand[i]);
    }
  };

  recursion(board, hand, 0);
  return res === hand.length + 1 ? -1 : res;
}

let simplifyBoard = function (board) {
  let str = "";
  let simplied = false;
  for (let i = 0; i < board.length; i++) {
    if (
      i < board.length - 2 &&
      board[i] === board[i + 1] &&
      board[i + 1] === board[i + 2]
    ) {
      i += 2;
      while (board[i] === board[i + 1]) {
        i++;
      }
      simplied = true;
    } else {
      str += board[i];
    }
  }
  return simplied ? simplifyBoard(str) : str;
};
