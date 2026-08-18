function solution(citations) {
    //먼저 정렬 
    //citations[i] 와 i +1 값과 비교해서 더 크면 return
    
    var answer = 0;
    
    citations.sort((a, b) => b - a);
    
    for(let i=0; i<citations.length; i++){
        if(citations[i] >= i +1){
            answer++
        }
    }
    
    return answer;
}