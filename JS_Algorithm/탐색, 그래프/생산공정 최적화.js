function solution(n, speeds) {
  let left = 1;
  //최악경우: 가장 느린 기계가 n 개를 혼자 만들떄 걸리는 시간
  let right = Math.max(...speeds) * n;
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // let total = 0;
    // for (let time of speeds) {
    //   total += Math.floor(mid / time);
    // }

    const total = speeds.reduce((sum, time) => sum + Math.floor(mid / time), 0);

    if (total >= n) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
console.log(solution(8, [5, 9]));
console.log(solution(6, [7, 10]));
