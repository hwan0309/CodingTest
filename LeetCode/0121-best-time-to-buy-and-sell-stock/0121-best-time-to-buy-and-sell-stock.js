/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    const m = prices.length;
    let minPrice = Infinity;
    let maxPrice = 0;

  //console.log(less, max)
    for(let i=0; i<m; i++){
     if(prices[i] < minPrice){
        minPrice = prices[i];
     }else if(prices[i] - minPrice > maxPrice){
        maxPrice = prices[i] - minPrice;
     }
    }
    return maxPrice
};