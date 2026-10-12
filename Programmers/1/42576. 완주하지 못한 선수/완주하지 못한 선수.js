function solution(participant, completion) {
    
    //새로운 맵을 만든 후, participant 값을 key와 value로 담음
    //completion에서 맵을 가져와서 값이 있으면 value -1
    //for문으로 map을 순회하면서 value 값이 0 이상이면 key 리턴
    
    const map = new Map();
    
    for(let i=0; i<participant.length; i++){
        let name = participant[i];
        map.set(name, (map.get(name) || 0) + 1)
    }
    
    for(let j=0; j<completion.length; j++){
        let name = completion[j];
        map.set(name, map.get(name)  - 1);
    }
    
    for(let [key, value] of map){
        if(value > 0){
            return key
        }
    }
}