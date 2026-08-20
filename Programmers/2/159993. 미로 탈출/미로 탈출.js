function solution(maps) {
    
    //입구에서 레버 , 레버에서 출구
    let start, lever, exit
    for(let i=0; i<maps.length; i++){
        for(let j=0; j<maps[0].length; j++){
            if(maps[i][j] === 'S') start = [i, j];
            else if(maps[i][j] === 'L') lever = [i,j];
            else if(maps[i][j] === 'E') exit = [i, j];
        }
    }
    
    const dx = [1,-1,0,0];
    const dy = [0, 0, 1, -1];
    
    //출발지에서 도착지까지 최단 시간
    function bfs(startNode, targetNode){
        
        //큐엔 x좌표, y좌표, 걸린시간 추가 maps[dx][dy]
        const queue = [[...startNode, 0]]
        
        //방문 여부를 체크
        const visited = Array.from({length: maps.length}, ()=> Array(maps[0].length).fill(false));
        visited[startNode[0]][startNode[1]] = true
        
        let head = 0;
        
        while(head < queue.length){
            const [x, y, time] = queue[head++];
            
            //목표 지점에 도달하면 시간 반환
            if(x === targetNode[0] && y === targetNode[1]) return time
            
            for(let k=0; k<4; k++){
                const nx = x + dx[k];
                const ny = y + dy[k];
                
                if(nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length){
                    
                    if(maps[nx][ny] !== 'X' && !visited[nx][ny]){
                        visited[nx][ny] = true;
                        queue.push([nx, ny, time + 1])
                    }
                }
            }
        }
        return -1;
    }
    
    //시작점 -> 레버 이동
    const timeLever = bfs(start, lever);
    if(timeLever === -1) return -1
    
    //레버 -> 출구
    const timeExit = bfs(lever, exit);
    if(timeExit === -1) return -1
    
    return timeLever + timeExit;
    
  
}