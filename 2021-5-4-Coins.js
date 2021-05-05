// maximum number of combinations of change

const change = function (t, coins = [1, 5, 10, 25]) {
  const dp = Array(t + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= t; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[t];
};

console.log(change(10));
console.log(change(15));
console.log(change(20));
console.log(change(100));
