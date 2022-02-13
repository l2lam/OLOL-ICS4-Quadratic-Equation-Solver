'''

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

'''
print('Hello today im going to be showing you how to find the roots of a quadractic equation')
a = float(input("What does A equal to?"))

b = float(input("What deos B equal to?"))

c = float(input("What does C equal to?"))
dis = b**2-4*a*c


if dis < 0:
    print("there are no solutions because the discriminant  (b**2-4*a*c)is smaller than 0 ")
    
elif dis > 0:
    print ("There are two possible solutions because the discriminant (b**2-4*a*c)is bigger than 0")
    print ("working out using quadratic formation(-b +/- (b**2-4*a*c)**0.5 / (2*a)")
    xint1=(-b+(dis)**0.5) / (2*a)
    xint2=(-b-(dis)**0.5) / (2*a)
    print  ("sorted out the roots and accumulated to 2 decimal places")
    roundx1=round(xint1,2)
    roundx2=round(xint2,2)
    print (roundx2, ",",roundx1)
    print("\033[1;31;40m   \n")
    print("verifying by using a different method")
    b1= (b / a)
    c1= (c / a)
    m=(-b1 /2)
    print("centre is placed by using m = ((b/a) / 2)")
    z=((m**2-c1)**0.5)
    print ("interspace of root from centre is woked out by (m**2-(c/a)**0.5)")
    l1=m+z
    l2=m-z
    tl1=round(l1,2)
    tl2=round(l2,2)
    print (tl2, "," ,tl1)
    
    
else:
    xint=(-b+(dis)**0.5) / (2*a)
    print("There is one possible solution")
    print (xint)


