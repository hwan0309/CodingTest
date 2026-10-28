function solution(clothes) {
    
    //1번옷 입기 + 2번옷 입기 + 안입기
    //(종류 a + 1) * (종류 b + 1) - 1
    //clothes를 map에 담아서 종류별로 개수를 세기
    
    const map = new Map();
    
    for(const [name, type] of clothes){
        map.set(type, (map.get(type) || 0) + 1)
    }
    
    let answer = 1
    
    for(const value of map.values()){
        answer *= (value + 1)
    }
    return answer - 1
}