    """
    ______________________________________________________________
    Study 1: 
    Let's start with a 4x4 board as a concrete example.
        - Put a queen Q1 on a cell (1, 1) of the first row;
        - Determine, on the following row, all of the cells which are attached and avoid them.
        - Put the next queen Q2 on the first none-attacked cell;
        - Continue hence.
        - One finished, count how many queens you've got on the board (you can have a counter for it),
            if you don't have n queens, reject the solution.
 
 
    Notice that the above loop should be conducted at worst to [n/2] + 1; in fact, the solution become symetric
    afterwards, one should only take the above solutions and produce the symetric board thereof.

    Should we generalize the solution's search to starting from the i-th row and then search for other rows ?

    ______________________________________________________________
    Study 2:
    We notice that:
        - We can reduce the solving of a board by focusing on a quarter of a board, in fact, by placing a queen on a cell belonging 
        to the up-left quarter (and generating the consequent solutions, as described in the comment above), we can attend all
        possible solutions by producing one of the following four symmetries:
            + Symmetry to the vertical axis of the board;
            + Symmetry to the horizontal axis of the board;
            + Symmetry on the origin: up-left to down-right;
            + Symmetry on the origin: down-left to up-right.

    ______________________________________________________________
    Study 3:
    Keeping in mind the symmetries in play, we focus on the up-left quarter (ULQ) of the board with the following algorithm:
        - Put a queen Q1 on the ULQ;
        - Put a queen Q2 on a non-attacked cell on the first available "most-up-line and most-left-column" cell
            + Put a queen Q3 on a non-attacked cell on the first available "most-up-line and most-left-column" cell
                ++ recurse until no cells are non-attacked, if so, close the current branch and fold back to the immediate upper leaf
                    of recursion, exhaust it.


    """



