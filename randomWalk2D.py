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

# find which walk length ensures staying under a distance of 7
number_of_walks = 10000

for walk_length in range(1, 31):
    no_transport = 0 # number of walks with a distances shorter than 7
    for i in range(number_of_walks):
        x, y = random_walk_2D(walk_length)
        distance = abs(x) + abs(y)
        if (distance < 4):
            no_transport += 1
    percentage = (float(no_transport) / number_of_walks) * 100
    print("walk of length: ", walk_length, " | percentage of walks under 7 steps :", percentage)
        
