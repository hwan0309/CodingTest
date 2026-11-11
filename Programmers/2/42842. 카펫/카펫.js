//brown yellow 합을 구한다
//0,0 으로 나눈다 가로 길이가 세로 길이보다 기니까, 두 합을 나눈 값중 큰 값을 가로에 배치

//세로 길이는 최소 3, (가로 -2) = 새로 갯수

function solution(brown, yellow) {
    const total = brown + yellow;
    
    for(let i = 3; i <= total; i++){
        //길이가 딱 맞아 떨어지면 직사각형
        if(total % i === 0){
            let width = total / i;
            
            if((width -2) * (i - 2) === yellow){
                return [width,i]
            }
        }
    }
    

}