const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");

const audio = new Audio("https://github.com/sammyremi/tr/raw/main/mixkit-arcade-game-jump-coin-216.mp3");

const clearAudio = new Audio("https://github.com/sammyremi/tr/raw/main/clear.mp3");

const themesong = new Audio("https://github.com/sammyremi/tr/raw/main/Tetris%20Theme%20Song.mp3");

function playclear(){
    clearAudio.play();
}

function playAudio(){
    audio.play();
}

function themeSong(){
    themesong.loop = true;
    themesong.play();
}

function stopThemeSong(){
    themesong.pause();
}

const I = [
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	],
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	]
];

const J = [
	[
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 1, 0],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	]
];

const L = [
	[
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[1, 0, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 0]
	]
];

const O = [
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0],
	]
];

const S = [
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	],
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const T = [
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const Z = [
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 0, 1],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[1, 0, 0]
	]
];

const cvs = document.getElementById("canvas1");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");
const lineElement = document.getElementById("line");
let line = 0;
const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20;
const VACANT = "WHITE"; // color of an empty square

// draw a square
function drawSquare(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ);

    ctx.strokeStyle = "white";
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

//drawing piece for next tetromino

const cvss = document.getElementById("canvas2");
const ctxs = cvss.getContext("2d");

const ROWs = 4;
const COLs = COLUMNs = 4;
const SQs = squareSizes = 20;
const VACANTs = "WHITE"; // color of an empty square

// draw a square
function drawSquares(x,y,color){
    ctxs.fillStyle = color;
    ctxs.fillRect(x*SQs,y*SQs,SQs,SQs);

    ctxs.strokeStyle = "black";
    ctxs.strokeRect(x*SQs,y*SQs,SQs,SQs);
}

const PIECES = [
    [Z,"red"],
    [S,"green"],
    [T,"purple"],
    [O,"yellow"],
    [L,"orange"],
    [I,"cyan"],
    [J,"blue"]
];


let gameRunning = false;

startButton.addEventListener("click", () => {
  if (!gameRunning) {
    gameRunning = true;
    document.addEventListener("keydown",CONTROL);
    startButton.disabled = true;
    pauseButton.disabled = false;
    // Start the game
    themeSong();
    drop();
  }
});

pauseButton.addEventListener("click", () => {
  if (gameRunning) {
    gameRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    document.removeEventListener("keydown", CONTROL);
    stopThemeSong();
    // Pause the game
    stop_animation();
  }
});

// create the game board

let board = [];
for( r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT;
    }
}

// draw the game board
function drawBoard(){
    for( r = 0; r <ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}

drawBoard();

// object piece
function randomPiece(){
    let r = randomN = Math.floor(Math.random() * PIECES.length) // 0 -> 6


    f = new Piece( PIECES[r][0],PIECES[r][1]);
    return f;
}

// Create an empty 2D array for the next tetrimino board
let nextBoard = [];
for(let r = 0; r < ROWs; r++){
    nextBoard[r] = [];
    for(let c = 0; c < COLs; c++){
        nextBoard[r][c] = VACANTs;
    }
}

// Draw the next tetrimino board
function drawNextBoard(){
    for(let r = 0; r < ROWs; r++){
        for(let c = 0; c < COLs; c++){
            drawSquares(c, r, nextBoard[r][c]);
        }
    }
}

// Function to display the next tetrimino shape
function displayNextShape(nextPiece) {
    // Clear the next tetrimino board
    for(let r = 0; r < ROWs; r++){
        for(let c = 0; c < COLs; c++){
            nextBoard[r][c] = VACANTs;
        }
    }
    // Draw the next tetrimino shape on the board
    for(let r = 0; r < nextPiece.tetromino[nextPiece.tetrominoN].length; r++){
        for(let c = 0; c < nextPiece.tetromino[nextPiece.tetrominoN].length; c++){
            if(nextPiece.tetromino[nextPiece.tetrominoN][r][c]){
                nextBoard[r][c] = nextPiece.color;
            }
        }
    }
    drawNextBoard();
}

let nextPiece = randomPiece();
displayNextShape(nextPiece);

let p = randomPiece();

function Piece(tetromino,color){
    this.tetromino = tetromino;
    this.color = color;
    
    this.tetrominoN = 0; // we start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];
    
    // we need to control the pieces

    if (color == "yellow" || color == "cyan"){
        this.x = 3;
        this.y = -1;
    }
    if (color == "green" || color == "red"){
        this.x = 2;
        this.y = -1;
    }else{
        this.x = 3;
        this.y = -1;
    }
   
}

// fill function

Piece.prototype.fill = function(color){
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we draw only occupied squares
            if( this.activeTetromino[r][c]){
                drawSquare(this.x + c,this.y + r, color);
            }
        }
    }
}


// draw a piece to the board

Piece.prototype.draw = function(){
    this.fill(this.color);
}

Piece.prototype.unDraw = function(){
    this.fill(VACANT);
}

p.draw();

let score = 0;

