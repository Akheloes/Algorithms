from typing import Callable

# Realize a function which takes a function as an arguments and finds a point where it takes the values zéro
# bisection(f) returns an x where f(x)=0
# the bisection takes three arguments:
# the function f (function)
# a: the start of the interval of study
# b: the end of the interval of study
# N.B : The method is applicable for numerically solving the equation function(x) = 0 for the real variable x, where f is a continuous function defined on an interval [a, b] and where function(a) and function(b) have opposite signs.
def bisection(function: Callable[[float], float], a: float, b: float) -> float: 
    start: float = a
    end: float = b
    if (function(a) == 0): return a
    if (function(b) == b): return b
    if (function(a) * function(b) > 0):
        raise ValueError("bisection method does not work in this case scenario.")
    while (end - start > 10**(-7)):
        m: float = (start + end)/2
        print('m :', m)
        if (function(start)*function(m) <= 0):
            end = m
        else:
            start = m
    return (start + end)/2

#exemple
a = 0
b = 1
f = lambda x : x*x + 1/16
b_point = bisection(f, a, b)
print('bisection point: ', b_point)



