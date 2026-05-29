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
var getMinimumDifference = function(root) {
   let adjcent = [];
    let minDiff = Infinity;
    // inorder traversal to get adjecent nodes value and check differences between nodes
    function dfs(node){
        if (!node) return;
        dfs(node.left);
        adjcent.push(node.val);
        dfs(node.right);
    }
    
    dfs(root); 
    
    for(let i = 0 ; i < adjcent.length - 1; i++){
        minDiff = Math.min(minDiff, adjcent[i+1] - adjcent[i]);
    }
    
    return minDiff;
};