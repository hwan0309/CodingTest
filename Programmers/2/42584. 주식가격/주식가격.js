// 1 2 3 2 3

// 4 3 1 1 0

//1 = 자기 인덱스 제외 나머지 초 증가
//2 = 자기 인덱스 제외 나머지 초 증가
//3 = 자기 인덱스 제외 나머지 초 증가 - 1
//4 = 자기 인덱스 제외 나머지 초 증가 
//5 = 자기 인덱스 뒤에 끝이면 0



function solution(prices) {
    
    let queue = Array(prices.length).fill(0);
    
    for(let i=0; i<prices.length; i++){
        for(let j= i+1; j <prices.length; j++){
            queue[i]++
            
            if(prices[i] > prices[j]){
                break;
            }
        }
    }

    
    //console.log(check)
    return queue;
}