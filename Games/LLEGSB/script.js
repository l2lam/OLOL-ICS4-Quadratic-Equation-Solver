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
  fontSize: 38,
  wordWrap: true,
  wordWrapWidth: 440,
});
const style1 = new PIXI.TextStyle({
  align: "center",
  dropShadow: true,
  dropShadowBlur: 10,
  dropShadowDistance: 7,
    fill: [
    "#4100f5",
    "#c70000"
  ],
  fontFamily: "Times New Roman",
  fontSize: 30,
  wordWrap: true,
  wordWrapWidth: 440,
});

let correctAnswer = null;

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

const quitText = new PIXI.Text('', style);
quitText.x = 215;
quitText.y = 250;
app.stage.addChild(quitText);

var playerPoints = 0;



// first question function
// basic algebra question
function question1(){
  //Change the Welcome text to the question #
  document.getElementById("demo").innerHTML = 'Question 1';
  
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
  var a = Math.floor(Math.random() * (22 - 12 + 1)) + 12;
  var b = 2;
  var c = Math.pow(a, b)
  questionText.text = `Which of the following values of x is a solution of the equation given: x^2 = ${c}`;
  correctAnswer = `${a}`;
}

//question 3 function
function question3(){
  document.getElementById('demo').innerHTML = "Question 3";
  confirmationText.text = '';
  quitText.text = '';
  var a = Math.floor(Math.random() * (70 - 20 + 1)) + 20;
  var b = Math.round(a*0.15);
  questionText.text = `A waiter received a 15% tip for a restaurant bill of $${a}. Estimate the tip the waiter received to the nearest dollar($).`
  correctAnswer = `$${b}`
}

// question 4 function
// like terms question
function question4(){
  document.getElementById('demo').innerHTML = "Question 4";
  confirmationText.text = '';
  quitText.text = '';
  var a = Math.floor(Math.random() * (-20 - 20 + 1)) + 20;
  var b = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
  var c = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
  var d = Math.floor(Math.random() * (-20 - 20 + 1)) + 20;
  var e = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
  questionText.text = `Combine all like terms in the given expression: ${a}x + ${b}y + ${d}x - ${c}z + ${e}y` 
  correctAnswer = `${a+d}x+${b+e}y-${c}z`;
}

// question 5 function
// equation of a line
function question5(){
  document.getElementById('demo').innerHTML = "Question 5";
  confirmationText.text = '';
  quitText.text = '';
  var y1 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  var y2 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  var x1 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  var x2 = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  questionText.text = `What is the slope of a line that contain the points (${x1}, ${y1}) and (${x2}, ${y2}).`;
  var slopeEquation = ((y2-y1)/(x2-x1));
  slopeRounded = slopeEquation.toFixed(2);
  correctAnswer = `${slopeRounded}`;
  console.log(slopeRounded);
}

// a function to check the answer for question 
function checkAnswer(answer){
    if (answer == correctAnswer)
      confirmationText.text = 'Correct!';
    
    else 
      confirmationText.text = 'Wrong :(';
}
 
function quitGame(){
  quitText.text = "Thanks for playing!";
  confirmationText.text = '';
  questionText.text = '';
}

// function to change question on button push
let currentQuestionIndex = 0;
// list of functions
const questionList = [question1, question2, question3, question4, question5]; 

function nextQuestion() {
   questionList[currentQuestionIndex]();
   currentQuestionIndex = (currentQuestionIndex + 1) % questionList.length; 
}