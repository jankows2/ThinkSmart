/**
 * Created by sebastian1 on 16/03/15.
 */

var pos = 0, quiz, quiz_status, question, choice, choices, ch1, ch2, ch3, correct = 0;
var questions = [
    [ "What is 10 + 4?", "12", "14", "16", "B" ],
    [ "What is 20 - 9?", "7", "13", "11", "C" ],
    [ "What is 7 x 3?", "21", "24", "25", "A" ],
    [ "What is 8 / 2?", "10", "2", "4", "C" ]
];
function _(x){
    return document.getElementById(x);
}
function renderQuestion(){
    quiz = _("quiz");
    if(pos >= questions.length){
        quiz.innerHTML = "<h2>You got " + correct + " of "+ questions.length + " questions correct</h2>";
        _("quiz_status").innerHTML = "quiz Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    ch1 = questions[pos][1];
    ch2 = questions[pos][2];
    ch3 = questions[pos][3];
    quiz.innerHTML = "<h3>"+question+"</h3>";
    quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+ch1+"<br>";
    quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+ch2+"<br>";
    quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+ch3+"<br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Next</button>";
}
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i < choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][4]){
        correct++;
    }
    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);