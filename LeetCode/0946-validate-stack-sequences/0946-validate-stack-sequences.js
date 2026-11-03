/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {

    stack = []
    popIdx = 0

    for(let x of pushed){
        stack.push(x);

        while(stack.length > 0 && stack[stack.length - 1]  === popped[popIdx]){
            stack.pop();
            popIdx++
        }
    }
    return stack.length === 0 
    
};