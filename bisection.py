from typing import Callable

# Realize a function which takes a function as an arguments and finds a point where it takes the values zéro
# bisection(f) returns an x where f(x)=0
# the bisection takes three arguments:
# the function f (function)
# a: the start of the interval of study
# b: the end of the interval of study
def bisection(function: Callable[[float], float], a: float, b: float) -> float: 
    start: float = a
    end: float = b
    if (function(a) == 0): return a
    if (function(b) == b): return b
    while (end - start > 10**(-7)):
        m: float = (start + end)/2
        if (function(start)*function(m) <= 0):
            end = m
        else:
            start = m
    return (start + end)/2


#exemple
a = 0
b = 1
f = lambda x : x*x - 1/4
b_point = bisection(f, a, b)
print('bisection point: ', b_point)



