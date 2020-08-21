const $submitbutton = document.getElementById('submit');
const $message = document.getElementById('msg');
const $lives = document.getElementById('lives');


var guessNumber = Math.round(Math.random() * 100);
var lives = 10;
var message;

$submitbutton.onclick = () => {
    let userinp = document.getElementById('number-input').value;
    lives--;
    if (userinp == guessNumber) {
        location.href = './win.html';
    } else if (lives == 0) {
        location.href = './lose.html';
    } else if (userinp > guessNumber) {
        message = `Oops :) !! Your guess is too high. You have ${lives} remaining.`;

    } else if (userinp < guessNumber) {
        message = `Oops :) !! Your guess is too low. You have ${lives} remaining.`;
    }

    $message.style.display = 'inherit';
    $message.innerHTML = message;
    $lives.innerHTML = lives;
}