print('Welcome to the quadractic equation roots calculator!')
print('Please enter the values for a, b, and c')
# Quadratic formula
# 'float' allows any number, even decimal numbers, to be inserted
# 'int' isn't used here because 'int' only allows non-decimal numbers to be inserted
a=float(input())  
b=float(input()) 
c=float(input())
discriminant=(b**2)-(4*a*c)
if (discriminant<0):
    print('There is no solution because the discriminant is less than zero') # There is no solution if d is less than 0
if (discriminant==0):
    print('1 solution') 
    # There is one solution if d is equal to 0
if (discriminant>0):
    print('2 solutions') 
    # There are two solutions if d is greater than 0
root1QuadraticFormula=((-b)+(discriminant**0.5))/(2*a) 
# First answer given by the quadratic formula
root2QuadraticFormula=((-b)-(discriminant**0.5))/(2*a)  
# Second answer given by the quadratic formula

# New method
averageOfRoots=(root1QuadraticFormula+root2QuadraticFormula)/2 
distanceFromRoot=averageOfRoots-root1QuadraticFormula 
distanceFromRoot2=averageOfRoots-root2QuadraticFormula 
root1NewMethod=(averageOfRoots)-(distanceFromRoot) 
# This is the first answer given by the new method 
root2NewMethod=(averageOfRoots)-(distanceFromRoot2) 
# This is the second answer given by the new method (If there is a second root)
if (discriminant==0)or(discriminant>0):
    # To make sure that the quadratic formula and new method give the same result for the first root
    if (root1QuadraticFormula==root1NewMethod): 
        answer1=round(root1QuadraticFormula, 2) # root1QuadraticFormula rounded to two decimal places
        print(answer1) # The first final answer
if (discriminant>0):
    if (root2QuadraticFormula==root2NewMethod): 
        # To make sure that the quadratic formula and new method give the same result for the second root
        answer2=round(root2QuadraticFormula, 2) 
        # root2QuadraticFormula rounded to two decimal places
        print(answer2) # The second final answer
if (discriminant==0) or (discriminant>0):
    print('Solved using the quadratic formula and new method, in the quadractic equations roots calculator')