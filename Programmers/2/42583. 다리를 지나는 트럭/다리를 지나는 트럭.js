function solution(bridge_length, weight, truck_weights) {
    const bridge =  Array(bridge_length).fill(0)
   let idx = 0
   let sum = 0;
    let time = 0
    
    while(idx < truck_weights.length || sum > 0){
        time++
        sum -= bridge.shift()
        
        if(idx < truck_weights.length && sum + truck_weights[idx] <= weight){
          
            bridge.push(truck_weights[idx]);
            sum += truck_weights[idx]
            idx++
            
        }else{
            bridge.push(0)
        }
    }
    return time
}