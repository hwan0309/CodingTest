/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {

    //시뮬레이션
    //pop인덱스를 0으로 만들고, 스택 빈 배열을 생성
    //pused값을 순회하면서 stack 에 담고 while문으로 stack length > 0 , stack[stack.length - 1 ] = pushed[idx] 값을 검증
    //일치하면 stack pop idx++ 
    //스택값이 비어있으면 리턴

    stack = []
    popIdx = 0

    for(let x of pushed){
        stack.push(x);

        while(stack.length > 0 && stack[stack.length - 1] === popped[popIdx]){
            stack.pop();
            popIdx++
        }
    }
    return stack.length === 0
    
};