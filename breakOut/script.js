const circle = document.querySelector(".gameBoard__ball");
const board = document.querySelector(".gameBoard");
const plate = document.querySelector(".gameBoard__plate");

let brickWidth =  150;
let brickHeight = 40;
let topCord = 500;
let leftCord = 0;
let xDirection = 2;
let yDirection = 2;
let plateCord = 350;

class Brick {
    constructor(xCord, yCord){
        this.bottomLeft = [xCord, yCord];
        this.bottomRight = [xCord + brickWidth, yCord];
        this.topLeft = [xCord, yCord + brickHeight];
        this.topRight = [xCord + brickWidth, yCord + brickHeight];
    }
}
const bricks = [
    new Brick(20, 20),
    new Brick(180, 20),
    new Brick(340, 20),
    new Brick(500, 20),
    new Brick(660, 20),
    new Brick(820, 20),

    new Brick(20, 80),
    new Brick(180, 80),
    new Brick(340, 80),
    new Brick(500, 80),
    new Brick(660, 80),
    new Brick(820, 80),

    new Brick(20, 140),
    new Brick(180, 140),
    new Brick(340, 140),
    new Brick(500, 140),
    new Brick(660, 140),
    new Brick(820, 140),

    new Brick(20, 200),
    new Brick(180, 200),
    new Brick(340, 200),
    new Brick(500, 200),
    new Brick(660, 200),
    new Brick(820, 200),

    new Brick(20, 260),
    new Brick(180, 260),
    new Brick(340, 260),
    new Brick(500, 260),
    new Brick(660, 260),
    new Brick(820, 260),
];
function addBlicks(){
    for(let i = 0; i < bricks.length; i++){
        const brick = document.createElement("div");
        brick.classList.add("gameBoard__brick");
        brick.style.left = bricks[i].bottomLeft[0] + "px";
        brick.style.top = bricks[i].bottomLeft[1] + "px";
        board.append(brick)
    }
}
addBlicks()


function circleMove(){
    if(bricks.length === 0){
        alert("win");
        location.reload();
    }
    if(topCord === 950){
        alert("lose");
        location.reload();
    }
    else if(topCord === 0){
        yDirection = 2;
    }
    if(leftCord === 950){
        xDirection = -2;
    }
    else if(leftCord === 0){
        xDirection = 2;
    }
    if(topCord === 900 && leftCord < plateCord + 300 && leftCord > plateCord){
        yDirection = -2;
    }
    for(let i = 0; i < bricks.length; i++){
        if((leftCord > bricks[i].bottomLeft[0] && leftCord < bricks[i].bottomRight[0]) &&
        (topCord + 50) > bricks[i].bottomLeft[1] && topCord < bricks[i].topLeft[1]){
            const allBricks = Array.from(document.querySelectorAll('.gameBoard__brick'));
            allBricks[i].classList.remove("gameBoard__brick");
            bricks.splice(i, 1);
            changeDirection()
        }
    }
    
    topCord += yDirection;
    leftCord += xDirection;
    circle.style.top = topCord + "px";
    circle.style.left = leftCord + "px";
    setTimeout(circleMove, 1);
}
circleMove();



document.addEventListener("keydown", (event) => {
    switch(event.key){
        case "ArrowLeft":
             if(plateCord >    10){
                plate.style.left = plateCord - 20 + 'px';
                plateCord -= 10;
             }
            break
        case "ArrowRight":
            if(plateCord < 690){
                plate.style.left = plateCord + 20 + 'px';
                plateCord += 10; 
            }
            break
    }
})

function changeDirection(){
    if(xDirection === 2 && yDirection === 2){
        yDirection = -2;
    }
    if(xDirection === 2 && yDirection === -2){
        xDirection = -2;
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2;
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2;
    }
}