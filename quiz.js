const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "Dilpreet Singh is currently a:",
        answers:{
            a: "PhD student at QUT",
            b: "MPhil student at QUT",
            c: "MEng student at QUT",
            d: "Postdoc at QUT",
        },
        correctAnswer: "a"
    
    },
    {
        question: "Dilpreet works with:",
        answers:{
            a: "AMBER group",
            b: "BTM group",
            c: "IHBI group",
            d: "FSAE group",
        },
        correctAnswer: "b"
    },
    {
        question: "Dilpreet has background in:",
        answers:{
            a: "Mechatronics Engineering",
            b: "Biomedica Engineering",
            c: "Mechanical Engineering",
            d: "Computer Science",
        },
        correctAnswer: "c"
    },
    {
        question: "Dilpreet is currently working on developing:",
        answers: {
            a: "Soft force sensors",
            b: "Soft actuators",
            c: "AR/VR devices",
            d: "Rehabilitation robots",
        },
        correctAnswer: "a"
    }
    
    ];
function buildQuiz() {
    // variable to store HTML output
    const output = [];
    for(i=0; i<quizQuestions.length; i++){
        //variable to store the list of possible answers
        const answers = [];
        // for each available answer to this question add a html radio button
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                +'<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                +quizQuestions[i].answers[letter]
                + '</label>'
            );
        }
        // add this question and its answers to the output
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">'+ answers.join('') + '</div>'
        );   
    }
    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}
function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's answers
    var numCorrect = 0;
    // for each question....
    for(i=0; i<quizQuestions.length; i++){
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name = question'+i+']:checked') || {}).value;
        // if answer is coreect
        if(userAnswer===quizQuestions[i].correctAnswer){
            //add to the number of correct answers
            numCorrect++;

        // color the answers green 
        answerContainers[i].style.color = 'lightgreen';
        }
        // if the answer is wrong or blank
        else{
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }
    //show number of correct answers out of the following
    if (numCorrect === 0){
        resultsContainer.innerHTML = "This wasn't your best effort - you didn't get a single answer correct.";
    }
    if (numCorrect === 1){
        resultsContainer.innerHTML = "There's a room for improvement there! You only got one correct answer.";
    }
    if (numCorrect === 2){
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
    }
    if (numCorrect === 3){
        resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Dilpreet Singh pretty well!";
    }
    if (numCorrect === 4){
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Dilpreet Singh so well!";
    }
}
// load quiz
buildQuiz();
submitButton.onclick = function() {
    showResults();
}

