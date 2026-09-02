function solution(sizes) {
    var answer = 0;
    
    let maxWidth = 0;
    let maxHeight = 0;
    
    for(let i=0; i<sizes.length; i++){
         const max = Math.max(sizes[i][0], sizes[i][1])
         const min = Math.min(sizes[i][0], sizes[i][1])
        
         maxWidth = Math.max(maxWidth, max)
         maxHeight = Math.max(maxHeight, min)
        
    }
    return maxWidth * maxHeight;
}