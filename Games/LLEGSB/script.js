const app = new PIXI.Application({ backgroundColor: 2e0025 });
document.body.appendChild(app.view);
// default text style
const style = new PIXI.TextStyle({
  align: "center",
  dropShadow: true,
  dropShadowBlur: 10,
  dropShadowDistance: 7,
    fill: [
    "red",
    "#4f1144"
  ],
  fontFamily: "Times New Roman",
  fontSize: 42,
  wordWrap: true,
  wordWrapWidth: 500,
});
// style for rule text
const style1 = new PIXI.TextStyle({
  align: "center",
  dropShadow: true,
  dropShadowBlur: 10,
  dropShadowDistance: 7,
    fill: [
    "red",
    "#4f1144"
  ],
  fontFamily: "Times New Roman",
  fontSize: 38,
  wordWrap: true,
  wordWrapWidth: 600,
});

let correctAnswer = null;

// text for rules
const rulesText = new PIXI.Text('',style);
rulesText.x = 275;
rulesText.y = 50;
app.stage.addChild(rulesText);

//question text
const questionText = new PIXI.Text('', style);
questionText.x = 150;
questionText.y = 50;
app.stage.addChild(questionText);
// confirmation text
const confirmationText = new PIXI.Text('', style);
confirmationText.x = 285;
confirmationText.y = 300;
app.stage.addChild(confirmationText);

// text when player quits
const quitText = new PIXI.Text('', style);
quitText.x = 215;
quitText.y = 250;
app.stage.addChild(quitText);

// hint player text
const hintText = new PIXI.Text('', style);
hintText.x = 150;
hintText.y = 275;
app.stage.addChild(hintText);

const pointsText = new PIXI.Text('', style)
pointsText.x = 215;
pointsText.y = 300;
app.stage.addChild(pointsText);
// to store player points
var playerPoints = 0;


// player lives
var playerLives = null;

// first question function
// basic algebra question
function question1(){
  //Change the Welcome text to the question #
  document.getElementById("demo").innerHTML = 'Question 1';
  hintText.text = '';
  pointsText.text = '';
  playerLives = 3;
  playerPoints = 0;
  // Assigns the variables "a" and "b" to random values
  var a = Math.floor((Math.random() * 50) + 1);
  var b = Math.floor((Math.random() * 1000) + 200);
  quitText.text = '';
  // the first question 
  questionText.text = (`Write an albebraic expression for the following verbal expression: The sum of ${b} and ${a} times a number(x).`);
  //defines the correct answer for the question
  correctAnswer = `${a}x+${b}`;
}

//question 2 function
// square question
function question2(){
  document.getElementById("demo").innerHTML = 'Question 2';
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = '';
  var a = Math.floor(Math.random() * (22 - 12 + 1)) + 12;
  var b = 2;
  var c = Math.pow(a, b)
  questionText.text = `Which of the following values of x is a solution of the equation given: x^2 = ${c}`;
  correctAnswer = `${a}`;
}

//question 3 function
// distrutive property question[a(b+c)]
function question3(){
  document.getElementById('demo').innerHTML = "Question 3";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = ''
  var a =  Math.floor(Math.random() * (20 - 2 + 1)) + 2;
  var b =  Math.floor(Math.random() * (20 - 2 + 1)) + 2;
  var c =  Math.floor(Math.random() * (20 - 2 + 1)) + 2;
  var d = `${a}(${b}+${c}x)`
  questionText.text = `Find the answer using the distributive property; ${d}`;
  var aB = (a*b);
  var aC = (a*c);
  correctAnswer = `${aB}+${aC}x`
}
// question 4 function
// like terms question
function question4(){
  document.getElementById('demo').innerHTML = "Question 4";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = ''
  var a = Math.floor(Math.random() * (-20 - 20 + 1)) + 20;
  var b = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
  var c = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
  var d = Math.floor(Math.random() * (-20 - 20 + 1)) + 20;
  var e = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
  questionText.text = `Combine all like terms in the given expression: ${a}x + ${b}y + ${d}x - ${c}z + ${e}y` 
  correctAnswer = `${a+d}x+${b+e}y-${c}z`;
}

// question 5 function
// slope of a line
function question5(){
  document.getElementById('demo').innerHTML = "Question 5";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = ''
  var y1 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  var y2 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  var x1 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  var x2 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  questionText.text = `What is the slope of a line that contain the points (${x1}, ${y1}) and (${x2}, ${y2}).`;
  var slopeEquation = ((y2-y1)/(x2-x1));
  slopeRounded = slopeEquation.toFixed(2);
  correctAnswer = `${slopeRounded}`;
}
//question 6
// length of a line
function question6(){
  document.getElementById('demo').innerHTML = "Question 6";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = ''
  var x1 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  var y1 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  var x2 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  var y2 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  questionText.text = `What is the length of a line segment(to 2 decimal places) with the endpoints (${x1}, ${y1}) and (${x2}, ${y2})`  
  var x = (x2-x1); 
  var y = (y2-y2);
  var xSquare = (x**2);
  var ySquare = (y**2);
  var add = (xSquare+ySquare);
  var squareRoot = (add**0.5);
  ansRounded = squareRoot.toFixed(2);
  correctAnswer = ansRounded;
  
}
// question 7 function
// introduces students to simple grade 10 algebra
// introduction to FOIL method
function question7(){
  document.getElementById('demo').innerHTML = "Question 7";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = '';
  var rndmNum1 = Math.floor(Math.random() * (10 - 2 + 1)) + 10;
  var rndmNum2 = Math.floor(Math.random() * (10 - 2 + 1)) + 10;
  var expression = `(x+${rndmNum1})(x+${rndmNum2})`;
  questionText.text = `Expand the expression ${expression}`;
  var ans1 = `x^2`;
  var ans2 = `${rndmNum1+rndmNum2}x`;
  var ans3 = `${rndmNum1*rndmNum2}`;
  var finalAns = `${ans1}+${ans2}+${ans3}`;
  correctAnswer = finalAns;
}

// a function to check the answer for question 

function checkAnswer(answer){
  hintText.text = '';
    if (answer == correctAnswer) {
      (confirmationText.text = 'Correct!')
      playerPoints += 500;
    }
    else {
      (confirmationText.text = 'Wrong :(')
      playerLives --;
    }
}

// function to change question on button push
var currentQuestionIndex = 0;
// list of functions
const questionList = [question1, question2, question3, question4, question5, question6, question7]; 

function nextQuestion() {
   questionList[currentQuestionIndex]();
   currentQuestionIndex = (currentQuestionIndex + 1) % questionList.length; 
}
var hint1 = "Sum = Addition, Times = multiply"
var hint2 = "x^2 = x*x"
var hint3 = "Multiply both inside #'s by the outside #"
var hint4 = "Combine the terms with the same letters"
var hint5 = "y2-y1..."
var hint6 = "Pythagorean Theorem"

const hintList = [hint1, hint2, hint3, hint4, hint5, hint6];

function hintPlayer(){
  hintText.text = hintList[currentQuestionIndex - 1];
  confirmationText.text = '';
  playerPoints -= 300;
}

function quitGame(){
  currentQuestionIndex = 0;
  quitText.text = "Thanks for playing!";
  pointsText.text = `You earned ${playerPoints} points!`
  confirmationText.text = '';
  questionText.text = '';
  hintText.text = '';
}
// trying to end the game when the player puts the wrong answer 3 times
if (playerLives == 0){
  quitGame()
  
}
