let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector(".cards-el")
let playerEl = document.getElementById("player-el")
let chipsEl = document.getElementById("chips-el")


let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""


let player = prompt("Enter your name: ")
playerEl.textContent = "Player: " + player 


function getRandomCard() {
    let randomNumber = Math.ceil(Math.random() * 11)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You got blackjack."
        hasBlackjack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}


