'use strict';
/*
console.log(document.querySelector('.message').textContent); // This accesses the text within the class message
document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber)
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

const displaySecretNumber = function(secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        // When there is no input
        displayMessage('⛔️ No Number!')

        //When guess is right
    } else if (guess === secretNumber) {
        displayMessage('✅ Correct Number!)')
        score++
        displayScore(score);
        // document.querySelector('.number').textContent = secretNumber;
        displaySecretNumber(secretNumber);

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ?  '📈 Too high!' : `📉 Too low!`)
            score--;
            displayScore(score);
        } else {
            // document.querySelector('.message').textContent = '💥You lost the game';
            displayMessage('💥You lost the game');
            displayScore(0);
        }
    }
});

    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // When guess is too low 
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;

    displayScore(score);
    // document.querySelector('.number').textContent = secretNumber; 
    displaySecretNumber(secretNumber);
    displayMessage('Start guessing again...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.number').textContent = '?';
    displaySecretNumber('?');
    document.querySelector('.guess').value = '';
})