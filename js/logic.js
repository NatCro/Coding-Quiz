
//button const
const startButton = document.getElementById("start");
// timer const
const timer = document.querySelector(".timer span"); 
let count = 5;
const timerText = document.getElementsByTagName('div')[1];

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