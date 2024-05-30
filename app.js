const guess = document.querySelector('.guess');
const guessOutput = document.querySelector('.guess-output');
const guessButton = document.querySelector('.guess-button');
const startOver = document.querySelector('.start-over');

const randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;
const maxTries = 2;

guessButton.addEventListener('click', (e) => {
    e.preventDefault();
  
    console.log(tries);
    if (tries <= maxTries){
        if (guess.value === randomNumber) {
            guessOutput.innerHTML = 'You guessed correctly!';
        } else if (guess.value > randomNumber && tries < maxTries) {
            guessOutput.innerHTML = `You guessed ${guess.value}, guess lower. <br> You have ${maxTries - tries} tries left.`;
        } else if (guess.value < randomNumber) {
            guessOutput.innerHTML = `You guessed ${guess.value}, guess higher. <br> You have ${maxTries - tries} tries left.`;
        } 
    
    }    
    tries++;
   if (tries === maxTries + 1){
    guessOutput.innerHTML = `Game Over!!! The correct number was ${randomNumber}`
    guessButton.disabled = true;
    guess.disabled = true;
    startOver.style.display = 'block';
   }
});