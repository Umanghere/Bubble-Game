// Creating necessary varibales
var randomNumber;
var bubbles;
var timer=60;
var scores= 0;
var clickedNumber;

//This function makes bubble in the body of the game and through which you have to select the bubble with the number shown in Hit at the top panel of game.
makeBubble = () => {
    bubbles= "";
    for(var i=1; i<=234; i++){
        let rn= Math.ceil(Math.random()*40)
        bubbles += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML= bubbles;
}

// This function calculates time running at the top of game 
runTimer = () =>{
    timer = 60;
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#box").innerHTML= timer;
        }
        else{
            clearInterval(timerInt)
            document.querySelector("#pbtm").innerHTML=`<h1>Your Score is: ${scores}</h1>`;
        }
    }, 1000) //This 1000 is used for 1 second.
}


//This function generate a random number and shows which number to click in the bubbles given below
getRandomHit = () => {
    randomNumber = Math.ceil(Math.random() * 40)
    document.querySelector("#hitValue").innerHTML = randomNumber;
}

// This function counts the score. Everytime you clicked on correct bubble will increase the score by 10 and then update the SCORE BOARD.
scoreCounter = () =>{
    scores += 10;
    document.querySelector('#scores').innerHTML = scores;
}


// This function is used to implement the fuction of CLICKING and take input from keyboard. It takes input from page (by clicking) and matches with hit and then increase the score by 10.
document.querySelector("#pbtm").addEventListener("click", function(kuchBhiRakhLoIskaNaam){
    var clickedNumber= Number(kuchBhiRakhLoIskaNaam.target.innerHTML)
    if(clickedNumber === randomNumber){
        makeBubble();
        getRandomHit();
        scoreCounter();
    }
})


//Here are all the necessary function called to start the game.
makeBubble();   //Generates bubbles.
runTimer();     //Start the times for 1 minute.
getRandomHit(); //Shows the value in HIT to hit in bubbles.