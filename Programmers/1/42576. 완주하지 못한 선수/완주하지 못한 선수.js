function solution(participant, completion) {
    
    //참여자 명단에 없으면 리턴
    //참여한 명단을 map에 추가해서 value + 1
    //완료한 명단을 map에 추가해서 value - 1
    //맵에서 value가 0보다 크면 key 리턴
    
    let map = new Map();
    
    for(let i=0; i<participant.length; i++){
        let name = participant[i]
        map.set(name, (map.get(name) || 0) + 1)
    }
    
    for(let j=0; j<completion.length; j++){
        let name = completion[j];
        map.set(name, map.get(name) -1)
      
    }
    
    for(let[key, value] of map){
        if(value > 0){
            return key
        }
    }

}