<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <title>Pop the Bubble!</title>
</head>
<body>
    <div id="main">
        <div id="game-container">
            <!-- Game header with info bar -->
            <div id="info-bar">
                <div class="info-item">
                    <div class="info-label">Target</div>
                    <div id="hitValue" class="info-value">9</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Time</div>
                    <div id="timeBox" class="info-value">60</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Score</div>
                    <div id="scores" class="info-value">0</div>
                </div>
            </div>

            <!-- Game play area with bubbles -->
            <div id="bubble-area"></div>
            
            <!-- Game controls -->
            <div id="game-controls">
                <button id="start-button">Start Game</button>
                <button id="restart-button" style="display: none;">Play Again</button>
            </div>
        </div>
    </div>

    <!-- Game over popup -->
    <div id="game-over" class="hidden">
        <div id="game-over-content">
            <h2>Game Over!</h2>
            <p>Your final score: <span id="final-score">0</span></p>
            <button id="play-again-button">Play Again</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
