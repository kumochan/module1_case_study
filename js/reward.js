const fire0 = new Image();
fire0.src = "img/sword0.png";

class Reward {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 30;
        this.height = 40;
    }
    draw(){
        drawSprite(fire0,0,0,114,335,this.x,this.y,this.width,this.height);
    }
}

const reward = new Reward();

//Score
let count = 0;

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
        reward.x = Math.random() * canvas.width - 50;
        reward.y = Math.random() * canvas.height - 50;
    }
}