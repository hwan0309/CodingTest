function solution(rectangle, characterX, characterY, itemX, itemY) {
  //맵 생성 최대 좌표 50의 2배로 2차원 배열 생성
  //0 빈공간, 1 테두리, 2 사각형 내부
  const map = Array.from({ length: 102 }, () => Array(102).fill(0));

  rectangle.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1 * 2; i <= x2 * 2; i++) {
      for (let j = y1 * 2; j <= y2 * 2; j++) {
        //사각형의 내부인 경우 2로 채움
        if (i > x1 * 2 && i < x2 * 2 && j > y1 * 2 && j < y2 * 2) {
          map[i][j] = 2;
        } else if (map[i][j] !== 2) {
          map[i][j] = 1;
        }
      }
    }
  });

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  //큐에 현재 X좌표 y좌표, 이동 거리를 담는다
  //시작점도 2배
  const queue = [[characterX * 2, characterY * 2, 0]];

  //시작위치 방문처리 (다시 돌아오지 않게 맵의 값을 0으로 처리)
  map[characterX * 2][characterY * 2] = 0;

  while (queue.length > 0) {
    //큐에서 가장 먼저 들어온 값 추출
    const [x, y, dist] = queue.shift();

    if (x === itemX * 2 && y === itemY * 2) {
      return dist / 2;
    }

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx >= 0 && nx <= 101 && ny >= 0 && ny <= 101) {
        //테두리가 1이라서 이동할 수 있는 길이라면
        if (map[nx][ny] === 1) {
          //다시 못 돌아오게 0으로 변경
          map[nx][ny] = 0;

          //거리를 1늘려서 큐에 삽입
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
  }
}
