function solution(gate) {
  const stack = [];
  for (const i of gate) {
    if (i === "<") {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
console.log(solution("<<>>"));
console.log(solution("<<>>"));
console.log(solution(">><<"));
console.log(solution("<<<>"));
