(function (){
    
    const userInput = document.querySelector('#input');
    const form = document.querySelector('form')
    const result = document.querySelector('#result-text');
    const allGuessesText = document.querySelector('.guesses-text')
    const restartBtn = document.querySelector('#restart-btn')
    const submitBtn = document.querySelector('#submit-btn')
    
    function chancesLeftChecker (randomNumber){
        if(allGuessesArray.length == 10){
            result.innerText = `You lost! The number was ${randomNumber}`
            restartBtn.disabled = false
            submitBtn.disabled = true
            userInput.disabled = true
        }
    }
    
    let randomNumber = Math.round(Math.random()*100)
    
    let allGuessesArray = []

    
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        if (parseInt(userInput.value) > randomNumber) {
            result.innerText = 'Too High!'
        }
        else if (parseInt(userInput.value) < randomNumber) {
            result.innerText = 'Too Low!'
        }
        else{
            result.innerText = 'Congrats! You guessed it right'
            restartBtn.disabled = false
            submitBtn.disabled = true
            userInput.disabled = true
        }
        allGuessesArray.push(userInput.value)
        allGuessesText.innerText = `Your Guesses: ${allGuessesArray.join(', ')}`
        form.reset()
        chancesLeftChecker(randomNumber)
    })
    

    function restartGame(){
        randomNumber = Math.round(Math.random()*100)
        userInput.disabled = false
        restartBtn.disabled = true
        submitBtn.disabled = false
        allGuessesText.innerText = ''
        result.innerText = ''
        allGuessesArray = []
}

        restartBtn.addEventListener('click', ()=>{
            restartGame()
        })
})()

