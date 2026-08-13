function solution(n, lost, reserve) {

    //번호순으로 정렬(그리디 탐색 위해)
    
    lost.sort((a,b) => a-b);
    reserve.sort((a,b)=> a-b);
    
    //도난 당했지만 여벌이 있는 학생 제외
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));
    
    let answer = n - realLost.length;
    
    for(let i=0; i<realLost.length; i++){
        let student = realLost[i];
        
        if(realReserve.includes(student -1)){
            realReserve = realReserve.filter(r => r !== student -1);
            answer++
        }else if(realReserve.includes(student + 1)){
            realReserve = realReserve.filter(r => r!== student + 1);
            answer++
        }
    }
    
    return answer;
}