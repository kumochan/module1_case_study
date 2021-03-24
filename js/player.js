//main player
class Player {
    constructor(x, y , width, height, frameX, frameY, speed, moving) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frameX = frameX;
        this.frameY = frameY;
        this.speed = speed;
        this.moving = moving;
    }
    draw(){
        drawSprite(playerImg, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    }
}

let player = new Player(200, 200, 32, 48, 0, 0, 2,false);

//player image
const playerImg = new Image();
playerImg.src = "img/rome.png";

function movePlayer(){
    if(key[38] && player.y > 0){
        player.y -= player.speed;
        player.frameY = 3;
    } else if(key[39] && player.x + player.width < canvas.width){
        player.x += player.speed;
        player.frameY = 2;
    } else if(key[40] && player.y + player.height < canvas.height){
        player.y += player.speed;
        player.frameY = 0;
    } else if(key[37] && player.x > 0){
        player.x -= player.speed;
        player.frameY = 1;
    }
}

//handle change picture player
function handlePlayerMove(character){
    if(character.frameX < 3){
        character.frameX++;
    } else{
        character.frameX = 0;
    }
}