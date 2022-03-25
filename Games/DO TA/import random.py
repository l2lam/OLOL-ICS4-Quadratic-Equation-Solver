import random
import time

#Using Random to pick random numbers for everynumber
random_num=[1, 2, 3, 4, 5, 6 , 7 , 8, 9, 10, 11 ,12 , 13, 14, 15, -1, -2, -3, -4, -5, -6 , -7 , -8, -9, -10]
random_exp=[1, 2, 3]

#Time stopwatch
starttime = time.time()
value = ""

#instructions
print("This is VaIoRant")
print("Out of 10 questions, how many can you get right?")
print("Can you beat your origional times")

def mathfun():

#score /10 and when to stop
  score1 = 0
  finished0 = 0

  #while function goes for 10 questions
  while finished0 < 10: 

    #Choosing numbers to use and importing to equation
    questionnum = random.choice(random_num)
    questionnum2 = random.choice(random_num)
    questionexp = random.choice(random_exp)
    print()
    print("solve for x")
    print(questionnum, "*", questionnum2, "^", questionexp, "= X")
    print()
    
    #awnser
    awnser = questionnum * (questionnum2 ** questionexp)

    #tester awnser
    #print(awnser)
    
    #input for awnser
    q1_ans = int(input("Your Answer:"))

    #timer
    totaltime = round((time.time() - starttime), 2)
    
    #input is correct
    if q1_ans == awnser:
      score1 += 1
      print("Correct")
      print("Score:",  score1,  "/ 10")
      finished0 += 1
      print("Total Time: "+str(totaltime))

    #easter egg
    elif q1_ans > 1000000000000000000000000000000000:
      print("ARE YOUUUUU DRUNK?!?!? YOU WIN")
      print("Score:",  "10/ 10")
      print("Total Time: "+str(totaltime))
      
    #input is wrong
    else:
      print("Incorrect buddy")
      print("Score:",  score1, "/ 10")
      finished0 += 1
      print("Total Time: "+str(totaltime))
    
  return 
print(mathfun())