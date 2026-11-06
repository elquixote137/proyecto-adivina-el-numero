let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
function checkGuess() {
    attempts--;
    const inputElement = document.getElementById("guess");
    const feedbackElement = document.getElementById("feedback");
    let guess = inputElement.value;
    while (attempts > 0) {
    if (guess == randomNumber) {
        //attempts = 0;
        feedbackElement.innerHTML = "¡Adivinaste!";
        feedbackElement.style.color = "#699600";    
        break;    
    } else if (guess < randomNumber) {
        feedbackElement.innerHTML = `¡Demasiado bajo! Intenta nuevamente. Te quedan ${attempts} intentos.`;
        feedbackElement.style.color = "#c1121f";
        break;
    } else {
        feedbackElement.innerHTML = `¡Demasiado alto! Intenta nuevamente. Te quedan ${attempts} intentos.`;
        feedbackElement.style.color = "#c1121f";
        break;
    }
}
    if (attempts === 0 && guess !== randomNumber) {
        feedbackElement.innerHTML = `¡Perdiste! El número correcto era ${randomNumber}.`;
        feedbackElement.style.color = "#c1121f";
    }
}

