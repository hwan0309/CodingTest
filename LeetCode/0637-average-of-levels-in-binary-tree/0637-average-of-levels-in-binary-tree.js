/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    
    //종료조건 
    if(root === null) return []

    const reulst = []
    const queue = [root]

    while(queue.length > 0){
        const levelSize = queue.length;

        let levelSum = 0

        for(let i=0; i<levelSize; i++){
            const currentNode = queue.shift()
            levelSum += currentNode.val

            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }

        reulst.push(levelSum / levelSize)
    }
    return reulst

};