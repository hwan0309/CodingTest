function solution(priorities, location) {
    var answer = 0;
    
    //우선순위와 원래 인덱스를 객체로 묶어 큐를 생성
    let queue = priorities.map((priority, index) => {
        return { priority: priority, index: index};
    })
    
    while(queue.length > 0){
        let current = queue.shift();
        
        //큐에 남아있는 것들 중 현재 꺼난것보다 우선순위가 높은것 확인
        let higher = queue.some(process => process.priority > current.priority);
        
        if(higher){
            //우선순위가 더 높다면 다시 큐에 넣기
            queue.push(current)
        }else{
            // 우선순위가 높은게 없다면 카운트
            answer++
            
            //방금 실행한 프로세스가 로케이션과 같다면 현재 카운트 반환
            if(current.index === location){
                return answer
            }
        }
        
    }
}