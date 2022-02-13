
puts "This program will calculate the solutions of a quadratic when in the form ax**2 + bx + c."
puts "What is the A value?" 
a = Float(gets) 
puts "What is the B value?"
b = Float(gets)
puts "What is the C value?"
c = Float(gets)

dis = Float(b**2-4*a*c)
 
puts "User Index"
puts "* means to multiply(ex. 4*2 = 8)"
puts "** means to the power of (ex. 2**2 = 4)"
puts "**0.5 means square root (ex. 4**0.5 = 2)"
puts " / means dividing (ex. 4 / 2 = 2)"
if dis < 0 
    puts "There are no solutions because the discriminant (b**2-4*a*c) is less than 0;"

elsif dis > 0
    puts "There are two solutions because the discriminant (b**2-4*a*c) is greater than 0,"
    puts "Finding solutions using quadratic formula(-b ± (b**2-4*a*c)**0.5) / (2*a)"
    puts "Found! The solutions are rounded to 2 decimal places"
    puts "The solutions are:"
    xint1 = (-b + (dis)**0.5) /(2*a)
    xint2 = (-b - (dis)**0.5) /(2*a)
    puts    xint1.round(2), xint2.round(2)
    puts "Finding solutions using a different method..."
    b1 = (b / a)
    c1 = (c / a)
    m = Float(-b1 / 2)
    puts "This method will first find the midpoint of the solutions by finding the average of the solutions by dividing B by A, then taking that value and dividing by 2"
    puts "Found! The midpoint is '#{m.round(2)}'"
    d = Float((m**2-c1)**0.5)
    puts "This method will now find the distance from the midpoint to each solution by using (m**2-(c / a)**0.5)"
    puts "Found! The distance is '#{d.round(2)}' to each solution"
    s1 = m+d
    s2 = m-d
    puts "This method now will find the solutions using (midpoint ± distance)"
    puts "Comparing solutions from both methods..."
    if xint1 == s1 || s2 && xint2 == s2 || s1
        puts "The solutions are the same!"
        puts "The solutions are #{s1.round(2)} and #{s2.round(2)}"
    end
    
else 
    puts "There is one solution because the discriminant(b**2-4*a*c) is equal to 0;"
    xint = (-b + (dis)**0.5) / (2*a)
    puts xint










end
