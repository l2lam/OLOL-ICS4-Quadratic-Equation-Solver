import random

import Functions

import Text

# Import math Library
import math
# Print the value of pi
import pi
#print (math.pi)

#(pi) = round((math.pi), 3)

Text.welcomeMessage()

for x in range (500):
  
  #Q1 Perimeter of a square
  Text.question1(Functions.Q1var1)
  
  Functions.square(Functions.Q1var1)
  print('The formula for perimeter of a square is, Side * 4')
  num1 = {Functions.Q1var1}
  num2 = 4
  
  num1 = float(Functions.Q1var1)
  num2 = float(4)
  answer1 = Functions.multiply(num1, num2)

  answer_1 = input('Input your number here!:')

  if answer_1.lower() == "stop":
      Functions.stop()
  
  if answer_1.lower() == (f"{answer1}"):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, {Functions.Q1var1} * 4 is {Functions.answer1} m")
  
###################################################################################
  
  #Q2 Area of Square
  
  Text.question2(Functions.Q2var2)
  
  Functions.square(Functions.Q2var2)
  
  print('The formula for area of a square is, Length * Width')
  
  num3 = {Functions.Q2var2}
  
  num3 = float(Functions.Q2var2)
  answer2 = Functions.multiply(num3, num3)
  
  answer_1 = input('Input your number here!:')
     # f"a){Functions.Q1var1 + 6.0}\nb){Functions.Q1var1 + 8.0}\nc){Functions.Q1var1 * 3.0}\nd){answer2}\n:")
  
  if answer_1.lower() == "stop":
    Functions.stop()
    
  if answer_1.lower() == (f"{answer2}"):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, {Functions.Q2var2} * {Functions.Q2var2} is {answer2} m")
  
      ####################################################################################
  
  #Q3 area of a sqaure
  
  Text.question3(Functions.Q3var3)
  
  Functions.square(Functions.Q3var3)
  
  print('The formula for area of a square is, Length * Width')
  
  num4 = {Functions.Q3var3}
  
  num5 = float(Functions.Q3var3)
  
  answer3 = (num5 * num5)
  
  answer_1 = input('Input your number here!:')
  
  
  if answer_1.lower() == "stop":
    Functions.stop()
  
  if answer_1.lower() == (f"{answer3}"):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, {Functions.Q3var3} * {Functions.Q3var3} is {answer3} m ")
  
      ####################################################################################
  
  #Q4 Perimeter of a rectangle
  
  Text.question4(Functions.Q4var6, Functions.Q4var7)
  
  Functions.rectangle(Functions.Q4var6, Functions.Q4var7)
  
  print('The formula for perimeter of a rectangle is, (L + W) * 2')
  
  num6 = {Functions.Q4var6}
  num7 = {Functions.Q4var7}
  
  num6 = float(Functions.Q4var6)
  num7 = float(Functions.Q4var7)
  answer4 = (num6 + num7) * 2
  
  answer_1 = input('Input your number here!:')
  
  if answer_1.lower() == "stop":
    Functions.stop()

  if answer_1.lower() == (f'{answer4}'):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, ({Functions.Q4var6} + {Functions.Q4var7})*2 is {answer4} m")
      ####################################################################################
  
  #Q5 perimeter of a rectangle
  
  Text.question5(Functions.Q5var8, Functions.Q5var9)
  
  Functions.rectangle(Functions.Q5var8, Functions.Q5var9)
  
  print('The formula for perimeter of a rectangle is, (L + W) * 2')
  

  num8 = {Functions.Q5var8}
  num9 = {Functions.Q5var9}
  
  num8 = float(Functions.Q5var8)
  num9 = float(Functions.Q5var9)
  answer5 = (num8 + num9) * 2
  
  answer_1 = input('Input your number here!:')
  
  if answer_1.lower() == "stop":
      Functions.stop()
  
  if answer_1.lower() == (f'{answer5}'):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, ({Functions.Q5var8} + {Functions.Q5var9})*2 is {answer5} m")
  
      ####################################################################################
  
  #Q6 Perimeter of a rectangle
    
  Text.question6(Functions.Q6var10, Functions.Q6var11)
  
  Functions.rectangle(Functions.Q6var10, Functions.Q6var11)

  print('The formula for perimeter of a rectangle is, (L + W) * 2')
  
  num10 = {Functions.Q6var10}
  num11 = {Functions.Q6var11}
  
  num10 = float(Functions.Q6var10)
  num11 = float(Functions.Q6var11)
  answer6 = (num10 + num11) * 2
  
  answer_1 = input('Input your number here!:')
     
  if answer_1.lower() == "stop":
    Functions.stop()
  
  if answer_1.lower() == (f"{answer6}"):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, ({Functions.Q6var10} + {Functions.Q6var11})*2 is {answer6} m")
      ####################################################################################
  
      #Q7 circumference of a circle
  Text.question7(Functions.Q7var12)
  
  Functions.circle(Functions.Q7var12)

  print('The formula for circumference of a circle is, 2 * PI * Radius')
  
  num12 = {Functions.Q7var12}
  
  num12 = float(Functions.Q7var12)
  answer7 = (2 * (Functions.pi) * num12)
  
  answer_1 = input('Input your number here!:')
  
  if answer_1.lower() == "stop":
    Functions.stop()
  
  if answer_1.lower() == (f'{answer7}'):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, 2 * {Functions.pi} * {Functions.Q7var12} is {answer7}m")
  
      ####################################################################################
  
      #Q8 circumference of a circle
  Text.question8(Functions.Q8var13)
 
  Functions.circle(Functions.Q8var13)

  print('The formula for circumference of a circle is, 2 * PI * Radius')
  
  num13 = {Functions.Q8var13}
  
  num13 = float(Functions.Q8var13)
  answer8 = (2 * (Functions.pi) * num13)
  
  answer_1 = input('Input your number here!:')
    
  if answer_1.lower() == "stop":
    Functions.stop()
    
  if answer_1.lower() == (f'{answer8}'):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, 2 * {Functions.pi} * {Functions.Q8var13} is {answer8} m")
  
  print('')
  ###################################################################################
  
  #Q9 area of a circle
  Text.question9(Functions.Q9var14)
  
  Functions.circle(Functions.Q9var14)

  print('The formula for area of a circle is, PI * R * R')
  
  num14 = {Functions.Q9var14}
  
  num14 = float(Functions.Q9var14)
  answer9 = ((Functions.pi) * num14 * num14)
  
  answer_1 = input('Input your number here!:')
    
  if answer_1.lower() == "stop":
    Functions.stop()
    
  if answer_1.lower() == (f'{answer9}'):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, ({(Functions.pi)}*{Functions.Q9var14}*{Functions.Q9var14} is {answer9} m)")
      ###############################################################################
  
  #Q10 area of a circle

  Text.question10(Functions.Q10var15)
  
  Functions.circle(Functions.Q10var15)

  print('The formula for area of a circle is, PI * R * R')
  
  num15 = {Functions.Q10var15}
  
  num15 = float(Functions.Q10var15)
  answer10 = ((Functions.pi) * num15 * num15)
  
  answer_1 = input('Input your number here!:')
  
  if answer_1.lower() == "stop":
    Functions.stop()
  
  if answer_1.lower() == (f'{answer10}'):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, ({(Functions.pi)}*{Functions.Q10var15}*{Functions.Q10var15} is {answer10} m)")
  
  ######################################################Q###############
  
  
  
  #Q11 area of a triangle

  Text.question12(Functions.Q12var18, Functions.Q12var17)
  
  Functions.triangle(Functions.Q12var18, Functions.Q12var17)

  print('The formula for area of a triangle is, (Base * Height) / 2')

  num17 = {Functions.Q12var17}
  num18 = {Functions.Q12var18}
  num17 = float(Functions.Q12var17)
  num18 = float(Functions.Q12var18)
  num19 = (num17 * num18)
  answer12 = num19 / 2
  
  answer_1 = input('Input your number here!:')
  
  if answer_1.lower() == "stop":
    Functions.stop()
    
  if answer_1.lower() == (f'{answer12}'):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, ({Functions.Q12var17} * {Functions.Q12var18})/2 is {answer12} m")
  ###################################################
  
  #Q12 area of a triangle

  Text.question13(Functions.Q13var20, Functions.Q13var19)
  
  Functions.triangle(Functions.Q13var20, Functions.Q13var19)

  print('The formula for area of a triangle is, (Base * Height) / 2')
  
  num20 = {Functions.Q13var19}
  num21 = {Functions.Q13var20}
  num20 = float(Functions.Q13var19)
  num21 = float(Functions.Q13var20)
  num22 = (num19 * num20)
  answer13 = num22 / 2
  
  answer_1 = input('Input your number here!:')
  
  if answer_1.lower() == "stop":
    Functions.stop()
    
  if answer_1.lower() == (f"{answer13}"):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, ({Functions.Q13var19} * {Functions.Q13var20})/2 is {answer13}  m")
  ###########################################################################
  
  #Q13 area of a triangle
  
  Text.question14(Functions.Q14var22, Functions.Q14var21)
  
  Functions.triangle(Functions.Q14var22, Functions.Q14var21)

  print('The formula for area of a triangle is, (Base * Height) / 2')
  
  num23 = {Functions.Q14var21}
  num24 = {Functions.Q14var22}
  num23 = float(Functions.Q14var21)
  num24 = float(Functions.Q14var22)
  num25 = (num23 * num24)
  answer14 = num25 / 2
  
  answer_1 = input('Input your number here!:')
  
  if answer_1.lower() == "stop":
    Functions.stop()
    
  if answer_1.lower() == (f"{answer14}"):
      print("Correct")
      Functions.score2 = Functions.score2 + 1
      print(f"You have {Functions.score2} point(s)")
  
  else:
      print(f"Incorrect, ({Functions.Q14var21} * {Functions.Q14var22})/2 is {answer13} m")