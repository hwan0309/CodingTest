class MaxHeap:
    def __init__(self):
        self.items = [None]

    def insert(self, value):
        # 구현해보세요!
        self.items.append(value)
        cur_index = len(self.items) -1
        while cur_index != 1: #1일경우 rootNode이기 떄문에 그 전까지만 반복
        # 부모 노드와 비교해서 내가 더 크면 위치 변경

            parent_index = cur_index // 2

            if self.items[cur_index] >  self.items[parent_index]:
                self.items[cur_index], self.items[parent_index] = self.items[parent_index], self.items[cur_index]

                cur_index = parent_index
            else:
                break


        return


max_heap = MaxHeap()
max_heap.insert(3)
max_heap.insert(4)
max_heap.insert(2)
max_heap.insert(9)
print(max_heap.items)  # [None, 9, 4, 2, 3] 가 출력되어야 합니다!

# 1.맨 뒤에 원소를 추가
# 2. 부모 노드와 비교 자기가 높으면 부모노드와 위치 변경
# 3. 2과정 반복

# 3 [none, 3]
# 42
# 9