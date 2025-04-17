// Game variables
let randomNumber;
let timer;
let timerInterval;
let scores = 0;
let isGameRunning = false;
let gameTime = 60;
let bubbleCount;
let correctSound, popSound, gameOverSound;

// DOM Elements
const bubbleArea = document.getElementById('bubble-area');
const timeBox = document.getElementById('timeBox');
const hitValue = document.getElementById('hitValue');
const scoreElement = document.getElementById('scores');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const gameOverPopup = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');
const playAgainButton = document.getElementById('play-again-button');

// Initialize the game
function init() {
    // Set up event listeners
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);
    playAgainButton.addEventListener('click', restartGame);
    window.addEventListener('resize', adjustBubbles);
    bubbleArea.addEventListener('click', handleBubbleClick);
    
    // Reset game state
    resetGameState();
    
    // Show initial state
    updateDisplay();
}

// Calculate the optimal number of bubbles based on screen size
function calculateBubbleCount() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    let bubbleSize;
    let gap;
    
    if (width <= 600) {
        bubbleSize = 40; // Small screens
        gap = 8;
    } else if (width <= 1024) {
        bubbleSize = 50; // Medium screens
        gap = 10;
    } else {
        bubbleSize = 60; // Large screens
        gap = 10;
    }
    
    // Get actual dimensions of the game area
    const containerWidth = bubbleArea.clientWidth;
    const containerHeight = bubbleArea.clientHeight;
    
    // Calculate how many bubbles can fit in the area
    const bubblesPerRow = Math.floor((containerWidth - 20) / (bubbleSize + gap));
    const rows = Math.floor((containerHeight - 20) / (bubbleSize + gap));
    
    // Return total number of bubbles that can fit properly
    const calculatedCount = bubblesPerRow * rows;
    
    // Ensure we have a reasonable number of bubbles
    return Math.min(Math.max(calculatedCount, 20), 200);
}

// Create bubbles based on screen size
function createBubbles() {
    bubbleCount = calculateBubbleCount();
    bubbleArea.innerHTML = '';
    
    for (let i = 1; i <= bubbleCount; i++) {
        let rn = Math.ceil(Math.random() * 30);
        const bubble = document.createElement('div');
        bubble.className = 'bubble bubble-appear';
        bubble.textContent = rn;
        bubble.style.animationDelay = `${(i % 10) * 0.05}s`;
        bubbleArea.appendChild(bubble);
    }
}

// Adjust bubbles when window resizes
function adjustBubbles() {
    if (isGameRunning) {
        createBubbles();
        generateHitTarget();
    }
}

// Generate random hit target
function generateHitTarget() {
    randomNumber = Math.ceil(Math.random() * 30);
    hitValue.textContent = randomNumber;
}

// Handle bubble clicks
function handleBubbleClick(event) {
    if (!isGameRunning) return;
    
    if (event.target.classList.contains('bubble')) {
        const clickedNumber = Number(event.target.textContent);
        
        if (clickedNumber === randomNumber) {
            // Visual feedback
            event.target.classList.add('correct');
            setTimeout(() => {
                scores += 10;
                updateDisplay();
                createBubbles();
                generateHitTarget();
            }, 300);
        } else {
            // Visual feedback for wrong click
            event.target.style.animation = 'shake 0.3s ease';
            setTimeout(() => {
                event.target.style.animation = '';
            }, 300);
        }
    }
}

// Start the game timer
function startTimer() {
    timer = gameTime;
    timeBox.textContent = timer;
    
    timerInterval = setInterval(() => {
        timer--;
        timeBox.textContent = timer;
        
        // Change time color when low
        if (timer <= 10) {
            timeBox.style.color = 'red';
        }
        
        if (timer <= 0) {
            endGame();
        }
    }, 1000);
}

// Update display elements
function updateDisplay() {
    scoreElement.textContent = scores;
    timeBox.textContent = timer;
}

// Start the game
function startGame() {
    resetGameState();
    isGameRunning = true;
    startButton.style.display = 'none';
    restartButton.style.display = 'inline-block';
    createBubbles();
    generateHitTarget();
    startTimer();
}

// End the game
function endGame() {
    isGameRunning = false;
    clearInterval(timerInterval);
    
    // Show game over popup
    finalScoreElement.textContent = scores;
    gameOverPopup.classList.remove('hidden');
    setTimeout(() => {
        gameOverPopup.classList.add('show');
    }, 100);
    
    // Change restart button
    restartButton.style.display = 'inline-block';
    startButton.style.display = 'none';
}

// Restart the game
function restartGame() {
    // Hide game over popup
    gameOverPopup.classList.remove('show');
    setTimeout(() => {
        gameOverPopup.classList.add('hidden');
    }, 300);
    
    resetGameState();
    startGame();
}

// Reset game state
function resetGameState() {
    scores = 0;
    timer = gameTime;
    isGameRunning = false;
    timeBox.style.color = '';
    clearInterval(timerInterval);
    updateDisplay();
    bubbleArea.innerHTML = '<div class="start-message">Click Start to play!</div>';
    startButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Add CSS animation for shake effect
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
