function isvalid(str) {
    
    const stack = []
    const map = {
        ')' : '(',
        ']': '[',
        '}': '{'
    }
    for(let char of str){
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char)
        }else{
            if(stack.length === 0 || stack[stack.length - 1] !== map[char]){
                return false;
            }  
            stack.pop()
        }
    }
    return stack.length === 0
}

function solution(s){
    answer = 0;
    const n = s.length;
    
    for(let i=0; i<n; i++){
        const rotated = s.slice(i) + s.slice(0, i)
        
        if(isvalid(rotated)){
            answer++
        }
    }
    return answer
}