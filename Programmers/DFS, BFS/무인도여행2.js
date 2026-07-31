function solution(maps) {
  var answer = [];
  const row = maps.length;
  const cols = maps[0].length;

  const visited = Array.from({ length: row }, () => Array(cols).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function dfs(x, y) {
    visited[x][y] = true;
    //const sum = Number(dfs(x,y));
    let sum = Number(maps[x][y]);

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx >= 0 && nx < row && ny >= 0 && ny < cols) {
        if (maps[nx][ny] !== "X" && !visited[nx][ny]) {
          sum += dfs(nx, ny);
        }
      }
    }
    return sum;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        //dfs(i, j);
        answer.push(dfs(i, j));
      }
    }
  }
  if (answer.length === 0) return [-1];
  return answer.sort((a, b) => a - b);
}
