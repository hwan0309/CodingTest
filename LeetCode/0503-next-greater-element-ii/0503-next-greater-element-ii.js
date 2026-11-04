/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const stack = []
    const arr = new Array(nums.length).fill(-1)

    for(let i=0; i<2 * nums.length; i++){
        const curIdx = i % nums.length;

        while(stack.length > 0 && nums[curIdx] > nums[stack[stack.length - 1]]){
            let idx = stack.pop();
            arr[idx] = nums[curIdx]

        }
        if(i < nums.length){
            stack.push(curIdx)
        }
    }
   
    return arr
};