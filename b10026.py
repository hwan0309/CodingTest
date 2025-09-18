# 입력받기 n, 그림데이터
# 두개의 그림 복사
#     - 일반인 기준그림
#     - 색약 기준 그림
# dfs bfs 작성
#     상하 좌우 인접한 곳만 탐색
#     같은 색이면 계속 이동
# 두 그림에 대한 각각 영역 탐색
#     방문하지 않은 지점에서 dfs/bfs 시작
#     한번 시작하면 한 구역이므로 count+1

import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

n = int(input())
graph = [list(input().strip()) for _ in range(n)]

weak_graph = [[c if c!= 'G' else 'R' for c in row] for row in graph]

visited_normal = [[False]* n for _ in range(n)]
visited_weak = [[False]* n for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y, graph, visited):
    visited[x][y] = True
    color = graph[x][y]

    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if 0 <= nx < n and 0 <= ny < n:
            if not visited[nx][ny] and  graph[nx][ny] == color:
                dfs(nx, ny, graph, visited)

normal_count = 0
weak_count= 0

for i in range(n):
    for j in range(n):
        if not visited_normal[i][j]:
            dfs(i, j, graph, visited_normal)
            normal_count += 1
        if not visited_weak[i][j]:
            dfs(i, j, weak_graph, visited_weak)
            weak_count += 1
print(normal_count, weak_count)
