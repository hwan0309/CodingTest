function solution(prices) {
    let stack = []
    let answer = new Array(prices.length).fill(0)
    
    for(let i=0; i<prices.length; i++){
        
        while(stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]){
            const pop = stack.pop()
            
            answer[pop] = i - pop
        }
        stack.push(i)
    }
   while(stack.length > 0){
       const popIdx = stack.pop();
       answer[popIdx] =prices.length -1 - popIdx
   }
    return answer
}