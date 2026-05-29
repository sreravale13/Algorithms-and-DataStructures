/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const r = board.length
    const c = board[0].length
    const visit = (i,j) => {
        if(i < 0 || j < 0 || i >= r || j >= c || board[i][j] !== "O") 
        return;
        board[i][j] = "1"
        visit(i,j+1)
        visit(i+1,j)
        visit(i-1,j)
        visit(i,j-1)
    }
    // traverse top right left bottom to mark the corners marked....
    for(let i = 0; i < c; i++) {
        visit(0,i)
        visit(r-1,i)
    }
    for(let i = 0; i < r; i++) {
        visit(i,0)
        visit(i,c-1)
    }
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            if(board[i][j] === "1") board[i][j] = "O"
            else board[i][j] = "X"
        }
    }

};