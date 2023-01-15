
//button const
const startButton = document.getElementById("start");
// timer const
const timer = document.querySelector(".timer span"); 
let count = 30;
const timerText = document.getElementsByTagName('div')[1];

//targeting start screen
var startPage = document.getElementById("start-screen")
var questionContainer = document.getElementById("questions")

//targeting questions
var questionChoices = document.getElementById("choices")

//keeping track of question index
var questionIndex = 0

//keeping track of score
var currentScore = 0


//what happens when an answer is clicked
var choiceClick = function(element){ 
 if (element.target.id == questions[questionIndex].correct){
  currentScore = currentScore + 1;
 } else {
count = count - 5
 }
 questionIndex = questionIndex + 1;
 if (questionIndex < 4) {
  getQuestion()
 } else {

 }

}



//cycle through questions
function getQuestion(){
  //this will get current question index from the array
var currentQuestion = questions[questionIndex]
var questionTitle = document.getElementById("question-title")
questionTitle.textContent = currentQuestion.questionName
//clears out old choices
questionChoices.innerHTML = ""
//need to loop over each choice
currentQuestion.choices.forEach(function(choice,i){
  var choiceButtons = document.createElement("button")
  choiceButtons.setAttribute("class", "choice")
  choiceButtons.setAttribute("value", choice)
  choiceButtons.setAttribute("id", i + 1)
  choiceButtons.textContent = i + 1 + ". " + choice
  questionChoices.appendChild(choiceButtons)
   //selecting the choice - choiceClick will need to be global var
  choiceButtons.onclick = choiceClick
})


}

//running button
startButton.addEventListener("click", function() {
 
  const countDown = setInterval(() => {
    if (count > 0) {
      timer.innerHTML = count;
      count--;
    } else {
      clearInterval(countDown);
       timerText.innerHTML = "Time's up!";
    }
  }, 1000); 
  //clear screen
  startPage.setAttribute("class","hide");
  questionContainer.removeAttribute("class")
  getQuestion();
});






// function endQuiz();
// if (timer <- 0){
//   window.location.href = "highscores.html"
// }










//running code






// things we need

// its a quiz challenge

//needs start screen with start button
//      when start button is clicked, we start the timer and show the first question
//          add event listener to start button

//need questions

//need choices for each question

//if question is right move to next question

//if question is wrong subtract from timer

// need timer

//we also need high scores

//when its done it prompts to user to put initials