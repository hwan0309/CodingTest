function solution(numbers) {
    
    const answer= new Array(numbers.length).fill(-1)
    const stack = []
    
    for(let i=0; i<numbers.length; i++){
        //현재 숫자가 스택의 top 보다 크면, 뒷 큰수를 찾은 것
       while(stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]){
           const index = stack.pop()
           answer[index] = numbers[i]
       }
            stack.push(i)
    }
    return answer
}