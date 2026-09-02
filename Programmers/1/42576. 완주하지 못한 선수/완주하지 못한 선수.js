function solution(participant, completion) {
//     var answer = '';
//     participant.sort();
//     completion.sort();
    
//     for(let i=0; i<participant.length; i++){
//         if(participant[i] !== completion[i]) return participant[i]
        
//     }
    
    const map = new Map();
    
    for(let i=0; i<participant.length; i++){
        const name = participant[i];
        map.set(name,(map.get(name) || 0) +1)
    }
    for(let j=0; j<completion.length; j++){
        const name = completion[j];
        map.set(name,(map.get(name) || 0 ) - 1)
    }
    
    for(const[name, count] of map){
        if(count > 0){
            return name
        }
    }

}