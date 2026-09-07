/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    const originColor = image[sr][sc];


    if(originColor === color) return image
    

    //픽셀이 올바른 색상이면 해당 픽셀을 칠하고, 아니면 재귀 

    const dx = [1, -1, 0, 0]
    const dy = [0, 0 , 1, -1]


    function dfs(r, c){
        //범위를 벗어나거나 원래 색상과 다르면 종료
        if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== originColor){
            return
        }

        image[r][c] = color;

        for(let i=0; i<4; i++){
            dfs(r + dx[i], c + dy[i])
        
        }

    }
    dfs(sr, sc)
    return image

};