
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
            return "win"
        }
        if (playerchoice === "scisors") {
            return "lose"
        }
    }

    if (computerCHoice === "scisors"){
        if (playerchoice === "scisors") {
            return "draw"
        }
        if (playerchoice === "rock") {
            return "win"
        }
        if (playerchoice === "paper") {
            return "lose"
        }
    }

    if (computerCHoice === "paper"){
        if (playerchoice === "paper") {
            return "draw"
        }
        if (playerchoice === "scisors") {
            return "win"
        }
        if (playerchoice === "rock") {
            return "lose"
        }
    }
    
}
let i = 1
let playerScore = 0
let computerScore = 0
const roundNb = document.querySelector(".gameNumber")

function result() { return oneGame(getComputerCHoice(),
    getPlayerchoice())}

const play = document.querySelector('.play')

function game1() {
    while (i<6) {
        i++
        roundNb.innerHTML = i
        if (playerScore === 3 ) {
            return "You win ! congratulations !!!"
        }
        if (computerScore === 3 ) {
            return " you lost the game :( , good luck next time !"
        }
       
        let result = oneGame(getComputerCHoice(),"rock")
        if (result === "win") {
            playerScore++
        }
        if (result === "lose") {
            computerScore++
        } 
        console.log("you", result)
        console.log("your score: " , playerScore,"- computer: ",computerScore)
    }
        if ( playerScore>computerScore) {
            return  "You win ! congratulations !!!"
        }
        if ( playerScore<computerScore) {
            return " you lost the game :( , good luck next time !"
        }
        if ( playerScore === computerScore) {
             return "that is a draw !"
        }
    
}

function playOneGame(){
    console.log("round",i)
    console.log(
        oneGame(getComputerCHoice(),getPlayerchoice)
        )
        resultEl.innerText = oneGame(getComputerCHoice(),getPlayerchoice)
        i++
}
function game(){

    
rockBtn.addEventListener('click',playOneGame)
scisorsBtn.addEventListener('click',playOneGame)
paperBtn.addEventListener('click',playOneGame)
}

game()



