/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    //nums의 값이 target과 같으면 nums 인덱스 출력


    for(let i=0; i<nums.length; i++){
        for(let j=i + 1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }

    }
    
};