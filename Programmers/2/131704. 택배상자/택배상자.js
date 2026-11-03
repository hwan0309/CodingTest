function solution(order) {
    let stack = []
    let box = 1
    let i = 0
    
    while (i < order.length){
        let target = order[i]
        
        if(box === target){
            box++
            i++
        }
        else if(stack.length > 0 && stack[stack.length - 1] === target){
            stack.pop();
            i++
        }
        else if(box <= order.length){
            stack.push(box)
            box++
        }else{
            break;
        }
    }
    return i
}