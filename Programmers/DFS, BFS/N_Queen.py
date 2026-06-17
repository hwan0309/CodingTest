# 가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.
#
# 예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.


def solution(n):
    answer = 0
    row = [0] * n

    def is_safe(x):
        for i in range(x):
            if row[x] == row[i] or abs(row[x] - row[i]) == abs(x - i):
                return 0
        return 1

    def dfs(x):
        nonlocal answer

        if x == n:
            answer += 1
            return

        for i in range(n):
            row[x] = i

            if is_safe(x):
                dfs(x + 1)

    dfs(0)
    return answer