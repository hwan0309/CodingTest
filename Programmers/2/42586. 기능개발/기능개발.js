function solution(progresses, speeds) {
    answer = []
    
    let Newprocess = progresses.map((process, index) => {
        return Math.ceil((100 - process) / speeds[index])
    });
    
    let count = 1
    let Arr = Newprocess[0]
    
    for(let i=1; i<progresses.length; i++){
        if(Arr >= Newprocess[i]){
            count++
        }else{
            answer.push(count)
            Arr = Newprocess[i];
            count = 1
        }
    }
    answer.push(count)
    return answer
    
}