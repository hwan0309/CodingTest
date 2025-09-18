import sys
input = sys.stdin.readline
n, m = map(int, input().split())

def count(N):
    if N < 2:
        return 0

    count = 0
    while N >= 2:
        count += N//2
        N = N//2
    return count

def count2(N):
    if N < 5:
        return 0

    count = 0
    while N >= 5:
        count += N//5
        N //=5
    return count

ex1 = count(n) - count(n-m) - count(m)
ex2 = count2(n) - count2(n-m) - count2(m)
print(min(ex1, ex2))