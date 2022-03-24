const app = new PIXI.Application({ backgroundColor: 2e0025 });
document.body.appendChild(app.view);
// default text style
const style = new PIXI.TextStyle({
  align: "center",
  dropShadow: true,
  dropShadowBlur: 10,
  dropShadowDistance: 6,
    fill: [
    "red",
    "#4f1144"
  ],
  fontFamily: "Times New Roman",
  wordWrap: true,
  wordWrapWidth: 440,
});
// 1st question text
const questionText = new PIXI.Text('', style);
questionText.x = 150;
questionText.y = 250;
app.stage.addChild(questionText);
// confirmation text
const confirmationText = new PIXI.Text('', style);
confirmationText.x = 300;
confirmationText.y = 500;
app.stage.addChild(confirmationText);
//points text(will add points later)
const pointsText = new PIXI.Text('', style);
pointsText.x = 600;
pointsText.y = 300;
app.stage.addChild(pointsText);

var questionNumber = 1;

let correctAnswer = null;

// first question function
function question1(){
  //Change the Welcome text to the question #
  document.getElementById("demo").innerHTML = "Question 1";
  // Assigns the variables "a" and "b" to random values
  var a = Math.floor((Math.random() * 50) + 1);
  var b = Math.floor((Math.random() * 1000) + 200);
  // the first question 
  questionText.text = (`Write an albebraic expression for the following verbal expression: The sum of ${b} and ${a} times a number(x).`);
  //defines the correct answer for the question
  correctAnswer = `${a}x+${b}`;
}
function nextQuestion(){
  if (questionNumber == 1) {
    question1()
    questionNumber ++;
  }
    else if (questionNumber == 2) 
    question2()
    questionNumber ++;
}
//still working on it
function question2(){
  document.getElementById('demo').innerHTML = "Question 2";
  var a = 
  confirmationText.text = '';
  questionText.text = `Which of the following values of x is a solution of the following equation: x^2=${c}`;
}








// a function to check the answer for question 
function checkAnswer(answer){
  // if user answer is equal to correct answer
    if (answer == correctAnswer)
      confirmationText.text = 'Correct!';
    // if user answer does not equal correct answer
    else 
      confirmationText.text = 'Wrong';
}
  