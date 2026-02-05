
#1. x, y 리스트
#2. 첫 번째 x 기준 정렬, x가 같으면, 두 번째 y 기준으로 정렬

n = int(input())
pop = []
for _ in range(n):
    x, y = map(int, input(). split())
    pop.append((x, y))

pop.sort()
N
for x, y in pop:
    print(x, y)