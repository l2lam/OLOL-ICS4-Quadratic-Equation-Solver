print('Insert values for a, b, c')
#Quadratic formula
a=float(input())
b=float(input())
c=float(input())
d=(b**2)-(4*a*c) #The discriminant
if (d<0):
    print('No solution') #There is no solution if d is less than 0
if (d==0):
    print('1 solution') #There is one solution if d is equal to 0
if (d>0):
    print('2 solutions') #There are two solutions if d is greater than 0
x=((-b)+(d**0.5))/2*a 
x2=((-b)-(d**0.5))/2*a 
#New method
m=(x+x2)/2 #The average of the roots
k=m-x #Distance from the root
k2=m-x2 #Distance from the other root (If there is a second root)
x3=(m)-(k) #Average of the roots - Distance from the root
x4=(m)-(k2) #Average of the roots - Distance from the other root (If there is a second root)
if (d==0)or(d>0):
    if (x==x3): #To make sure the quadratic formula and new method give the same result
        a1=round(x, 2) #Round to two decimal places
        print(a1)
if (d>0):
    if (x2==x4): #To ensure the quadratic formula and new method still give the same result
        a2=round(x2, 2) #Round to two decimal places
        print(a2)
print('Solved using the quadratic formula and new method')
#If possible, less code could be used to make the program more efficient while providing the same result
#Conditions like 'else' or 'if else' could be utilised to achieve this