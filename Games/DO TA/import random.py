import random

random_num=[1, 2, 3, 4, 5, 6 , 7 , 8, 9, 10, 11 ,12 , 13, 14, 15, -1, -2, -3, -4, -5, -6 , -7 , -8, -9, -10]


random_exp=[1, 2, 3]


print("This is VaIoRant")
print("Out of 10, how many can you get right?")

def mathfun():

  score1 = 0
  finished0 = 0
  
  while finished0 < 10: 
    print()
    questionnum = random.choice(random_num)
    questionnum2 = random.choice(random_num)
    questionexp = random.choice(random_exp)
    print()
    print("solve for x")
    print(questionnum, "*", questionnum2, "^", questionexp, "= X")
    print()
    
    awnser = questionnum * (questionnum2 ** questionexp)
    print(awnser)
    print()
    
    q1_ans = int(input("Your Answer:"))

    
    if q1_ans == awnser:
      score1 += 1
      print("Correct")
      print("Score:",  score1,  "/ 10")
      finished0 += 1

    elif q1_ans > 1000000000000000000000000000000000:
      print("ARE YOUUUUU DRUNK?!?!? YOU WIN")
      print("Score:",  "10/ 10")
      
    else:
      print("Incorrect buddy")
      print("Score:",  score1, "/ 10")
      finished0 += 1

    
  return 

  



print(mathfun())