/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //맵을 새로 만들고, 정렬을 한 후 key 값을 저장하고, 동일한 값이 있으면 + 1 증가,
    //k개수만큼 맵에서 제일 높은 key 리턴

    const map = new Map();

    for(const num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }

    const buck = Array.from({length:nums.length + 1}, () => []);

    for(const [num, count] of map){
        buck[count].push(num)
    }

    result = [];
    for(let i= buck.length - 1; i >= 0 && result.length < k; i--){
        if(buck[i].length > 0){
            result.push(...buck[i])
        }
    }
    return result.slice(0, k)


    
};