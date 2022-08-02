const resultEl = document.querySelector('.result')
resultEl.innerText = ""


let computerCHoice
 let getPlayerchoice
luck = Math.random()

    const rockBtn = document.querySelector('.chrock')
    const paperBtn = document.querySelector('.chpaper')
    const scisorsBtn = document.querySelector('.chscisors')

   

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


const urchoice = document.querySelector('.urchoice')
const cmpchoice = document.querySelector('.cmpchoice')
const action = document.querySelector(".action")


function oneGame(playerchoice){
    setTimeout(() => {
            cmpchoice.setAttribute('src',`./images/enemy/rock.svg`)
            urchoice.setAttribute('src',`./images/you/rock.svg`)
    }, 100);
    action.setAttribute('class','action nochoice')

    setTimeout(() => {
        action.setAttribute('class','action ')

    }, 3200);
    let luck = Math.random()
    if(luck<0.33){
        computerCHoice = "rock"
    }
    else{
        if (luck <0.66){
            computerCHoice = "paper"
        }
        else {
            computerCHoice = "scisors"
        } 
    }
    
    console.log("you chose : ",playerchoice)
    console.log("computer chose",computerCHoice)

    urchoice.setAttribute('class','urchoice animate')
    cmpchoice.setAttribute('class','cmpchoice animate')
    setTimeout(function animateChoice() {
    cmpchoice.setAttribute('src',`./images/enemy/${computerCHoice}.svg`)
    urchoice.setAttribute('src',`./images/you/${playerchoice}.svg`)
    urchoice.setAttribute('class','urchoice ')
    cmpchoice.setAttribute('class','cmpchoice ')}
    ,2200)
    resultEl.innerHTML =""
    if (computerCHoice === "rock"){
        if (playerchoice === "rock") {
            return "draw"
        }
        if (playerchoice === "paper") {
            setTimeout(function animatewin(){
                urchoice.setAttribute('class','urchoice win')},
                2800)
                playerScore++
            console.log("win")
            return "win"
        }
        if (playerchoice === "scisors") {
            console.log("lose")
            setTimeout(function animatelose(){
                cmpchoice.setAttribute('class','cmpchoice win')},
                2800)
                computerScore++
            return "lose"
        }
    }

    if (computerCHoice === "scisors"){
        if (playerchoice === "scisors") {
            return "draw"
        }
        if (playerchoice === "rock") {
            setTimeout(function animatewin(){
                urchoice.setAttribute('class','urchoice win')},
                2800)
                playerScore++
            
            console.log("win")
            return "win"
        }
        if (playerchoice === "paper") {

            setTimeout(function animatelose(){
                cmpchoice.setAttribute('class','cmpchoice win')},
                2800)
                computerScore++
            return "lose"
        }
    
    }

    if (computerCHoice === "paper"){
        if (playerchoice === "paper") {
            return "draw"
        }
        if (playerchoice === "scisors") {
            setTimeout(function animatewin(){
                urchoice.setAttribute('class','urchoice win')},
                2800)
                console.log("win")
                playerScore++
                return "win"
    }
        if (playerchoice === "rock") {
            setTimeout(function animatelose(){
                cmpchoice.setAttribute('class','cmpchoice win')},
                2800)
            console.log("lose")
            computerScore++
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

const score = document.querySelector('.score')

const finalResult = document.querySelector('.finalResult')

function playOneGame(){
    console.log("round",i)
        result =  oneGame(getPlayerchoice)
        console.log(result)
        setTimeout(() => {
         resultEl.innerText =result
        }, 2800);
        setTimeout(() => {
            score.innerText = `${playerScore}-${computerScore}`
        }, 3000);
       if(playerScore == 3 || computerScore == 3) {
        setTimeout(() => {
            if(playerScore == 3) {
            finalResult.innerText = "Congatulations ! you've beaten the other cat"
        }
        else { 
            finalResult.innerText = "How bad !           the other cat beat you :("
        }
            gameState.setAttribute('class','gameOver')
        }, 3500);
        
       }
        
        i++
}

const rePlayBtn = document.querySelector('.rePlayBtn')

function startgame() {
    gameState.setAttribute('class','inGame')
}
function restart() {
    history.go(0)
}
const startEL = document.querySelector('.playBtn')
const gameState = document.querySelector('div')
function game(){

    startEL.addEventListener('click',startgame)
    rockBtn.addEventListener('click',playOneGame)
    scisorsBtn.addEventListener('click',playOneGame)
    paperBtn.addEventListener('click',playOneGame)
    rePlayBtn.addEventListener('click',restart)

}
game()



