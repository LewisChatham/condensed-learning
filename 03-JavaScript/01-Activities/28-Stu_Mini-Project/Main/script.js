var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
 var options = ["R", "P", "S"] 

function playGame() {

  // Ask user for their choice
 var userChoice = window.prompt(`Enter R, S, P`)

  // If user pressed Cancel, immediately end function
if (!userChoice){
  return;
}

  // Convert to uppercase to make comparisons easier
 userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length) 
  var computerOptions = options[index]

  window.alert(`computer chose ${computerOptions}`)

  // If choices are the same, it's a tie
 if (userChoice === computerOptions) {
  window.alert(`It's a tie!`) 
  ties++
 } else if (  (userChoice === `R` && computerOptions === `S`) ||
 (userChoice === `P` && computerOptions === `R`) || 
 (userChoice === `S` && computerOptions === `P`) ) {
  window.alert(`You win!`)
  wins++
 } else {
  window.alert(`You lose`)
  losses++
 }
  

  // Print stats with line breaks
  window.alert(` wins:${wins} \n Ties:${ties} \n Losses:${losses}`)

  // Ask user to play again
  var playAgain = window.confirm(`Play again?`)


  // If user pressed OK, run the function again
 if(playAgain){
  playGame()
 }

// Run the game for the first time

}

playGame()