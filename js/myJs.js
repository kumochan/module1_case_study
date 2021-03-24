let pause = true
const text = document.querySelector('b')
text.addEventListener('click',(e) =>{
    e.target.parentElement.parentElement.style.display = 'none';
    pause  = false;
})

const canvas = document.getElementById("myCanvas");
const ctx =canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
var limitLength;

//background image
const background = new Image();
background.src = "img/Brick_04.png";

//function draw image for all character
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//check lose
function checkLose(player, character){
    let x1, y1, w1, h1, x2, y2, w2, h2;
    x1 = player.x;
    y1 = player.y;
    h1 = player.height;
    w1 = player.width;
    x2 = character.x;
    y2 = character.y;
    h2 = character.height;
    w2 = character.width;
    if (
        ((x1 + w1) >= x2 && (x1 + w1) <= (x2 + w2 + w1)) && ((y1 + h1) >= y2 && (y1 + h1) <= (y2 + h2 + h1))
    )
    {
        pause = true;
        document.querySelector('#end').style.display = 'flex';
        document.querySelector('#result').innerHTML = `GAME OVER<br>Your score is ${count}`;
        document.getElementById('saveScore').addEventListener('click', function (){
            let name = document.getElementById('name').value;
            scoreArray.push([name,count]);
            console.log(scoreArray)
            localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
        });
    }
}

function limitPlayer(count){
    switch (count){
        case 1: limitLength = 1;
            break;
        case 10: limitLength = 3;
            break;
        case 20: limitLength = 5;
            break;
        case 30: limitLength = 8;
            break;
    }
}

function drawScore(count){
    ctx.font = "30px Arial";
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText('Score: ' + count, 10, 50);
}

let scoreArray;
window.onload = function (){
    if (localStorage.getItem("scoreArray") === null) {
        scoreArray = [];
    } else {
        scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
    }
}

function animate(){
    if(!pause) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        player.draw();
        movePlayer();
        handlePlayerMove(player);
        limitPlayer(count);
        for (let i = 0; i < limitLength; i++) {
            characters[i].draw();
            characters[i].update();
            checkLose(player, characters[i]);
        }
        reward.draw();
        earnReward(player, reward);
        drawScore(count);
    }
        requestAnimationFrame(animate);
}

animate();


