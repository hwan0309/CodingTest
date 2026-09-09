/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    const originColor = image[sr][sc]

    if(originColor === color) return image

    const row = image.length;
    const cols = image[0].length;

    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]

    function dfs(a, b){
        if(a < 0 || a >= row || b < 0 || b >= cols || image[a][b] !== originColor){
            return
        }

        image[a][b] = color

        for (let i=0; i< 4; i++){
            const nx = a + dx[i]
            const ny = b + dy[i]

            dfs(nx, ny)
        }
    }

    dfs(sr, sc)
    return image
    
};