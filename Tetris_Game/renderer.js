function cleanShape(){

    for (x = 0; x < ROWs; x++){
        for (y = 0; y < COLs; y++){
            drawSquares(x, y, "white");
        }

    }
}

function i(){
    cleanShape();
    drawSquares(1, 0, "cyan");
    drawSquares(1, 1, "cyan");
    drawSquares(1, 2, "cyan");
    drawSquares(1, 3, "cyan");
}

function t(){
    cleanShape();
    drawSquares(1, 1, "purple");
    drawSquares(1, 2, "purple");
    drawSquares(0, 1, "purple");
    drawSquares(2, 1, "purple");

}

function o(){
    cleanShape();
    drawSquares(1, 2, "yellow");
    drawSquares(1, 1, "yellow");
    drawSquares(2, 1, "yellow");
    drawSquares(2, 2, "yellow");
}

function z(){
    cleanShape();
    drawSquares(0, 1, "red");
    drawSquares(1, 1, "red");
    drawSquares(1, 2, "red");
    drawSquares(2, 2, "red");
}

function s(){
    cleanShape();
    drawSquares(3, 1, "green");
    drawSquares(2, 1, "green");
    drawSquares(2, 2, "green");
    drawSquares(1, 2, "green");
}

function j(){
    cleanShape();
    drawSquares(2, 0, "blue");
    drawSquares(2, 1, "blue");
    drawSquares(2, 2, "blue");
    drawSquares(1, 2, "blue");
}

function l(){
    cleanShape();
    drawSquares(2, 0, "orange");
    drawSquares(2, 1, "orange");
    drawSquares(2, 2, "orange");
    drawSquares(3, 2, "orange");
}