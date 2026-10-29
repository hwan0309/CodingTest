function solution(k, tangerine) {
    //k만큼 담아야 함 
    //tangerine 정렬 후 
    //맵에 넣고 value 값을 최소한으로 k 에 맞춰 뽑아야한다?
    //[1 22 33 4 55]  = 3
    
    const map = new Map();
    
    for(const t of tangerine){
        map.set(t,(map.get(t) || 0) + 1)
    }
    
    const count = [...map.values()].sort((a, b) => b - a);
    
    let sum =0;
    let answer = 0;
    
    for(c of count){
        sum += c;
        answer++
        if(sum >= k) break
    }
    
    return answer
    
}