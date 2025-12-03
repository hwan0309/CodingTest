import sys
input = sys.stdin.read
def ex():
    data = (input().split())
    n, m = int(data[0]), int(data[1])
    que = sorted([int(i) for i in data[2:]] )
    abc = float('inf')
    start=0

    for end in range(n):
        while start < n and que[end] - que[start] >= m:
            abc = min(abc, que[end] - que[start])
            start += 1

    #print(abc)

    if abc == float('inf'):
        print(0)
    else:
        print(abc)

ex()
