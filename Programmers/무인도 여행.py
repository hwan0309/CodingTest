from collections import deque


def solution(maps):
    R = len(maps)
    C = len(maps[0])
    visited = [[False] * C for _ in range(R)]

    dr = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]

    answer = []

    def dfs(start_r, start_c):
        queue = deque([(start_r, start_c)])
        visited[start_r][start_c] = True
        total_food = int(maps[start_r][start_c])

        while queue:
            r, c = queue.popleft()

            for i in range(4):
                nr = r + dr[i]
                nc = c + dx[i]

                if 0 <= nr < R and 0 <= nc < C:
                    if maps[nr][nc] != 'X' and not visited[nr][nc]:
                        visited[nr][nc] = True
                        total_food += int(maps[nr][nc])
                        queue.append((nr, nc))

        return total_food

    for r in range(R):
        for c in range(C):
            if maps[r][c] != 'X' and not visited[r][c]:
                island_food = dfs(r, c)
                answer.append(island_food)

    if not answer:
        return [-1]
    answer.sort()
    return answer
