import numpy as np
import skfuzzy as fuzz

if __name__ == "__main__":
    X = np.linspace(start=0, stop=75, num=75, endpoint=True, retstep=False)
    # Creating membership functions
    kidsMembershipTriangularFunction = [0, 5, 10] #Membership function for child-age (childhood)
    youthMembershipTriangularFunction = [15, 25, 30] #Membership function for youth
    middleAgedMembershipTriangularFunction = [35, 40, 45] #Membership function for middle-aged

    childhoodDegree = fuzz.membership.trimf(X, kidsMembershipTriangularFunction) #The degree of belonging of X-members to child's category
    younthDegree = fuzz.membership.trimf(X, youthMembershipTriangularFunction) #The degree of belonging of X-members to youth's category
    middleAgedDegree = fuzz.membership.trimf(X, middleAgedMembershipTriangularFunction) #The degree of belonging of X-members to middle-aged's category

    # print('____________Array of ages____________')
    # print(X)
    # print('____________kids membership degrees____________')
    # print(childhoodDegree)
    # print('____________youth membership degrees____________')
    # print(younthDegree)
    # print('____________middle-aged membership degrees____________')
    # print(middleAgedDegree)

    one = np.ones(75)
    zero = np.zeros((75,))

    # print('_________________Ones__________________')
    # print(one)
    # print('_________________Zeros__________________')
    # print(zero)

    # https://pythonhosted.org/scikit-fuzzy/api/skfuzzy.html#fuzzy-not
    union = fuzz.fuzzy_or(X, younthDegree, X, middleAgedDegree)
    print('_________________Union__________________')
    print(union[1])

