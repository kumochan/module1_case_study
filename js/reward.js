const fire = new Image();
fire.src = "img/chest.png";

class Reward {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        if(count<10) {
            drawSprite(fire, 0, 0, 118, 118, this.x, this.y, this.width, this.height);
        } else if(count >= 10 && count <20) {
            drawSprite(fire, 118, 0, 118, 118, this.x, this.y, this.width, this.height);
        } else if(count >= 20 && count <30) {
            drawSprite(fire, 0, 118, 118, 118, this.x, this.y, this.width, this.height);
        } else if(count > 30) {
            drawSprite(fire, 118, 118, 118, 118, this.x, this.y, this.width, this.height);
        }
    }
}

const reward = new Reward();

//Score
var count = 0;

function earnReward(player, reward){
    let x1 = player.x;
    let y1 = player.y;
    let w1 = player.width;
    let h1 = player.height;
    let x2 = reward.x;
    let y2 = reward.y;
    let w2 = reward.width;
    let h2 = reward.height;
    if (
        ((x1 + w1) >= x2 && (x1 + w1) <= (x2 + w2 + w1)) && ((y1 + h1) >= y2 && (y1 + h1) <= (y2 + h2 + h1))
    )
    {
        count ++;
        reward.x = Math.random() * (canvas.width - 100);
        reward.y = Math.random() * (canvas.height - 100);
    }
}