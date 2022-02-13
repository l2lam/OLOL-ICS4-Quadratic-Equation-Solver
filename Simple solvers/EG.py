'''

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

'''
print ("This project let's you calculate the roots of an equation in the form of ax**2 + Bx + C = 0")
a= float (input ("What is the coefficient of A:"))

b= float (input ("waht is the coefficient of B:"))

c= float (input ("What is the coefficient of C:"))
dis = b**2-4*a*c


if dis < 0:
    print ("There is no real solution due to the discriminant (b**2-4*a*c) is smaller than 0")
    
elif dis > 0:
    print ("There are two solutions since the discriminant (b**2-4*a*c) is larger than 0") 
    print ("Calculating using quadratic formula(-b +/- (b**2-4*a*c)**0.5 / (2*a)")
    xint1=(-b+(dis)**0.5) / (2*a)
    xint2=(-b-(dis)**0.5) / (2*a)
    print ("Roots found and rounded to 2 decimal places")
    roundx1=round(xint1,2)
    roundx2=round(xint2,2)
    print (roundx2, ",",roundx1)
    print ("\033[1;32;40m  \n")   
    print ("authenticating using different method")
    b1= (b / a)
    c1= (c / a)
    m=(-b1 / 2 )  
    print("Mid point located using m = ((b/a) / 2)")
    z=((m**2-c1)**0.5)
    print ("Distance of root from midpoint is calculated by (m**2-(c/a)**0.5)")
    l1=m+z
    l2=m-z
    rl1=round(l1,2)
    rl2=round(l2,2)
    print (rl2, ",",rl1)
    
    
else:
    xint=(-b+(dis)**0.5) / (2*a)
    print("There is one possible solution")
    print(xint)
    

    





























