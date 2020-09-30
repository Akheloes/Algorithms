import random

def random_walk(n):
    x = 0
    y = 0
    for i in range(n):
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

rw = random_walk(10)
print('ten steps random walk: ', rw)
        
