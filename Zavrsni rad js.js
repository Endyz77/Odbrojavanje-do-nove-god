word = document.getElementById('word')
text = document.getElementById('text')
scoreEl = document.getElementById('score')
timeEl = document.getElementById('ZAWARUDO')
endgameEl = document.getElementById('end-game-container')

words=['team','tablet','twilight','paint','hunter','smooth','criminal','trap','available','smash']

randomWord=''
score = 0
time = 15

timeInterval = setInterval(updateTime,1000)

function getRandomWord(){
    randomNum = Math.floor(Math.random()*words.length)
    return words[randomNum]
}
function placeRandomWord(){
    randomWord = getRandomWord()
    word.innerText = randomWord
}
function updateScore(){
    score++
    scoreEl.innerText = score
}
function updateTime(){
    time--
    timeEl.innerText = time + 's'
    if(time ==0){
        clearInterval(timeInterval)
        gameOver()
    }
}
function gameOver(){
    endgameEl.innerHTML=
    `
    <h1>Niste dovoljno brzo kucali!!</h1>
    <p>Vas finalni rezultat je ${score}!</p>
    <button onclick="location.reload()">Probajte ponovo!</button>
    `
    endgameEl.style.display='flex'
}
placeRandomWord()

text.addEventListener('input',e =>{
    insertedText = e.target.value
    if(insertedText == randomWord){
        placeRandomWord()
        updateScore()
        text.value=''
        time = time+2
        updateTime()
    }
})
