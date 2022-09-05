const mario = document.getElementById('mario')
const pipe = document.getElementById('pipe')
const clouds = document.getElementById('clouds')
const gameOver = document.getElementById('gameOver')
const btnRestart = document.getElementById('btnRestart')

const marioAction = () => {
    mario.classList.add('marioJump')

    setTimeout (()=>{
        mario.classList.remove('marioJump')
    }, 500)   
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const cloudsPosition = clouds.offsetLeft
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')
    
    if (pipePosition <= 80 && pipePosition > 0 && Number(marioPosition) <= 60 ) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = '/img/game-over.png'
        mario.style.width = '50px'
        mario.style.left = '30px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        gameOver.style.display = 'flex'

        clearInterval(loop)
    }    
   
}, 10)

const restartGame = () => {
    window.location.reload()
}


document.addEventListener('keypress', marioAction)
btnRestart.addEventListener('click', restartGame)