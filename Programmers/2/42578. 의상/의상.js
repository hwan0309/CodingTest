function solution(clothes) {
    var answer = 1;
    
    const map = new Map();
    
    for(let [name, type] of clothes){
        map.set(type,(map.get(type) || 0) + 1)

    }
    
    for(let [type, count] of map){
        answer *= (count + 1)
    }
    
    return answer -1 ;
}