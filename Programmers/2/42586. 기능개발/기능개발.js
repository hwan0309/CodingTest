function solution(progresses, speeds) {
    var answer = [];
    
    // 각 작업의 남은 배포 일수를 계산한 배열을 생성 (올림처리 Math.ceil)
    const days = progresses.map((progress, index) =>
                  Math.ceil((100 - progress) / speeds[index]));
    
    let maxDay = days[0] //첫번쨰 남은 일수를 기준으로
    let count = 1; //자기 자신은 1
    
    for(let i=1; i< days.length; i++){
        if(days[i] <= maxDay){
            count++
        } else{
            //오래걸리면 이전까지의 카운트를 결과에 넣음
            answer.push(count);
            
            //새로운 배포 기준일 설정 및 카운트 초기화
            maxDay = days[i];
            count = 1
        }
    }
    
    answer.push(count)
    
    
    return answer;
}