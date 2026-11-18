function solution(files) {
    // 정규식을 이용해 HEAD, NUMBER, TAIL로 분리
    // ^([a-zA-Z\-\. ]+)  -> HEAD: 영문자, 빼기, 마침표, 공백이 최소 1글자 이상
    // ([0-9]{1,5})        -> NUMBER: 1글자에서 5글자 사이의 숫자
    // (.*)$               -> TAIL: 나머지 모든 문자
    
    const regex = /^([a-zA-Z\-\. ]+)([0-9]{1,5})(.*)$/;
    
    return files.sort((a,b) => {
        const matchA = a.match(regex)
        const matchB = b.match(regex)
        
        const headA = matchA[1].toLowerCase()
        const headB = matchB[1].toLowerCase()
        
        
        if(headA < headB) return -1
        if(headA > headB) return 1
        
        
        const numA = parseInt(matchA[2], 10)
        const numB = parseInt(matchB[2], 10)
        
        if(numA !== numB){
            return numA - numB
        }
        return 0
    })
  
}