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
 * @return {number}
 */
var minDepth = function(root) {

    if(root === null) return 0

    //큐에는 노드, 현재 깊이 저장
    const queue = [[root, 1]]

    while(queue.length > 0){
        const [current, depth] = queue.shift()


        // 처음으로 만나는 리프노드가 최소 깊이 
        if(current.left === null && current.right === null){
            return depth

        }
        //자식 노드가 있다면 큐에 넣고 depth + 1
        if(current.left) queue.push([current.left, depth + 1]);
        if(current.right) queue.push([current.right, depth + 1])


    }

    
};