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
    _i = i - 1
    _j = j - 1
    _size = size - 1 # ERASE
    for k in range(size):
        # for down-right diagonal cells
        if (_i + k < size) and (_j + k < size):
            if board[_i + k][_j + k] == 1:
                safe = False

        # for up-right diagonal cells
        if (_i - k >= 0) and (_j + k < size):
            if board[_i - k][_j + k] == 1:
                safe = False

        # for up-left diagonal cells
        if (_i - k >= 0) and (_j - k >= 0):
            if board[_i - k][_j - k] == 1:
                safe = False

        #for up-right diagonal cells
        if (_i + k < size) and (_j - k >= 0):
            if board[_i + k][_j - k] == 1:
                safe = False

    return safe

def examplePrinter(board, x, y):
    attacked = isSafe(board, x, y)
    print('isSafe ?', attacked)


## Example, based on a 
# case of a queen attacking from the upper-left diagonal
board_up_left_unsafe = [[0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
board_up_left_safe = [[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
# examplePrinter(board_up_left_unsafe, 3, 4)
# examplePrinter(board_up_left_safe, 3, 4)

# case of a queen attacking from the upper-right diagonal
board_up_right_unsafe = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
board_up_right_safe = [[0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
# examplePrinter(board_up_left_unsafe, 3, 4)
# examplePrinter(board_up_left_safe, 3, 4)

# case of a queen attacking from the lower-left diagonal
board_low_left_unsafe = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 0, 0]]
board_low_left_safe = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0]]
# examplePrinter(board_low_left_unsafe, 3, 4)
# examplePrinter(board_low_left_safe, 3, 4)

# case of a queen attacking from the lower-right diagonal
board_low_right_unsafe = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]]
board_low_right_safe = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]]
# examplePrinter(board_low_right_unsafe, 3, 4)
# examplePrinter(board_low_right_safe, 3, 4)

# case of same column
board_column_unsafe = [[0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
# examplePrinter(board_column_unsafe, 3, 4)

# case of same row
board_row_unsafe = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
# examplePrinter(board_row_unsafe, 3, 4)
