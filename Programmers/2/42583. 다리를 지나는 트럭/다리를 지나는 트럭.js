function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    //트럭이 다리에 올라갔다 내려오는 시간(다음 함수로 저장되는) 3
    //다리 웨이트 갯수만큼 트럭 이동 가능
    
    //다리 길이만큼 큐를 생성
    let bridge = Array(bridge_length).fill(0);
    
    //다리 위에 올라가 있는 트럭의 무게를 측정
    let bridgeWeight = 0;
    
    //다리 위에 트럭이 있으면 1초씩 카운트
    while(bridge.length > 0){
        answer++
        
        //1초 후 0이거나 트럭이거나를 뺌
        let out = bridge.shift();
        
        bridgeWeight -= out;
        
        //대기중인 트럭이 있따면
        if(truck_weights.length > 0){
            if(bridgeWeight + truck_weights[0] <= weight){
                let nexttruck = truck_weights.shift();
                bridge.push(nexttruck);
                bridgeWeight += nexttruck;
            } else{
                bridge.push(0);
            }
        }
        
    }

    return answer;
}