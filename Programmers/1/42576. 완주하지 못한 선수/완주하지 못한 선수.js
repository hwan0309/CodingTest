function solution(participant, completion) {
    const map = new Map();
    
    for(let i=0; i<participant.length; i++){
        let name = participant[i];
        map.set(name, (map.get(name) || 0) + 1)
        
    }
    for(let j=0; j<completion.length; j++){
        let name = completion[j]
        map.set(name, map.get(name) -1)
    }
    
    for(let[key, value] of map){
        if(value > 0){
            return key
        }
    }
}