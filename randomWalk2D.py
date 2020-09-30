import random

def random_walk(n):
    x = 0
    y = 0
    for i in range(n):
        """ returns a position after a random walk of n steps """
        direction = random.choice(['N', 'E', 'O', 'S'])
        if (direction == 'N'):
            y = y + 1
        if (direction == 'E'):
            x = x + 1
        if (direction == 'O'):
            x = x - 1
        if (direction == 'S'):
            y = y - 1
    return (x, y)

def random_walk_2D(n):
    """ returns a position after a random walk of n steps """
    x = 0
    y = 0
    for i in range(n):
        (dx, dy) = random.choice([(1, 0), (0, 1), (-1, 0), (0, -1)])
        x += dx
        y += dy
    return (x, y)

# rw = random_walk(10)
rw = random_walk(10)
print('ten steps random walk: ', rw)
        
