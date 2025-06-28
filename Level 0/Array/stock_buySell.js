// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0

function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1]));
