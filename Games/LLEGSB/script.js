const app = new PIXI.Application({ backgroundColor: 2e0025 });
document.body.appendChild(app.view);
// default text style
const style = new PIXI.TextStyle({
  align: "left",
  dropShadow: true,
  dropShadowBlur: 10,
  dropShadowDistance: 7,
    fill: [
    "red",
    "#8800a3"
  ],
  fontFamily: "Times New Roman",
  fontSize: 42,
  wordWrap: true,
  wordWrapWidth: 500,
});
// style for rule text
const style1 = new PIXI.TextStyle({
  align: "left",
  dropShadow: true,
  dropShadowBlur: 10,
  dropShadowDistance: 7,
    fill: [
    "red",
    "#d1ae00"
  ],
  fontFamily: "Times New Roman",
  fontSize: 34,
  wordWrap: true,
  wordWrapWidth: 650,
});

let correctAnswer = null;

//question text
const questionText = new PIXI.Text('', style);
questionText.x = 150;
questionText.y = 75;
app.stage.addChild(questionText);
// confirmation text
const confirmationText = new PIXI.Text('', style);
confirmationText.x = 285;
confirmationText.y = 350;
app.stage.addChild(confirmationText);

// text when player quits
const quitText = new PIXI.Text('', style);
quitText.x = 215;
quitText.y = 250;
app.stage.addChild(quitText);

// hint player text
const hintText = new PIXI.Text('', style1);
hintText.x = 125;
hintText.y = 350;
app.stage.addChild(hintText);

const pointsText = new PIXI.Text('', style)
pointsText.x = 215;
pointsText.y = 300;
app.stage.addChild(pointsText);

// to store player points
var playerPoints = 0;




// first question function
// basic algebra question
function question1(){
  //Change the Welcome text to the question #
  document.getElementById("demo").innerHTML = 'Question 1';
  hintText.text = '';
  pointsText.text = '';
  playerPoints = 0;
  quitText.text = '';
  const rndmNum1 = Math.floor((Math.random() * 50) + 1);
  const rndmNum2 = Math.floor((Math.random() * 1000) + 200);
  questionText.text = (`Write an albebraic expression for the following verbal expression: The sum of ${rndmNum2} and ${rndmNum1} times a number(x).`);
  //defines the correct answer for the question
  correctAnswer = `${rndmNum1}x+${rndmNum2}`;
}

//question 2 function
// square question
function question2(){
  document.getElementById("demo").innerHTML = 'Question 2';
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = '';
  const rndmNum1 = Math.floor(Math.random() * (22 - 12 + 1)) + 12;
  const power = 2;
  var answr = Math.pow(rndmNum1, power)
  questionText.text = `Which of the following values of x is a solution of the equation given: x^2 = ${answr}`;
  correctAnswer = `${rndmNum1}`;
}

//question 3 function
// distrutive property question[a(b+c)]
function question3(){
  document.getElementById('demo').innerHTML = "Question 3";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = ''
  const rndmNum1 =  Math.floor(Math.random() * (20 - 2 + 1)) + 2;
  const rndmNum2 =  Math.floor(Math.random() * (20 - 2 + 1)) + 2;
  const rndmNum3 =  Math.floor(Math.random() * (20 - 2 + 1)) + 2;
  const expression = `${rndmNum1}(${rndmNum2}+${rndmNum3}x)`
  questionText.text = `Find the answer using the distributive property; ${expression}`;
  const rndmNum1times2 = (rndmNum1*rndmNum2);
  const rndmNum1times3 = (rndmNum1*rndmNum3);
  correctAnswer = `${rndmNum1times2}+${rndmNum1times3}x`
}
// question 4 function
// like terms question
function question4(){
  document.getElementById('demo').innerHTML = "Question 4";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = ''
  const rndmNum1 = Math.floor(Math.random() * (-20 - 20 + 1)) + 20;
  const rndmNum2 = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
  const rndmNum3 = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
  const rndmNum4 = Math.floor(Math.random() * (-20 - 20 + 1)) + 20;
  const rndmNum5 = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
  questionText.text = `Combine all like terms in the given expression: ${rndmNum1}x + ${rndmNum2}y + ${rndmNum4}x - ${rndmNum3}z + ${rndmNum5}y` 
  correctAnswer = `${rndmNum1+rndmNum4}x+${rndmNum2+rndmNum5}y-${rndmNum3}z`;
}

