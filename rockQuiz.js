// Initialize scores
let scores = {
    boulder: 0,
    gravel: 0,
    pebble: 0,
    stone: 0
};

// Function to handle answer selection
function handleAnswer(rockType) {
    let currentScores = JSON.parse(localStorage.getItem('rockScores')) || scores;
    if (typeof rockType === 'string') {
        currentScores[rockType]++;
    } else if (Array.isArray(rockType)) {
        rockType.forEach(type => currentScores[type]++);
    }
    localStorage.setItem('rockScores', JSON.stringify(currentScores));
}

// Function to calculate final result
function calculateResult() {
    let finalScores = JSON.parse(localStorage.getItem('rockScores')) || scores;
    let result = Object.entries(finalScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    return result;
}

// Function to display result
function displayResult() {
    let result = calculateResult();
    let resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.textContent = `You are a ${result.charAt(0).toUpperCase() + result.slice(1)}!`;
    }
}

// Function to reset scores
function resetScores() {
    localStorage.setItem('rockScores', JSON.stringify(scores));
}

// Initialize scores when the quiz starts
window.onload = function() {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        resetScores();
    }
    
    if (window.location.pathname.endsWith('rockResults.html')) {
        displayResult();
    }
};