//making timer 
let timeLeft = 60;
let timerInterval;
function startGame()
  {
    document.getElementById("startBtn").disabled = true;
    
    nextQuestion();

    let timeDisplay=document.getElementById("timeDisplay");
    timeDisplay.hidden = false;
    timerInterval = setInterval(function(){
      timeLeft -= 1;
      
      timeDisplay.innerHTML = "Time Left: " + timeLeft;
      if (timeLeft == 0)
      {
        clearInterval(timerInterval);
      }
    },1000)
  }


//making randomizer with sin,cos, and tan to put in questions 
var trigratios = ["sin","cos","tan"];
var trigratio =  trigratios[Math.floor(Math.random()*trigratios.length)];

//creating function to be able to change trig ratios in question 
function nextQuestion()
{
question = document.getElementById("question");
question.innerHTML = "What is the trig ratio of " + trigratio + "?";
}

//transparent background canvas
const app = new PIXI.Application({ transparent: true });
document.body.appendChild(app.view);

//making triangle
const graphics = new PIXI.Graphics();

graphics.beginFill(0x48CCCD);
graphics.lineStyle(4, 0x000000, 1);
graphics.moveTo(30, 50);
graphics.lineTo(30, 250);
graphics.lineTo(30, 250);
graphics.lineTo(220, 250);
graphics.closePath();
graphics.endFill();

app.stage.addChild(graphics);

//labeling sides

s1 = 10
s2 = 7
s3 = 5
const hyp = new PIXI.Text(s1);
hyp.x = 130;
hyp.y = 120;
app.stage.addChild(hyp);

const obj = new PIXI.Text(s2);
obj.x = 100;
obj.y = 260;
app.stage.addChild(obj);

const adj = new PIXI.Text(s3)
adj.x = 5;
adj.y = 150;
app.stage.addChild(adj);


