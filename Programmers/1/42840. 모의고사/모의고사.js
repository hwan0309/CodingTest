function solution(answers) {
    
    var answer = [];
    let score1 = 0;
    let score2 = 0;
    let score3 = 0

    const q1 = [1, 2, 3, 4, 5]
    const q2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const q3 = [3, 3, 1, 1, 2, 2, 4,4, 5 ,5]

    for(let i=0; i<answers.length; i++){
       if(q1[i % q1.length] === answers[i]){
           score1++
       } if(q2[i % q2.length] === answers[i]){
           score2++
       } if(q3[i % q3.length] === answers[i]){
           score3++
       }

    }
    const maxScore = Math.max(score1, score2, score3)
    
    if(score1 === maxScore) answer.push(1)
    if(score2 === maxScore) answer.push(2)
    if(score3 === maxScore) answer.push(3)
    return answer;
}