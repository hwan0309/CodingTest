function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
       const a = commands[i][0];
        const b = commands[i][1];
        const c = commands[i][2];
        
        let sliced = array.slice(a -1, b)
        
        sliced.sort((a,b) => a - b);
        
        answer.push(sliced[c - 1])
    }
    return answer;
}