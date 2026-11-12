function solution(numbers) {
    const set = new Set()
    
    function getPer(current, rest){
        if(current.length > 0){
            set.add(Number(current))
        }
        for(let i=0; i< rest.length; i++){
            getPer(current+rest[i], rest.slice(0, i) + rest.slice(i + 1))
        }
    }
    
    getPer("", numbers)
    
    function isPrime(num){
        if(num < 2) return false
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num % i === 0) return false
        }
        return true
    }
    let answer =0;
    for(const num of set){
        if(isPrime(num)){
            answer++
        }
    }
    return answer
}