function solution(sizes) {
    //긴변을 모두 가로 
    //짧은변을 모두 세로
    
    let maxWidth = 0;
    let maxHeight =0;
    
    for(let i=0; i<sizes.length; i++){
        const w = Math.max(sizes[i][0], sizes[i][1]);
        const h = Math.min(sizes[i][0], sizes[i][1]);
        
        maxWidth = Math.max(maxWidth, w);
        maxHeight = Math.max(maxHeight, h);

    }
    
    return maxWidth * maxHeight;
}