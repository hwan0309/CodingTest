import sys

input = sys.stdin.readline

n = int(input())
st = []

for _ in range(n):
    data = input().split()
    st.append([data[0], int(data[1]), int(data[2]), int(data[3])])


#정렬
#x[1] 국어
#x[2] 영어
#x[3] 수학
#x[4] 이름

st.sort(key=lambda x: (-x[1], x[2], -x[3], x[0]))

for i in st:
    print(i[0])