function solution(citations) {
    //정렬
    //인덱스가 현재 값보다 커지는 순간 리턴
    
    //내림차순
    citations.sort((a,b) => b - a)
    
    let h = 0
    for(let i=0; i< citations.length; i++){
        if(citations[i] >= i + 1){
            h = i + 1
        }else{
            break;
        }
    }
    return h
}