/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

 //금액을 만들 수 있는 최소 동전 개수 
 //만들 수 없다면 0

//dp[i] = min(dp[i], dp[i -coin] + 1)


var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for(let i=1; i<= amount; i++){
        for(let coin of coins){
            if(i - coin >= 0){
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]

};