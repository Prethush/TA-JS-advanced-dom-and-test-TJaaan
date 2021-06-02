let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 20;
let rightPressed = false;
let leftPressed = false;
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOfsetLeft = 30;

let bricks = [];
let score = 0;
let lives = 3;


for(let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for(let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}



function drawBall() {
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, (canvas.height - paddleHeight), paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks()  {
    for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
            if(bricks[c][r].status === 1) {
            let brickX = (c*(brickWidth + brickPadding)) + brickOfsetLeft;
            let brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
            console.log(brickX, "brickX", brickY, "bricky");
        }
    }
}
}

function draw() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    drawBricks();
    drawBall();
    
    console.log(y);
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }else if(y + dy > canvas.height - ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
           if(!lives) {
               alert("Game Over");
               document.location.reload();
            
           } else {
               x = canvas.width / 2;
               y = canvas.height - 30;
               dx = 2;
               dy = -2;
               paddleX = (canvas.width-paddleWidth) / 2;
           }
        }

    }

    x += dx;
    y += dy;

    if(rightPressed) {
        paddleX += 7;
        if(paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    } else if(leftPressed) {
        paddleX -= 7;
        if(paddleX < 0) {
            paddleX = 0;
        }
    }

    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    requestAnimationFrame(draw);
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}

function keyDownHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
        console.log(rightPressed);
    } else if(e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
        console.log(leftPressed);
    }
}


function keyUpHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
        console.log(rightPressed);
    } else if(e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
        console.log(leftPressed);
    }
}

function collisionDetection() {
    for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.status === 1) {
            if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y + brickHeight) {
                dy = -dy;
                b.status = 0;
                score++;

                if(score === brickRowCount * brickColumnCount) {
                    alert("You Win, Congragulations");
                    document.location.reload();
                    
                }
            }
        }
    }
}
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score:" +score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " +lives, canvas.width - 65, 20);
}


draw();
