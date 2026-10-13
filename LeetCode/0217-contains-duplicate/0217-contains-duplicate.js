/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        let name = nums[i];
        map.set(name, (map.get(name) || 0) + 1)
    }

    for(let [key , value] of map){
        if(value >= 2){
            return true
        }
    }
    return false

    // for(let i=0; i<nums.length; i++){
    //     for(let j= i+1; j<nums.length; j++){
    //         if(nums[i] === nums[j]){
    //             return true
    //         }else{
    //             return false
    //         }
    //     }
    // }
};