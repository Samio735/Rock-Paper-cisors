
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
console.log("you choose rock")

function oneGame(computerCHoice,playerchoice){
    console.log("computer choose : ",computerCHoice)
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
let getPlayerchoice = "rock"
let playerScore = 0
        let computerScore = 0
function game() {
    for (let i=0;i<5;i++) {
        
        if (playerScore === 3 ) {
            return "You win ! congratulations !!!"
        }
        if (computerScore === 3 ) {
            return " you lost the game :( , good luck next time !"
        }
        let result = oneGame(getComputerCHoice(),getPlayerchoice)
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
console.log(game())