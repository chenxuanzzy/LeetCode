/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  prices.map((num, index) => {
    let current = prices[index];
    min = Math.min(min, current);
    max = Math.max(max, current - min);
  });
  return max;
};

//Time Complexity: O(n)
//Space Complexity: O(1)
