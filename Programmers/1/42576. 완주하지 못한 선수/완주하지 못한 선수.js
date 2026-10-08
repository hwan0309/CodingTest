function solution(participant, completion) {
    const map = new Map();
    
    
    for(let i=0; i<participant.length; i++){
        const name = participant[i];
        map.set(name,(map.get(name) || 0 ) + 1)
    }
    
    for(let i=0; i<completion.length; i++){
        const name = completion[i];
        map.set(name,map.get(name) - 1)
    }
    
    for(let[key, value] of map){
        if(value > 0){
            return key
        }
    }
}