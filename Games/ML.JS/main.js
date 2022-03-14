// Creating the pixi application for all the graphics stuff
const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// The style for most text
const defaultTextStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

// The style for the formula/equation
const equationTextStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 42,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#ff8888'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

const titleText = new PIXI.Text('My Super Simple Math Game', defaultTextStyle);
titleText.x = 50;
titleText.y = 100;
app.stage.addChild(titleText);

const equationText = new PIXI.Text('', equationTextStyle);
equationText.x = 100;
equationText.y = 200;
app.stage.addChild(equationText);

const questionText = new PIXI.Text('', defaultTextStyle);
questionText.x = 50;
questionText.y = 300;
app.stage.addChild(questionText);

const confirmationText = new PIXI.Text('', defaultTextStyle);
confirmationText.x = 50;
confirmationText.y = 400;
app.stage.addChild(confirmationText);

// A place to store the correct answer for the current question
correctAnswer = null;

// Generates a new question and displays it
function showQuestion() {
    // a + b = c
    correctAnswer = Math.floor(Math.random() * 10);
    given = Math.floor(Math.random() * 10);

    variant = Math.random();
    if (variant < 0.66)
    {
        otherGiven = correctAnswer + given;
        if (variant < 0.33)
            equationText.text = `x + ${given} = ${otherGiven}`;
        else 
            equationText.text = `${given} + x = ${otherGiven}`;
    }
    else {
        otherGiven = correctAnswer - given;
        equationText.text = `${given} + ${otherGiven} = x`;
    }

    questionText.text = `What is x?`;
    clearConfirmation();
}

// Validate the answer for the current question
function checkAnswer(answer) {
    if (answer == correctAnswer)
        confirmationText.text = 'Correct!';
    else if (Math.abs(correctAnswer - answer) < 3)
        confirmationText.text = "That's pretty close, but nope";
    else
        confirmationText.text = 'Sorry, nope, wrong!';
}

function clearConfirmation() {
    confirmationText.text = '';
}