/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    const answer = []

    function backtrack(currentPath, visited){
        if(currentPath.length === nums.length){
            answer.push([...currentPath])
            return
        }

        for(let i=0; i<nums.length; i++){
            if(visited[i]) continue;

            visited[i] = true
            currentPath.push(nums[i]);

            backtrack(currentPath, visited)

            currentPath.pop();
            visited[i] = false
        }
    }
    backtrack([], new Array(nums.length).fill(false))
    return answer
};