# nums를 i / 1 을 했을 때  == 0 이면 다음 조건
# i + 1 / j 를 했을 때 == 1이 나오면 ctn + 1 씩 증가

n = int(input())
nums = list(map(int, input().split()))

ctn = 0
for i in nums:
    if i == 1:
        continue
    for j in range(2,i):
        if i % j == 0:
            break
    else:
        ctn += 1

print(ctn)
