/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if(n<= 2) return n

    let prev1 = 1 // 계단수
    let prev2 = 2 

    
    //3번째 계단부터 n번쨰 계단까지 계산
for (let i=3; i<=n; i++){
    
    //현재 계단 = 이전 + 전전
    let current = prev1 + prev2;

    prev1 = prev2 //한칸 이동
    prev2 = current //한칸 이동
}
    return prev2
    
};