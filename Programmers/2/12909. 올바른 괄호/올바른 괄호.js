function solution(s){
    var answer = true;
    const m = s.length;
    const stack = [];
    
    for(let i =0; i<m; i++){
        if(s[i] === "("){
            stack.push("(");
            
        }else{
            if(stack.length === 0){
                return false
            }
            stack.pop();
        }
         
    }

    return stack.length === 0;
}