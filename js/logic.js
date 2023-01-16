localStorage.clear()

//button const
const startButton = document.getElementById("start");
// timer const
const timer = document.querySelector(".timer span"); 
let count = 30;
const timerText = document.getElementsByTagName('div')[1];

//targeting start screen
var startPage = document.getElementById("start-screen")


//targeting questions
var questionChoices = document.getElementById("choices")
var questionContainer = document.getElementById("questions")

//targeting end screen
var endPage = document.getElementById("end-screen")
var finalScore = document.getElementById("final-score")
//keeping track of question index
var questionIndex = 0

//keeping track of score
var currentScore = 0



//what happens when an answer is clicked
var choiceClick = function(element){ 
  //checks to see if the value of the answer clicked matches the correct answer
 if (element.target.id == questions[questionIndex].correct){
  currentScore = currentScore + 1;
 } else {
count = count - 5
 }
 questionIndex = questionIndex + 1;
 if (questionIndex < 4) {
  getQuestion()
 } else {
//need to make it so the end page is displayed when this runs
questionContainer.setAttribute("class","hide");
endPage.removeAttribute("class")
finalScore.innerHTML = currentScore;

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
startButton.addEventListener("click", function(){
  const countDown = setInterval(() => {
    if (count > 0) {
      if (questionIndex <4){
      timer.innerHTML = count;
      count--;
    }} else {
      clearInterval(countDown);
       timerText.innerHTML = "Time's up!";
       questionContainer.setAttribute("class","hide");
      endPage.removeAttribute("class")
      finalScore.innerHTML = currentScore;
    }
  }, 1000); 
  //clear screen
  startPage.setAttribute("class","hide");
  questionContainer.removeAttribute("class")
  getQuestion();
});




//high score script

//when its done it prompts to user to put initials

//getting input from bar
playerInitials = document.getElementById("initials").value
//working button
var button = document.getElementById("submit")
button.addEventListener("click", function(){
  playerInitials = document.getElementById("initials").value
  localStorage.setItem(playerInitials, currentScore)
  console.log(localStorage)
  return playerInitials}) 









// playerScore = document.createElement("li")
// choiceButtons.setAttribute("class", "score")
// choiceButtons.setAttribute("id", )
// choiceButtons.textContent = i + 1 + ". " + choice