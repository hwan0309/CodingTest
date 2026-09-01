/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];

    function backtrack(index, current){
        //모든 원소를 결정했으면 만들어진 부분집합을 결과에 추가
        if(index === nums.length){
            result.push([...current]);
            return
        }

        //현재 숫자를 포함하는 경우
        current.push(nums[index]);
        backtrack(index + 1, current);

        //현재 숫자를 포함하지 않은 경우
        current.pop();
        backtrack(index + 1, current)
    }
    backtrack(0,[]);
    return result
};