
function solution(nums) {
    //set 활용하여 중복제거
    //math.min으로  비교후 작은 값 리턴
    const uniquePocketmon = new Set(nums);
    
    return Math.min(uniquePocketmon.size, nums.length / 2)
   
}