import random
import time
from numpy.random import seed
from numpy.random import randint

#Using Random to pick random numbers for everynumber
seed(1)
values = randint(1, 10, 20)
random_exp=[1, 2, 3]

#Time stopwatch
starttime = time.time()
value = ""

#instructions
print("This is VaIoRant")
print("10 questions, how many can you get right?")
print("Can you beat your origional times")

def mathfun():

  try: 

  #score /10 and when to stop
    score1 = 0
    finished = 0

  #while function goes for 10 questions
    while finished < 10: 

    #Choosing numbers to use and importing to equation
      questionnum = random.choice(values)
      questionnum2 = random.choice(values)
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
        finished += 1
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
        finished += 1
        print("Total Time: "+str(totaltime))

  #Quit command
  except KeyboardInterrupt: #ctrl + c
    print()
    print("You Quit.  :(")
    print("You Got", score1, "/ 10")
  return 
mathfun()