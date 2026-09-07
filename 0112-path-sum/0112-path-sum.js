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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    //종료조건
    if(root  === null){
        return false
    }
    
    //리프 까지 내려갔을떄
    if(root.left === null && root.right === null){
        return targetSum === root.val
    }

    let result = targetSum - root.val

    

    return hasPathSum(root.left, result) || hasPathSum(root.right, result)
    
};