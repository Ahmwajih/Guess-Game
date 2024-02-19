const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const message = document.querySelector(".result");
const attempts = document.querySelector(".attempts");

let attemptCount = 0;

const randomNumber = () => {
    if (attemptCount >= 3) {
        message.textContent = "You have reached the maximum number of attempts. Please try again later.";
        btn.disabled = true;
        return;
    }

    let random = Math.floor(Math.random() * 100);
    let inputValue = parseInt(input.value);

    if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attemptCount++;

    if (random === inputValue) {
        message.textContent = `Your guess ${inputValue} matches the random number ${random}. Congratulations! You win!`;
        btn.disabled = true;
    } else {
        message.textContent = `Your guess ${inputValue} and the random number ${random} do not match. You have ${3 - attemptCount} attempts left.`;
    }

    attempts.textContent = attemptCount;
};

btn.addEventListener("click", randomNumber);
