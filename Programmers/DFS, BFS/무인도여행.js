function solution(maps) {
    var answer = [];
    const n = maps.length;
    const m = maps[0].length;

    const visited = Array.from(Array(n), () => Array(m).fill(false));

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const dfs = (x, y) => {
        let sum = parseInt(maps[x][y]);
        visited[x][y] = true;


        for (let i = 0; i<4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m){
                if (maps[nx][ny] !== 'X' && !visited[nx][ny]){
                    sum += dfs(nx, ny)
                }
            }
        }
        return sum;
    }

    for (let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(maps[i][j] !== 'X' && !visited[i][j]){
                answer.push(dfs(i, j));
            }
        }
    }

    if(answer.length == 0){
    return[-1]
    }


    return answer.sort((a,b) => a - b);
}