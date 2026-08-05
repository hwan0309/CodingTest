function solution(arr)
{

    const answer = [];
    const m = arr.length;
    
    for(let i=0; i<m; i++){
       
        if(arr[i] !== arr[i + 1]){
            answer.push(arr[i])
        } 
        
        
    }
  

    
    return answer;
}