// move piece down
Piece.prototype.moveDown = function(){
    
    if(!this.collision(0,1,this.activeTetromino)){
        this.unDraw();
        this.y++;
        this.draw();
        // score += 10;
    }else{
        // we lock the piece and generate a new one
        p = nextPiece;
        
        this.lock();
        nextPiece = randomPiece();
        displayNextShape(nextPiece);

    }
    // scoreElement.innerHTML = score; 
}


// move Right the piece
Piece.prototype.moveRight = function(){
    if(!this.collision(1,0,this.activeTetromino)){
        this.unDraw();
        this.x++;
        this.draw();
    }
}

// move Left the piece
Piece.prototype.moveLeft = function(){
    if(!this.collision(-1,0,this.activeTetromino)){
        this.unDraw();
        this.x--;
        this.draw();
    }
}

// rotate the piece
Piece.prototype.rotate = function(){
    let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
    let kick = 0;
    
    if(this.collision(0,0,nextPattern)){
        if(this.x > COL/2){
            // it's the right wall
            kick = -1; // we need to move the piece to the left
        }else{
            // it's the left wall
            kick = 1; // we need to move the piece to the right
        }
    }
    
    if(!this.collision(kick,0,nextPattern)){
        this.unDraw();
        this.x += kick;
        this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length; // (0+1)%4 => 1
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.draw();
    }
}

Piece.prototype.lock = function(){
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we skip the vacant squares
            if( !this.activeTetromino[r][c]){
                continue;
            }
            // pieces to lock on top = game over
            if(this.y + r < 0){
                alert("Game Over");
                stopThemeSong();
                // stop request animation frame
                gameOver = true;
                break;
            }
            // we lock the piece
            board[this.y+r][this.x+c] = this.color;
        }
    }
    // remove full rows
    for(r = 0; r < ROW; r++){
        let isRowFull = true;
        for( c = 0; c < COL; c++){
            isRowFull = isRowFull && (board[r][c] != VACANT);
        }
        if(isRowFull){
            // if the row is full
            // we move down all the rows above it
            for( y = r; y > 1; y--){
                for( c = 0; c < COL; c++){
                    board[y][c] = board[y-1][c];
                }
            }
            // the top row board[0][..] has no row above it
            for( c = 0; c < COL; c++){
                board[0][c] = VACANT;
            }
            // increment the score
            line += 1;
            playclear();
            

        }
    }

    // update the board
    drawBoard();
    
    // update the score
    lineElement.innerHTML = line;

}

// collision function 
Piece.prototype.collision = function(x,y,piece){
    for( r = 0; r < piece.length; r++){
        for(c = 0; c < piece.length; c++){
            // if the square is empty, we skip it
            if(!piece[r][c]){
                continue;
            }
            // coordinates of the piece after movement
            let newX = this.x + c + x;
            let newY = this.y + r + y;
            
            // conditions
            if(newX < 0 || newX >= COL || newY >= ROW){
                return true;
            }
            // skip newY < 0; board[-1] will crush our game
            if(newY < 0){
                continue;
            }
            // check if there is a locked piece alrady in place
            if( board[newY][newX] != VACANT){
                return true;
            }
        }
    }
    return false;
}

// hard drop function drop piece instantlly to board

Piece.prototype.hardDrop = function(){
    while(!this.collision(0,1,this.activeTetromino)){
        this.unDraw();
        this.y++;
        this.draw();
    }
    
    this.lock();
    playAudio();
    
}

let stop_anime;

// control piece key function
// document.addEventListener("keydown",CONTROL);

function CONTROL(event){
    if(event.keyCode == 37 || event.keyCode == 52){
        playAudio();
        p.moveLeft();
        dropStart = Date.now();
    }else if(event.keyCode == 38 || event.keyCode == 49 || event.keyCode == 53 || event.keyCode == 57){
        playAudio();
        p.rotate();
        dropStart = Date.now();
    }else if(event.keyCode == 39 || event.keyCode == 54){
        playAudio();
        p.moveRight();
        dropStart = Date.now();
    }else if(event.keyCode == 40 || event.keyCode == 56){
        score += 1;
        playAudio();
        p.moveDown();
      
    }else if(event.keyCode == 80){
        gameRunning = false;
        startButton.disabled = false;
        pauseButton.disabled = true;
        document.removeEventListener("keydown", CONTROL);
        stopThemeSong();
        // Pause the game
        stop_animation(); 
    }else if (event.keyCode == 32){
        p.hardDrop();
        score += 12;
    }else if(event.keyCode == 27){
        window.close();
    }
    scoreElement.innerHTML = score;
}

let dropStart = Date.now();

function drop(){
    let now = Date.now();
    let delta = now - dropStart;

    if (delta > 1000){
        p.moveDown();
        dropStart = Date.now();
    }
    // p.moveDown();
    stop_anime = requestAnimationFrame(drop);
}

function stop_animation(){
    cancelAnimationFrame(stop_anime);
}

// drop();