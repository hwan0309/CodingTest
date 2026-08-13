function solution(name) {
    var answer = 0;
    let minMove = name.length -1;
    
    for(let i=0; i< name.length; i++){
        
        let ascii = name.charCodeAt(i);
        //65 = A
        let up = ascii - 65
        
        //90 = Z
        let down = 90 - ascii + 1;
        answer += Math.min(up, down);
        
        
        //커서 이동 최솟값
        let next = i + 1;
        while(next < name.length && name[next] === 'A'){
            next++
        }
        
        minMove = Math.min(
            minMove,
            (i * 2) + name.length - next,
            (name.length - next) * 2 + i
        );
    }
    return answer + minMove;
}