class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, value):
        # 어떻게 하면 될까요?
        if self.is_empty():
            self.head = new_node
            self.tail = new_node
        new_node = Node(value)
        self.tail.next = new_node
        self.tail = new_node

    def dequeue(self):
        # 어떻게 하면 될까요?
        return

    def peek(self):
        # 어떻게 하면 될까요?
        return


    def is_empty(self):
      return self.head is None