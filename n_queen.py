"""
The following function verifies if, given a 'board' setup, the cell (i, j) is safe - can take a queen which would not be attacked.
We should verify:
    - There exists an integer c for which board[i][c] = 1 ;
    - There exists an integer l for which board[l][j] = 1 ;
    - There exists an integer k for which board[l +- k][j +- k] = 1 ;

If any of these conditions are verified, then the cell (i, j) is not safe.
@params: board is a 2D matrix representing the chess board, cells with
"""
def isSafe(board, i, j):
    safe: bool = True
    size = len(board)
    # There exists an integer c for which board[i][c] = 1
    for c in range(size):
        if board[i-1][c] == 1:
            safe = False
    
    # There exists an integer l for which board[l][j] = 1
    for l in range(size):
        if board[l][j-1] == 1:
            safe = False
    
    # There exists an integer k for which board[l +- k][j +- k] = 1 ;
    for k in range(size):
        if (i + k - 1 < size) and (j + k - 1 < size) and (i - k - 1 < size) and (j - k - 1 < size): # this is not exact
            if board[i + k - 1][j + k - 1] or board[i - k - 1][j + k - 1] or board[i + k - 1][j - k - 1] or board[i - k - 1][j - k - 1]:
                safe = False
    
    return safe

# Example
board = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
attacked = isSafe(board, 3, 3)
print('isSafe ?', attacked)
