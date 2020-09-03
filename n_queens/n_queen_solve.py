    """
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
    
    """

