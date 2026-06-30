function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    answer = s[i];

    if (
      stack.length > 0 &&
      stack[stack.length - 1].toLowerCase() === answer.toLowerCase()
    ) {
      stack.pop();
    } else {
      stack.push(answer);
    }
  }

  return stack;
}
console.log(solution("infFflearn"));
console.log(solution("aAbBcC"));
console.log(solution("xYyX"));
console.log(solution("a"));
console.log(solution("Code"));
