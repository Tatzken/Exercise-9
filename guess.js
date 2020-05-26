function guessSecretNum(secret) {
    while (secret != Number(window.prompt("Guess a number from 1 to 10 "))) {
        console.log(secret == Number(window.prompt("Guess a number from 1 to 10 ")));
        console.log("Wrong, try again!");

    }
    console.log(true)
    console.log("Correct, well done!");
    return;
}

function guessSecretNum2(secret) {
    guess = Number(window.prompt("Guess a number from 1 to 10 "));
    if (secret == guess) {
        console.log("Correct, well done!");
    } else {
        console.log("Wrong, try again!");
    }
}

function guessSecretWord(secret) {
    while (secret != window.prompt("Guess the secret word ")) {
        console.log("Wrong, try again!");
    }
    console.log("Correct, well done!");
    return;
}



var secret = Number(window.prompt("Enter a secret number from 1 to 10"));
guessSecretNum(secret);
var secretWord = window.prompt("Enter a secret word (chars only)");
guessSecretWord(secretWord);