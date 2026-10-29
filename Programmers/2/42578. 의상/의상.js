function solution(clothes) {
    
    
    
    //새로운 맵을 만든 후 key value 중 value 값을 key로 추가
    //answer * 후 마지막에 answer -1
    
    const map = new Map();
    
    for(const [name, type] of clothes){
        map.set(type,(map.get(type) || 0) + 1)
    }
    
    let answer = 1
    
    for(let value of map.values()){
        answer *= (value +1)
    }
    
    return answer -1
}