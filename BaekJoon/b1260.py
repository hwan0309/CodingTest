from collections import deque
import sys

# Python 재귀 한도 설정
sys.setrecursionlimit(10000)


# DFS 함수
def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')
    for next_node in graph[v]:
        if not visited[next_node]:
            dfs(graph, next_node, visited)


# BFS 함수
def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True
    # print(start, end=' ')
    # print를 while문 밖으로 빼면 시작 노드가 2번 출력될 수 있습니다.
    # 시작 노드도 큐에서 꺼내면서 출력하는 것이 일관적입니다.

    while queue:
        v = queue.popleft()
        print(v, end=' ')  # 💡 수정: 공백 추가
        for next_node in graph[v]:
            if not visited[next_node]:
                queue.append(next_node)
                visited[next_node] = True


# 입력 처리
N, M, V = map(int, input().split())
graph = [[] for _ in range(N + 1)]

# 그래프 생성
for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# 각 노드의 인접 리스트를 정점 번호가 작은 순서대로 정렬
for i in range(1, N + 1):
    graph[i].sort()

# DFS 실행
visited = [False] * (N + 1)
dfs(graph, V, visited)
print()

# BFS 실행
visited = [False] * (N + 1)
bfs(graph, V, visited)