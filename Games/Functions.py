
import random

import math

import pi


randomNumber1 = random.randint(1, 15)

randomNumber2 = random.randint(0,3)


def stop():
  print(f"Your final score is {score2}")
  exit()


    
  
var = (int(randomNumber1))
Q1var1 = (int(randomNumber1 + 1))
#This option was also used to generate incorrect answers

Q2var2 = (int(randomNumber1 + 3))

Q3var3 = (int(randomNumber1 + 2))

#var4 = (int(randomNumber + 26))
#var5 = (int(randomNumber + 22))
#This question was removed

Q4var6 = (int(randomNumber1 + 3))
Q4var7 = (int(randomNumber1 + 6))

Q5var8 = (int(randomNumber1 * 3))
Q5var9 = (int(randomNumber1 + 37))

Q6var10 = (int(randomNumber1 + 112))
Q6var11 = (int(randomNumber1 + 86))

Q7var12 = (int(randomNumber1 + 4))

Q8var13 = (int(randomNumber1 * 2))

Q9var14 = (int(randomNumber1 + 5))

Q10var15 = (int(randomNumber1 + 18))

Q11var16 = (int(randomNumber1 + 3))

Q12var17 = (int(randomNumber1 + 16))
Q12var18 = (int(randomNumber1 + 14))

Q13var19 = (int(randomNumber1 + 17))
Q13var20 = (int(randomNumber1 + 23))

Q14var21 = (int(randomNumber1 + 44))
Q14var22 = (int(randomNumber1 + 44))


score2 = 0

def stop():
  print(f"Your final score is {score2}")
  exit()

def hint(x):
  if (score2>=3):
    print(f'The formula for the perimeter of a {x} is side length times 4')
  else:
    print("You don't have enough points")

(pi) = round((math.pi), 3)


#this is for the calculator

# This function adds two numbers
def add(x, y):
    return x + y

# This function subtracts two numbers
def subtract(x, y):
    return x - y

# This function multiplies two numbers
def multiply(x, y):
    return x * y

# This function divides two numbers
def divide(x, y):
    return x / y

#var = (int(randomNumber))

num1 = Q1var1
num2 = 4
  
num1 = float(Q1var1)
num2 = float(4)
answer1 = multiply(num1, num2)

# Shapes
def square(x):
  print(f'    -------')
  print(f'    |     | {x} m')
  print(f'    |     |')
  print(f'    -------')
  print('')

def rectangle(x, y):
  print(f'    --------------       ')
  print(f'    |            |  {x}m ')
  print(f'    |            |       ')
  print(f'    --------------       ')
  print(f'          {y}m')
  print('')

def circle(x):
  print(f'      ◜◝ {x} m    ')
  print(f'      ◟◞          ')
  print('')

def triangle(x, y):
  print(f'      /\           ')                                       
  print(f'     /  \          ')
  print(f'    /    \         ')
  print(f'   /      \        ')
  print(f'  /  {x}m   \       ')
  print(f' /          \      ')
  print(f' ------------      ')
  print(f'      {y}m         ')
  print('')