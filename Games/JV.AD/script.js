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
      
      timeDisplay.innerHTML = `Time Left: ${timeLeft}`;
      if (timeLeft == 0)
      {
        clearInterval(timerInterval);
      }
    },1000)
  }

//making randomizer with sin,cos, and tan to put in questions 
const trigratios = ["sin","cos","tan"];
const trigratio =  trigratios[Math.floor(Math.random()*trigratios.length)];

//creating function to be able to change trig ratios in question 
function nextQuestion()
{
question = document.getElementById("question");
question.innerHTML = `What is the trig ratio of ${trigratio}?`;


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
function generateRandom(min = 9, max = 15) {

  // find diff
  let difference = max - min;

  // generate random number 
  let rand = Math.random();

  // multiply with difference 
  rand = Math.floor( rand * difference);

  // add with min value 
  rand = rand + min;

  return rand;
}
//hypotenuse has to be greater than two other side 

 let s1 = (generateRandom()); 
 let s2 = Math.ceil(Math.random()*8);
 let s3 = Math.ceil(Math.random()*8);
  
  const hyp = new PIXI.Text(s1);
  hyp.x = 130;
  hyp.y = 120;
  app.stage.addChild(hyp);
  
  const obj = new PIXI.Text(s2);
  obj.x = 100;
  obj.y = 260;
  app.stage.addChild(obj);
  
  const adj = new PIXI.Text(s3);
  adj.x = 5;
  adj.y = 150;
  app.stage.addChild(adj);
  
  const theta = new PIXI.Text('θ');
  theta.x = 36;
  theta.y = 72;
  app.stage.addChild(theta);
  
  //insert trig ratio values in buttons 
  btn1 = document.getElementById("btn1");
  btn1.innerHTML = `${s2}/${s1}`;
  
  btn2 = document.getElementById("btn2");
  btn2.innerHTML = `${s2}/${s3}`;
  
  btn3 = document.getElementById("btn3");
  btn3.innerHTML = `${s3}/${s1}`;
  }

nextQuestion();


  