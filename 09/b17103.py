# 중복 제거를 위해 항상 p <= q만 센다 따라서 p는 n/2까지만 살핀다
# 에라토스테네스의 체로 한번에 모든 소수를 미리 구한다

import sys
input = sys.stdin.readline

max = 1000000
is_prime = [True] * (max + 1)
is_prime[0]  = is_prime[1] = False

for i in range(2, int(max**0.5)+1):
    if is_prime[i]:
        for j in range(i*i, max+1, i):
            is_prime[j] = False

t = int(input())
for _ in range(t):
    n = int(input())
    count = 0

    for p in range(2, n//2 + 1):
        if is_prime[p] and is_prime[n - p]:
            count += 1
    print(count)