let randomNumber=(parseInt(Math.random()*100+1));
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
      const guess= parseInt( userInput.value)
      console.log(guess)
      validateGuess(guess)
     
    })
}

function validateGuess(guess){
//value between 1 to 100
 if(isNaN(guess)){
    alert("Please enter a valid number")
 }
 if(guess<1 || guess>100){
    alert("Please enter a number between 1 to 100")
 }
 else{
    prevGuess.push(guess)
     if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game Over . Random Number was ${randomNumber}`)
        endGame()
      }else{
        displayGuess(guess)
        checkGuess(guess)
      }
 }
}

function checkGuess(guess){
//value equal to random number
if(guess===randomNumber){
    displayMessage(`You guessed it right!`)
    endGame()
}else if(guess<randomNumber){
    displayMessage(`Number is TOOO low`)
}
else if(guess>randomNumber){
    displayMessage(`Number is TOOO high`)
}
}


function displayGuess(guess){
//clean the value , upadate array of guess
userInput.value="";
guessSlot.innerHTML +=`${guess} , `
numGuess++;
remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(messsage){
//display msg 
lowOrHi.innerHTML=`<h2>${messsage}</h2>`

}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled',"")
    p.classList.add("button")
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame=false
    newGame();
}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNumber=(parseInt(Math.random()*100+1));
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
})

}

