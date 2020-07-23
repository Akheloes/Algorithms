import numpy as np
import skfuzzy as fuzz

if __name__ == "__main__":
    X = np.linspace(start=0, stop=75, num=75, endpoint=True, retstep=False)
    # Creating membership functions
    kidsMembershipTriangularFunction = [0, 5, 10] #Membership function for child-age (childhood)
    teenagersMembershipTrangularFunction = [10, 15, 20] #Membership function for teenagers
    youthMembershipTriangularFunction = [15, 25, 30] #Membership function for youth
    middleAgedMembershipTriangularFunction = [35, 40, 45] #Membership function for middle-aged

    childhoodDegree = fuzz.membership.trimf(X, kidsMembershipTriangularFunction) #The degree of belonging of X-members to child's category
    teenagersDegree = fuzz.membership.trimf(X, teenagersMembershipTrangularFunction)
    youthDegree = fuzz.membership.trimf(X, youthMembershipTriangularFunction) #The degree of belonging of X-members to youth's category
    middleAgedDegree = fuzz.membership.trimf(X, middleAgedMembershipTriangularFunction) #The degree of belonging of X-members to middle-aged's category

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
    # union = fuzz.fuzzy_or(X, youthDegree, X, middleAgedDegree)[1]
    # print('_________________Union__________________')
    # print(union)

    # https://pythonhosted.org/scikit-fuzzy/api/skfuzzy.html#fuzzy-and
    # intersection = fuzz.fuzzy_and(X, teenagersDegree, X, youthDegree)[1]
    # print('_________________Intersection__________________')
    # print(intersection)

    #______________________________________________
    from matplotlib import pyplot as plt 

    plt.figure()

    plt.subplot(1, 1, 1)
    plt.plot(X, youthDegree)
    plt.title('Youth')
    plt.grid(True)
    plt.show()





