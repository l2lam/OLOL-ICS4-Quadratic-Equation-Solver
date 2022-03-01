'''

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

'''
#This program uses the quadratic equation and the new equation (Prof. Loh's new way) to solve quadratic equations
print ("This project let's you calculate the roots of an equation in the form of ax**2 + Bx + C = 0")
a= float (input ("What is the coefficient of A:"))

b= float (input ("waht is the coefficient of B:"))

c= float (input ("What is the coefficient of C:"))

#calculating the discriminant (d) of equation   (-b +/- (b**2-4*a*c)**0.5 / (2*a)
d = b**2-4*a*c
#the value of d tells us how many roots there are, if d<0 no roots, if d>0 two possible roots, or if d=0 1 root is can be found

if d < 0:
    print ("There is no real solution due to the discriminant (b**2-4*a*c) is smaller than 0")
    
    
elif d > 0:
    print ("There are two solutions since the discriminant (b**2-4*a*c) is larger than 0") 
    print ("Calculating using quadratic formula(-b +/- (b**2-4*a*c)**0.5 / (2*a)")
    xint1=(-b+(d)**0.5) / (2*a)
    xint2=(-b-(d)**0.5) / (2*a)
    print ("Roots found and rounded to 2 decimal places")
    roundx1=round(xint1,2)
    roundx2=round(xint2,2)
    print (roundx2, ",",roundx1)
    print ("\033[1;32;40m  \n")   
    #using Prof.Loh's new method to verify the answer given by the quadratic equation
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
    
    #Calculating roots incase there is one solution when discriminant  = 0
else:
    xint=(-b+(d)**0.5) / (2*a)
    print("There is one possible solution when discriminant is equal to zero (b**2-4ac)")
    print(xint)
    #using Prof.Loh's new method to verify answer given by the quadratic equation
    print ("authenticating using different method")
    b2= (b / a)
    c2= (c / a)
    m=(-b2 / 2 )  
    #Mid point located using m = ((b/a) / 2)
    k=((m**2-c2)**0.5)
    print ("Distance of root from midpoint is calculated by (m**2-(c/a)**0.5)")
    p1=m+k
    rp1=round(p1,2)
    print (rp1)

    





























