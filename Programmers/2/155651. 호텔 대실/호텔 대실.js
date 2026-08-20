function solution(book_time) {
    var answer = 0;
    
    //시간을 분으로 변환
    const times = book_time.map(([start, end]) => {
        const [sHour, sMin] = start.split(":").map(Number);
        const [eHour, eMin] = end.split(":").map(Number);
        
        //종료시간에 청소시간 포함
        return [sHour * 60 + sMin, eHour * 60 + eMin + 10]
    });
    
    times.sort((a,b) => a[0] - b[0]);
    
    //종료시간을 기록
    const rooms = []
    
    for(const[start, end] of times){
        
        //기존 방들 중 이어서 바로 사용할 수 있는 방이 있는지
        const available = rooms.findIndex(roomEndTime => roomEndTime <= start);
        
        if(available === -1){
            rooms.push(end)
        } else{
            rooms[available] = end
        }
    }
    return rooms.length;
}