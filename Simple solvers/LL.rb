
puts "This program will calculate the solutions of a quadratic when in the form ax**2 + bx + c."
puts "What is the A value?" 
a = Float(gets) 
puts "What is the B value?"
b = Float(gets)
puts "What is the C value?"
c = Float(gets)

discriminant = Float(b**2-4*a*c)
 
puts "User Index"
puts "* means to multiply (ex. 4*2 = 8)" 
puts "** means to the power of (ex. 2**2 = 4)"
puts "**0.5 means square root (ex. 4**0.5 = 2)"
puts " / means dividing (ex. 4 / 2 = 2)"
if discriminant < 0 
    puts "There are no solutions because the discriminant (b**2-4*a*c) is less than 0;"

elsif discriminant > 0
    puts "There are two solutions because the discriminant (b**2-4*a*c) is greater than 0,"
    puts "Finding solutions using quadratic formula(-b ± (b**2-4*a*c)**0.5) / (2*a)"
    puts "Found! The solutions are rounded to 2 decimal places"
    puts "The solutions are:"
    xint1 = (-b + (discriminant)**0.5) /(2*a)
    xint2 = (-b - (discriminant)**0.5) /(2*a)
    puts    xint1.round(2), xint2.round(2)
    puts "Finding solutions using a different method..."
    newB = (b / a)
    newC = (c / a)
    midpoint = Float(-newB / 2)
    puts "This method will first find the midpoint of the solutions by finding the average of the solutions by dividing B by A, then taking that value and dividing by 2"
    puts "Found! The midpoint is '#{midpoint.round(2)}'"
    distance = Float((midpoint**2-newC)**0.5)
    puts "This method will now find the distance from the midpoint to each solution by using (midpoint**2-(c / a)**0.5)"
    puts "Found! The distance is '#{distance.round(2)}' to each solution"
    newMethodx1 = midpoint+distance
    newMethodx2 = midpoint-distance
    puts "This method now will find the solutions using (midpoint ± distance)"
    puts "Comparing solutions from both methods..."
    if xint1 == newMethodx1|| newMethodx1 && xint2 == newMethodx2|| newMethodx1
        puts "The solutions are the same!"
        puts "The solutions are #{newMethodx1.round(2)} and #{newMethodx2.round(2)}"
    end
    
else 
    puts "There is one solution because the discriminant(b**2-4*a*c) is equal to 0;"
    xint = (-b + (discriminant)**0.5) / (2*a)
    puts xint










end
