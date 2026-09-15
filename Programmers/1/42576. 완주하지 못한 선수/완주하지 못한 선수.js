function solution(participant, completion) {

    
    const map = new Map();
    
    for(let i=0; i< participant.length; i++){
        let a = participant[i]
        map.set(a,(map.get(a) || 0) + 1)
    }
    
    for(let i=0; i< completion.length; i++){
        let b= completion[i];
        map.set(b, map.get(b) - 1)
    }
    
    for(let[key, value] of map){
        if(value > 0){
            return key
        }
    }


}