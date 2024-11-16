let h2 = document.querySelector("h2");
let input = document.querySelector("input");
let submit = document.querySelector("#submit");
let quit = document.querySelector("#quit");
let p = document.querySelector("p");
let ul = document.querySelector("ul");

let inputGiven = false;
let inputNumber;
let guessNumber;
let randomNumber;
let guessArray = [];
let count = 1;


submit.addEventListener("click", function () {
    if(inputGiven === false) {
        inputNumber = input.value;
        console.log(`input number: ${inputNumber}`);
        randomNumber = Math.floor(Math.random() * inputNumber) + 1;
        console.log(`random number: ${randomNumber}`);
        h2.innerText = "Guess the Number now...";
        inputGiven = true;
    } else {
        guessNumber = input.value;
        console.log(guessNumber);
        guessArray.push(guessNumber);
        console.log(guessArray);
        checkAnswer(guessNumber);
        count++;
    }
    input.value = "";
});



function checkAnswer (guessNumber) {
    if (count < 10) {
        if (guessNumber != randomNumber) {
            if(guessNumber > randomNumber) {
                p.innerText = `Hint: Your Guess is Higher than Random Number`;
                p.classList.remove("win");
                p.classList.remove("lose");
                p.classList.add("playGame");
            } else {
                p.innerText = `Hint: Your Guess is Lower than Random Number`;
                p.classList.remove("win");
                p.classList.remove("lose");
                p.classList.add("playGame");
            }
                let li = document.createElement("li");
                li.innerText = `Guess ${count}: ${guessNumber}`;
                ul.insertAdjacentElement("beforeend", li);
        } else if (guessNumber == randomNumber) {
            p.innerText = `Congratulations. Your Guess ${guessNumber} is equal to random number ${randomNumber}`;
            p.classList.remove("playGame");
            p.classList.remove("lose");
            p.classList.add("win");
            quit.classList.add("hide");
            ul.classList.add("hide");
            h2.innerText = `Your Guess is Right`;
        }
    } else {
        p.innerText = `You lost your attempts`;
        p.classList.remove("playGame");
        p.classList.remove("win");
        p.classList.add("lose");
        input.disabled = true;
    }
    
}

quit.addEventListener("click", function () {
    p.innerText = `You Quit the Game`;
    p.classList.remove("playGame");
    p.classList.remove("win");
    p.classList.add("lose");
    input.disabled = true;
    submit.disabled = true;
    ul.classList.add("hide");
});

