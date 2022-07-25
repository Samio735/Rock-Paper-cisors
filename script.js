
let luck = Math.random()
let choice
function getComputerCHoice(){
luck = Math.random()
if(luck<0.33){
    return "rock"
}
else{
    if (luck <0.66){
        return "paper"
    }
    else return "scisors"
}
}
    const rockBtn = document.querySelector('.chrock')
    const paperBtn = document.querySelector('.chpaper')
    const scisorsBtn = document.querySelector('.chscisors')

    let getPlayerchoice

    rockBtn.addEventListener('click',setrock)
    function setrock() {
        getPlayerchoice ='rock'
    }
    paperBtn.addEventListener('click',setpaper)
    function setpaper() {
        getPlayerchoice ='paper'
    }
    scisorsBtn.addEventListener('click',setscisors)
    function setscisors() {
        getPlayerchoice ='scisors'
    }

const resultEl = document.querySelector('.result')
const urchoice = document.querySelector('.urchoice')
const cmpchoice = document.querySelector('.cmpchoice')
function oneGame(computerCHoice,playerchoice){

    cmpchoice.setAttribute('class',`computer ${computerCHoice}`)
    urchoice.setAttribute('class',playerchoice)
    if (computerCHoice === "rock"){
        if (playerchoice === "rock") {
            return "draw"
        }
        if (playerchoice === "paper") {
            playerScore= playerScore+1 
            return "win"

        }
        if (playerchoice === "scisors") {
            computerScore++
            return "lose"
        }
    }

    if (computerCHoice === "scisors"){
        if (playerchoice === "scisors") {
            return "draw"
        }
        if (playerchoice === "rock") {
            playerScore++
            return "win"
            
        }
        if (playerchoice === "paper") {
            computerScore++
            return "lose"
        }
    }

    if (computerCHoice === "paper"){
        if (playerchoice === "paper") {
            return "draw"
        }
        if (playerchoice === "scisors") {
            playerScore++
            return "win"
        }
        if (playerchoice === "rock") {
            computerScore++
            return "lose"
        }
    }
    
}
let i = 1
let playerScore = 0
let computerScore = 0
let result
const roundNb = document.querySelector(".gameNumber")


const play = document.querySelector('.play')
  const  playerScoreEl = document.querySelector(".playerScore")
   const computerScoreEl = document.querySelector(".computerScore")

const roundEl = document.querySelector('.gameNumber')
function playOneGame(){
    roundEl.innerText = i
    result = oneGame(getComputerCHoice(),getPlayerchoice)
    resultEl.innerText = result
    playerScoreEl.innerText = playerScore
    computerScoreEl.innerText = computerScore
    if(playerScore === 3 || computerScore === 3) {
        console.log("gameover")
        i = 0
        playerScore = 0
        computerScore = 0

        return
    
    }
    i++
}
function game(){

    
rockBtn.addEventListener('click',playOneGame)
scisorsBtn.addEventListener('click',playOneGame)
paperBtn.addEventListener('click',playOneGame)
}

game()



