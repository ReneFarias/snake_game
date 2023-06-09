import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersaction } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'

import { outsideGrid } from './grid.js'

const gameBoard = document.getElementById('game-board')

let lastRenderTime = 0
let gameOver = false

requestAnimationFrame(main)

function main(currentTime) {
    if (gameOver) {
        if (confirm('Você perdeu!')) {
            location = '/'
        }
        return
    }
    requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersaction()
}
document.addEventListener('keydown',botao.which = 37);

const botao = document.getElementById("myBtn")

botao.addEventListener("click", botao.which = 37)

var botao2 = jQuery.Event ("keypress"); 
botao.ctrlKey = false; 
botao.which = 37; 