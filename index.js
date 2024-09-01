let firstElement = document.getElementById("firstNumber");
let secondElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstElement.textContent = Math.ceil(firstRandomNumber);
    secondElement.textContent = Math.ceil(secondRandomNumber);
    userInputElement.value = ""
    gameResultElement.textContent = "";
}
restartGame()

function checkGuess() {
    let firstInteger = parseInt(firstElement.textContent);
    let secondInteger = parseInt(secondElement.textContent);
    let sumOfInt = (firstInteger + secondInteger);
    let userEnteredSum = parseInt(userInputElement.value);
    if (sumOfInt === userEnteredSum) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "#1e217c";

    }
}