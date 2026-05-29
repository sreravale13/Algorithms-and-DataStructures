/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {

    const bfs = (node, queue, visited) => {
        // create 1st or any new node here
        visited[node.val] = new Node(node.val)
        while (queue.length) {
            const curr = queue.shift();
            // add neighbours individual values
            curr.neighbors.forEach(neighbor => {
                if (visited[neighbor.val] === undefined) {
                    queue.push(neighbor);
                    visited[neighbor.val] = new Node(neighbor.val);
                }
                // asssign list of neighbours per node as per previous copy
                visited[curr.val].neighbors.push(visited[neighbor.val]);
            })
        }
        return visited[node.val];
    }
    return node ? bfs(node, [node], {}) : node;    
};