var randomNumber;
var bubbles;
var timer=60;
var scores= 0;
var clickedNumber;

makeBubble = () => {
    bubbles= "";
    for(var i=1; i<=234; i++){
        let rn= Math.ceil(Math.random()*10)
        bubbles += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML= bubbles;
}

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
    }, 1000)
}

getRandomHit = () => {
    randomNumber = Math.ceil(Math.random() * 10)
    document.querySelector("#hitValue").innerHTML = randomNumber;
}

scoreCounter = () =>{
    scores += 10;
    document.querySelector('#scores').innerHTML = scores;
}

document.querySelector("#pbtm").addEventListener("click", function(kuchBhiRakhLoIskaNaam){
    var clickedNumber= Number(kuchBhiRakhLoIskaNaam.target.innerHTML)
    if(clickedNumber === randomNumber){
        makeBubble();
        getRandomHit();
        scoreCounter();
    }
})

makeBubble();
runTimer();
getRandomHit();