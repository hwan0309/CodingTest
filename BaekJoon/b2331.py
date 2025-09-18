#bfs를 사용하여 방문하게 되는 위치를 visited에 저장
# visited가 3이된다면 처음 방문할 때 한번 사이클 때 한번 그리고 그 사이클이 다시 시작되는 경우이므로 중복 부분을 찾을 수 있습니다.
# visited가 1인 부분은 방문했지만 사이클이 아닌 곳이므로 count 를 통해 답을 찾았습니다.

import sys
from collections import deque
si = sys.stdin.readline
N,P = map(int,si().split())

def bfs():
    q = deque()
    q.append(N)
    visited = [0 for _ in range(1000000 + 1)]
    visited[N] += 1

    while q:
        val = q.popleft()
        val = str(val)
        if val == 3:
            break

        number_list_str = list(val)
        new_val = 0
        for number_str in number_list_str:
            new_val =  new_val + pow(int(number_str), P)

        if visited[new_val] <= 2:
             q.append(new_val)
             visited[new_val] += 1
    print(visited.count(1))
    return
bfs()