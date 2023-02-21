function Piecess(tetromino,color){
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
p = p;

let nrc = p["color"];
        
switch (nrc){
    case "cyan":
        i();
        break;

    case "yellow":
        o();
        break;

    case "purple":
        t();
        break;

    case "green":
        s();
        break;
    
    case "red":
        z();
        break;

    case "blue":
        j();
        break;

    case "orange":
        l();
        break;
}