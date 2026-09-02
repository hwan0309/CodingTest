function solution(score) {
  const sorted = score
    .map((s, index) => [s, index])
    .sort((a, b) => b[0] - a[0]);

  const answer = Array(score.length);

  for (let i = 0; i < score.length; i++) {
    const index = sorted[i][1];
    if (index < 3) {
      answer[index] = `Top ${i + 1}`;
    } else {
      answer[index] = `Rank ${index + 1}`;
    }
  }
  return answer;
}
console.log(solution([95, 85, 90, 70]));
console.log(solution([50, 100, 75]));
