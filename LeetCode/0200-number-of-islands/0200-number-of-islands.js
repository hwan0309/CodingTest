/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    if(!grid || grid.length === 0) return 0

    let count = 0;

    const dx = [1,-1,0,0];
    const dy = [0, 0, 1, -1]

    function bfs(a, b){

        const queue = [[a, b]];
        
        //방문처리
        grid[a][b] = '0';

        while(queue.length > 0){
            const [x, y] = queue.shift();

            for(let i=0; i<4; i++){
                const nx = x + dx[i]
                const ny = y + dy[i];

                if(nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === '1'){
                    grid[nx][ny] = '0';
                    queue.push([nx, ny])
                }
            }
        }
    }

  

    for(let i=0; i<grid.length; i++){
        for(let j=0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                count++
                bfs(i, j)
            }
        }
    }
    
    return count
};