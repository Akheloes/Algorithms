from random import randrange
import statistics

def toss():
    random = randrange(2)
    if (random == 0): 
        return -1
    else:
        return 1

def randomWalk(n):
    distance = 0
    for i in range(n):
        distance += toss()
    return distance

def expectation(walks):
    return statistics.mean(walks)

def produceWalks(n, n_):
    l: list = []
    for i in range(n):
        l.append(randomWalk(n_))
    return l

p = produceWalks(100, 3000)
a = expectation(p)
# print('walks: ', p)
print('average: ', a)
    