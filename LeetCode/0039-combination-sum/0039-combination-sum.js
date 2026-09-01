/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    function backtrack(start, remain, current){
        //종료조건 
        //remain 값이 target 과 같은 경우
        if(remain === 0){
            result.push([...current]);
            return
        }

        //과정
        //타겟을 초과한 경우
       if(remain < 0){
        return;
       }

      for(let i = start; i<candidates.length; i++){
        current.push(candidates[i]);

        backtrack(i, remain - candidates[i], current);

        current.pop();
      }

    }
    backtrack(0, target, [])
    return result
    
};