/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    const result = [];

    function backtrack(current){
        //종료조건 길이와 같으면 종료
        if(current.length === nums.length){
            result.push([...current])
            return
        }

        for(let i=0; i<nums.length; i++){
            //이미 선택한 숫자는 패스
            if(current.includes(nums[i])) continue;
            
            //선택
            current.push(nums[i]);

            //다음 탐색
            backtrack(current);

            //백트래킹
            current.pop();
        }
    }

    backtrack([])
    return result;
    
};