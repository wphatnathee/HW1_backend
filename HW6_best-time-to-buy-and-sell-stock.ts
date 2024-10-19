function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}

function maxProfit2(prices: number[]): number {
  let minSoFar: number = prices[0];
  let res = 0;

  for (let i = 1; i < prices.length; i++) {
    minSoFar = Math.min(minSoFar, prices[i]);

    res = Math.max(res, prices[i] - minSoFar);
  }
  return res;
}
