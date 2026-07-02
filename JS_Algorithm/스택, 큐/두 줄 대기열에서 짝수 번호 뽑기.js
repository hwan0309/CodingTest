function solution(queue1, queue2, k) {
  const queue = [...queue1, ...queue2];
  const result = [];

  for (const i of queue) {
    const person = queue.shift();

    if (result.length === k) {
      break;
    }

    if (person % 2 === 0) {
      result.push(person);
    } else {
      queue.push(person);
    }
  }
  return result;
}
console.log(solution([1, 3, 4], [6, 5, 8, 9, 10, 12, 13], 3));
