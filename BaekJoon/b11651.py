import sys

input = sys.stdin.readline

n= int(input())

pop = []
for _ in range(n):
    x, y = map(int, input().split())
    pop.append((y, x))

pop.sort()

for y, x in pop:
    print(x, y)