// question 5 function
// slope of a line
function question5(){
  document.getElementById('demo').innerHTML = "Question 5";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = ''
  const y1 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  const y2 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  const x1 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  const x2 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  questionText.text = `What is the slope of a line(to 2 decimal places) that contain the points (${x1}, ${y1}) and (${x2}, ${y2}).`;
  const slopeEquation = ((y2-y1)/(x2-x1));
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
  const x1 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  const y1 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  const x2 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  const y2 = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  questionText.text = `What is the length of a line segment(to 2 decimal places) with the endpoints (${x1}, ${y1}) and (${x2}, ${y2})`  
  const x = (x2-x1); 
  const y = (y2-y2);
  const xSquare = (x**2);
  const ySquare = (y**2);
  const add = (xSquare+ySquare);
  const squareRoot = (add**0.5);
  ansRounded = squareRoot.toFixed(2);
  correctAnswer = ansRounded;
  
}
//questions 7-10 are grade 10 concepts

//question 7 function
// introduction to 0 exponents
function question7(){
  document.getElementById('demo').innerHTML = "Question 7";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = '';
  const exp = 0;
  const rndmNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  questionText.text = `Solve: ${rndmNum}^${exp}`;
  const answr = `${rndmNum**exp}`;
  correctAnswer = answr;
}
// question 8 function
// introduction to FOIL method
function question8(){
  document.getElementById('demo').innerHTML = "Question 8";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = '';
  const rndmNum1 = Math.floor(Math.random() * (10 - 2 + 1)) + 10;
  const rndmNum2 = Math.floor(Math.random() * (10 - 2 + 1)) + 10;
  const expression = `(x+${rndmNum1})(x+${rndmNum2})`;
  questionText.text = `Expand the expression ${expression}`;
  const ans1 = `x^2`;
  const ans2 = `${rndmNum1+rndmNum2}x`;
  const ans3 = `${rndmNum1*rndmNum2}`;
  const finalAns = `${ans1}+${ans2}+${ans3}`;
  correctAnswer = finalAns;
}

// question 9 function
// introduction to the quadratic formula
function question9(){
  document.getElementById('demo').innerHTML = "Question 9";
  confirmationText.text = '';
  quitText.text = '';
  hintText.text = '';
  const a = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  const b = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
  const c = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
  questionText.text = `Find the solutions(to 2 decimal places) of the equation ${a}x^2+${b}x+${c} using the quadratic formula. (Write as; #,# with the smallest number first.)`
  const discriminant = (b**2-4*a*c);
  const quadFormula1 = (-b+(discriminant)**0.5) / (2*a);
  const quadFormula2 = (-b-(discriminant)**0.5) / (2*a);
  const quad1Rounded = quadFormula1.toFixed(2);
  const quad2Rounded = quadFormula2.toFixed(2);
  correctAnswer = `${quad1Rounded},${quad2Rounded}`;
}
function checkAnswer(answer){
  hintText.text = '';
    if (answer == correctAnswer) {
      confirmationText.text = 'Correct!';
      playerPoints += 500;
    }
    else {
      confirmationText.text = 'Wrong :(';
    }
}

// function to change question on button push
var currentQuestionIndex = 0;
// list of functions
const questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9]; 
// calls next question
function nextQuestion() {
   questionList[currentQuestionIndex]();
   currentQuestionIndex = (currentQuestionIndex + 1) % questionList.length; 
}
// hints
const hint1 = "* Sum = Addition, Times = Multiply";
const hint2 = "* x^2 = x*x";
const hint3 = "* Multiply both inside #'s by the outside #";
const hint4 = "* Combine the terms with the same letters";
const hint5 = "* y2-y1...";
const hint6 = "* Similar to Pythagorean Theorem";
const hint7 = "* Any number to the power of 0 is 1";
const hint8 = "* Use the FOIL method. Multiply the first terms of each binomial, the the outside terms, then the inside terms, then the last terms, and then combine like terms";
const hint9 = "* The equation is in the form ax^2+bx+c. Knowing this, sub the a, b, and c values into the quadratic formula for your answer";
// hint list
const hintList = [hint1, hint2, hint3, hint4, hint5, hint6, hint7, hint8, hint9];
// give player a hint at the cost of points
function hintPlayer(){
  hintText.text = hintList[currentQuestionIndex - 1];
  confirmationText.text = '';
  playerPoints -= 300;
}
// quit game on button press
function quitGame(){
  currentQuestionIndex = 0;
  quitText.text = "Thanks for playing!";
  pointsText.text = `You earned ${playerPoints} points!`
  confirmationText.text = '';
  questionText.text = '';
  hintText.text = '';
}
//a timer to quit the game after 3 minutes
const gameTimeLimitMilliseconds = 3*60*1000;
setTimeout(quitGame, minutes)