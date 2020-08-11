import numpy as np
import skfuzzy as fuzz

if __name__ == "__main__":
    X = np.linspace(start=0, stop=75, num=75, endpoint=True, retstep=False) # Generates members from 0 to 75 years old, separated by an equal distance.
    # print('____________members____________')
    # print(X)

    # Creating membership functions
    kidsMembershipTriangularFunction = [0, 5, 10] #Membership function for child-age (childhood)
    teenagersMembershipTrangularFunction = [10, 15, 20] #Membership function for teenagers
    youthMembershipTriangularFunction = [15, 25, 30] #Membership function for youth
    middleAgedMembershipTriangularFunction = [35, 40, 45] #Membership function for middle-aged

    childhoodDegree = fuzz.membership.trimf(X, kidsMembershipTriangularFunction) #The degree of belonging of X's-members to child's category
    teenagersDegree = fuzz.membership.trimf(X, teenagersMembershipTrangularFunction)
    youthDegree = fuzz.membership.trimf(X, youthMembershipTriangularFunction) #The degree of belonging of X's-members to youth's category, filters out members of this class (those who are not in are attributed zero membership)
    middleAgedDegree = fuzz.membership.trimf(X, middleAgedMembershipTriangularFunction) #The degree of belonging of X's-members to middle-aged's category

    # print('____________Array of ages____________')
    # print(X)
    # print('____________kids membership degrees____________')
    # print(childhoodDegree)
    # print('____________teenagers membership degrees____________')
    # print(teenagersDegree)
    # print('____________youth membership degrees____________')
    # print(youthDegree)
    # print('____________middle-aged membership degrees____________')
    # print(middleAgedDegree)

    one = np.ones(75)
    zero = np.zeros((75,))

    # print('_________________Ones__________________')
    # print(one)
    # print('_________________Zeros__________________')
    # print(zero)

    # https://pythonhosted.org/scikit-fuzzy/api/skfuzzy.html#fuzzy-not
    union = fuzz.fuzzy_or(X, youthDegree, X, middleAgedDegree)[1]
    print('_________________Union__________________')
    print(union)

    # https://pythonhosted.org/scikit-fuzzy/api/skfuzzy.html#fuzzy-and
    # intersection = fuzz.fuzzy_and(X, teenagersDegree, X, youthDegree)[1]
    # print('_________________Intersection__________________')
    # print(intersection)

    #______________________________________________
    from matplotlib import pyplot as plt 

    ## Plotting the youth degree members
    # plt.figure()
    # plt.subplot(1, 1, 1)
    # plt.plot(X, youthDegree)
    # plt.title('Youth')
    # plt.grid(True)
    # plt.show()

    ## Plotting the union of two membership classes
    # plt.figure()
    # plt.subplot(1, 1, 1)
    # plt.plot(X, union)
    # plt.title('Union')
    # plt.grid(True)
    # plt.show()

    ## Plotting the complement of the union of two membership classes
    complement = fuzz.fuzzy_not(union)

    plt.figure()
    plt.subplot(1, 1, 1)
    plt.plot(X, complement)
    plt.title('Complement of union')
    plt.grid(True)
    plt.show()


