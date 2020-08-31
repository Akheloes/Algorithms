"""
The following function verifies if, given a 'board' setup, the cell (i, j) is safe - can take a queen which would not be attacked.
We should verify:
    - There exists an integer c for which board[i][c] = 1 ;
    - There exists an integer l for which board[l][j] = 1 ;
    - There exists an integer k for which board[l +- k][j +- k] = 1 ;

If any of these conditions are verified, then the cell (i, j) is not safe.
"""
