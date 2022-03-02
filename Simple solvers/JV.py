#I used Python to solve the quadratic using two methods: the quadratic equation and the new method

#have user enter a,b,c to solve quadratic 

print('Enter values for a,b,c to solve for ax^2 + bx + c =0')

import math

#input values 
a = int(input('a = '))
b = int(input('b = '))
c = int(input('c = '))

#calculate the discriminate (part of the quadratic equation)
d = (b**2) - (4*a*c) 

#solve for roots using the quadratic equation
#depending on the value of d, there are either 2,1, or 0 roots in the equation (because d is square rooted and can produce a value>0, 0, or an error if negative #)
if d > 0:
    root1 = round(((-b) + math.sqrt(d)) / (2*a),2)
    root2 = round(((-b) - math.sqrt(d)) / (2*a),2)
    print('The roots using the quadratic equation are ' + str(root1) + ' and ' + str(root2))

elif d == 0:
    root= round(((-b) / 2 * a),2)
    print('The root using the quadratic equation is ' + str(root))

else:
    print('There are no roots to the equation')


#solving for the roots using the new method
print('\n') #skips a line to create space between the two sentences
print('New method to solve equation')

#average of the roots (m)
m = -(b/a) / 2
print('The average of the roots is ' + str(round(m,2)))

#distance from the roots to the average before square rooting
z = m**2 - (c / a)

#the answer for k can produce a value>0, 0, or an error because z needs to be square rooted to find k 
#find the distance from the roots (k)
if z > 0:
    k = math.sqrt(z)
    print('The distance from the roots to the average is ' + str(round(k,2)))
    
    #find the roots by adding and subtracting the distance from the average

    root1new = round(m + k,2) 
    root2new = round(m - k,2)

    print('The roots for the equation using the new method are '+ str(root1new) + ' and ' + str(root2new))
   
    #verifying both methods produce the same results 
    if (root1==root1new and root2==root2new) or (root1==root2new and root2==root1new): #sometimes the roots are the same but in a different order
        print('Both methods work!')

    else:
        print('The second method does not work :(')
        
elif z == 0:
    rootnew = round(m,2)
    print('The distance from the roots is 0.')
    
    print('Therefore, the root for the equation using the new method is ' + str(rootnew))

    #verifying both methods produce the same results
    if root==rootnew:
        print('Both methods work!')
    else:
        print('The second method does not work :(')
else:
    print('There are no roots in the equation because the distance from the roots is negative')
    #verifying both methods produce the same results 
    if d<0 and z<0:
        print('Both methods work!')
    else:
        print('The second method does not work :(')
    
print('To find out more about the new method to solve quadratic equations, check out this artcile: https://www.sciencealert.com/math-genius-has-come-up-with-a-wildly-simple-new-way-to-solve-quadratic-equations')   
    
#improvements: use less lines of code and condense it. Try using functions.
#find an easier way to verify both methods to produce the same results

#future plans: maybe make a graph that shows where the roots are for users to visual it 