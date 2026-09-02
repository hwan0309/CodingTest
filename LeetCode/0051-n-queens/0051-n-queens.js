/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

    const result = []
    const board = new Array(n).fill(-1);

    function isValid(row, col){
        for(let i=0; i<row; i++){
            const prevCol = board[i]
            
            //같은 열에 퀸이 위치하면 종료
            if(prevCol === col) return false

            //대각선에 퀸이 있는 경우(행의 차이 === 열의 차이)
            if(Math.abs(row -i) === Math.abs(col - prevCol)) return false;
        }
        return true
    }

    //.q.. 형태로 반환
    function createBoard(){
        const formattedBoard = []
        for(let r = 0; r<n; r++){
            let rowStr = "";
            for(let c = 0; c < n; c++){
                rowStr += (board[r] === c) ? "Q" : '.';
            }
            formattedBoard.push(rowStr)
        }
        return formattedBoard;
    }


    function backtrack(current){
        //종료 조건 
        if(current === n){
            result.push(createBoard());
            return
        }

        for(let col =0; col < n; col++){
            if(isValid(current, col)){
                board[current] = col;
                backtrack(current +1);
                board[current] = -1
            }
        }
    }
    backtrack(0);
    return result;
    
};