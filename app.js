// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
// VINNU'S CODE 
const play_button = document.getElementById("play-button");
play_button.addEventListener("click",naaFunction)
function naaFunction(){
    location.replace("./game.html")
}