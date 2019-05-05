function computerPlay() {
    randNumber = Math.floor(Math.random() * 3)
    if (randNumber === 0) {
        return 'Rock';
    } else if (randNumber == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

let scores = [0, 0, 0]

function playRound(playerSelection, computerSelection) {

    /* youWin will be three state int representing result */
    /* 0 = win, 1 = lose, 2 = tie */
    let youWin = 0;
    playerSelection = capitalizeFirst(playerSelection)

    if (playerSelection == computerSelection) {
        youWin = 2;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        youWin = 1;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        youWin = 1;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        youWin = 1;
    }

    const feedback = document.querySelector('#feedback');

    if (youWin === 0) {
        feedback.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (youWin == 1) {
        feedback.textContent = 'You Lose! ' + playerSelection + ' loses to ' + computerSelection;
    } else {
        feedback.textContent = 'You Tie! ' + playerSelection + ' ties ' + computerSelection;
    }

    update_scores(youWin)
}

function update_scores(x) {
    scores[x]++;
    const scoreText = document.querySelector('#score');
    const div = document.querySelector('.page')
    if (scores[0] == 5) {
        scoreText.textContent = 'YOU WIN THE GAME! You: '+ scores[0] + ' Computer: ' + scores[1] + ' Ties: ' + scores[2];
        scores = [0,0,0];
        div.setAttribute('style', 'background-color: #affbb2')
    } else if (scores[1] == 5){
        scoreText.textContent = 'YOU LOSE THE GAME :( You: '+ scores[0] + ' Computer: ' + scores[1] + ' Ties: ' + scores[2];
        scores = [0,0,0];
        div.setAttribute('style', 'background-color: #ffadad')
    } 
    else {
        scoreText.textContent = 'You: ' + scores[0] + ' Computer: ' + scores[1] + ' Ties: ' + scores[2];
        div.setAttribute('style', 'background-color: white')
    }
}

function capitalizeFirst(str) {
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

const buttons = document.querySelectorAll('.button')
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id, computerPlay())
    });
});