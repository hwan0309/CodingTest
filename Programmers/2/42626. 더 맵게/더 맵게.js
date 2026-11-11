  //min 힙 구현

class MinHeap {
    constructor(){this.heap = []}
    size() { return this.heap.length}
    peek(){return this.heap[0]}
    push(value){
        const heap = this.heap;
        heap.push(value)
        let idx = heap.length - 1
        while(idx > 0){
            const parentIdx = Math.floor((idx -1) /2)
            if(heap[parentIdx] <= heap[idx])break;
            [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]]
            idx = parentIdx
        }
    }
    
    pop(){
        const heap = this.heap;
        if(heap.length === 1) return heap.pop();
        const min = heap[0]
        heap[0] = heap.pop()
        let idx = 0
        const length = heap.length;
        
        while((idx * 2) + 1 < length){
            let leftIdx = (idx * 2) + 1
            let rightIdx = (idx * 2 ) + 2
            let smallest = idx
            
            if(heap[leftIdx] < heap[smallest]) smallest = leftIdx;
            if(rightIdx < length && heap[rightIdx] < heap[smallest]) smallest = rightIdx;
            if (smallest == idx) break;
            
            [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]]
            idx = smallest
        }
        return min
    }
}



function solution(scoville, K) {
    
    const heap = new MinHeap();
    scoville.forEach(el => heap.push(el));
    
    let count = 0;
    while(heap.size() >= 2 && heap.peek() < K){
        const first = heap.pop();
        const second = heap.pop()
        heap.push(first + (second * 2))
        count++
    }
  return heap.peek() >= K ? count: -1

}