/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    if(nums.length === 0) return 0;

    let currentMax = nums[0];
    let currentMin = nums[0];
    let global = nums[0];

    for(let i=1; i<nums.length; i++){
        let currentNum = nums[i];

        let tempMax = currentMax;

        currentMax = Math.max(currentNum, tempMax * currentNum, currentMin * currentNum);
        currentMin = Math.min(currentNum, tempMax * currentNum, currentMin * currentNum);

        global = Math.max(global, currentMax);

    }
    
    return global;
};