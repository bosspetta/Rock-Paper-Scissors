const possibleHands = ["🪨", "📃", "✂️"]
const outcomes = [
    
]
let hand1 = document.getElementById("hand1")
let hand2 = document.getElementById("hand2")
document.getElementById("btn").addEventListener('click', initialise)
let winnerText = document.getElementById("winner_text")

function initialise() {
    play(hand1)
    play(hand2)
    declareWinner()
}

function play(display) {
    hand1.classList.remove('winner','draw')
    hand2.classList.remove('winner','draw')
    winnerText.textContent = ''
    let randomNumber = Math.floor( Math.random() * 3 )
    let currentHand = possibleHands[randomNumber]
    display.textContent = currentHand
}

function declareWinner() {
     if (hand1.textContent === hand2.textContent) {
         winnerText.textContent = 'Tie my friends! 😰'
         hand1.classList.add('draw')
         hand2.classList.add('draw')
     } else if (hand1.textContent === "🪨" && hand2.textContent === "✂️") {
         hand1.classList.add('winner')
         winnerText.textContent = '🪨 wins! 🥳'
     } else if (hand1.textContent === "🪨" && hand2.textContent === "📃") {
         hand2.classList.add('winner')
         winnerText.textContent = '📃 wins! 🥳'
     } else if (hand1.textContent === '📃' && hand2.textContent === '🪨') {
         hand1.classList.add('winner')
         winnerText.textContent = '📃 wins! 🥳'
     } else if (hand1.textContent === '✂️' && hand2.textContent === '📃') {
         hand1.classList.add('winner')
         winnerText.textContent = '✂️ wins! 🥳'
     } else if (hand1.textContent === '✂️' && hand2.textContent === '🪨') {
         hand2.classList.add('winner')
         winnerText.textContent = '🪨 wins! 🥳'
     } else if (hand1.textContent === '📃' && hand2.textContent === '✂️') {
         hand2.classList.add('winner')
         winnerText.textContent = '✂️ wins! 🥳'
     }
     
     
}



