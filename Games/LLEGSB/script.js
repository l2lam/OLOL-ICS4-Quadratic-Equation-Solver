function changeButton(){
  var btntext = "Next Question"
  document.getElementById("btn").innerHTML = btntext
} 

function question1(){
  var a = Math.floor((Math.random() * 50) + 1);
  var b = Math.floor((Math.random() * 1000) + 200);
  var qstn1 = (`Write an albebraic expression for the following verbal expression: The sum of ${b} and ${a} times a number(x).`);
  document.getElementById("demo").innerHTML = qstn1;
}
