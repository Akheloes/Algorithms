import numpy as np
import skfuzzy as fuzz

if __name__ == "__main__":
    #Create universe of discourse in Python using linspace ()
    # startarray_like
    # The starting value of the sequence.

    # stoparray_like
    # The end value of the sequence, unless endpoint is set to False. In that case, the sequence consists of all but the last of num + 1 evenly spaced samples, so that stop is excluded. Note that the step size changes when endpoint is False.

    # numint, optional
    # Number of samples to generate. Default is 50. Must be non-negative.

    # endpointbool, optional
    # If True, stop is the last sample. Otherwise, it is not included. Default is True.

    # retstepbool, optional
    # If True, return (samples, step), where step is the spacing between samples.

    # dtypedtype, optional
    # The type of the output array. If dtype is not given, infer the data type from the other input arguments.
    # axisint, optional
    # The axis in the result to store the samples. Relevant only if start or stop are array-like. By default (0), the samples will be along a new axis inserted at the beginning. Use -1 to get an axis at the end.

    X = np.linspace(start=0, stop=75, num=75, endpoint=True, retstep=False)
    print(X)
    print('len(X): ', len(X))
    #Create two fuzzy sets by defining any membership function
    abc1 = [0, 25, 50]
    abc2 = [25, 50, 75]
    young = fuzz.membership.trimf(X, abc1)
    print(young)
    print('len(young): ', len(young))

    # middle_aged = fuzz.membership.trimf(X, abc2)