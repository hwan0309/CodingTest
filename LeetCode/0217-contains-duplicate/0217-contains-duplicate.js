/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // const map = new Map();
    // for(let i=0; i<nums.length; i++){
    //     let name = nums[i];
    //     map.set(name, (map.get(name) || 0) + 1)
    // }

    // for(let [key , value] of map){
    //     if(value >= 2){
    //         return true
    //     }
    // }
    // return false

    //set 중복값 제거 후 배열 길이와 같이 않으면 리턴
    const numsSet = new Set(nums);
    return numsSet.size !== nums.length

  
};