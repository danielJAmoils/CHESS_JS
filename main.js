//new board line document.write('<br/><div style="background-color:#000000;float:left;">&nbsp</div>');
//black square document.write('<div style="background-color:#000000;float:left;">&nbsp</div>');    
//white square document.write('<div style="background-color:#FFFFFF;float:left;">&nbsp</div>');

console.log("Main js")


function cellClicked(cell){
    let pieceClicked = false,
    outsideX = 0,
    outsideY = 0

    const x = cell.getAttribute("data-x"),
        y = cell.getAttribute("data-y") 


    for(let i = 0;i<8;i++){
        for(let j = 0;j<8;j++){
            if(game.board.cells[i][j].clicked){
                outsideY = i+1
                outsideX = j+1
                pieceClicked = true               
            }
        }
    }

    if(cell.innerHTML == "" && pieceClicked){
        //if no piece in cell and piece has already been clicked,move piece
        //outside variables start at one
        game.movePiece(cell,cell.getAttribute("data-x"),cell.getAttribute("data-y"),outsideX,outsideY)
    }else if(cell.innerHTML == ""){
        // //if no piece in cell
    }else{
        // //if piece in cell
        game.board.cells[parseInt(y-1)][parseInt(x-1)].clicked = true
    }
    
}

const game = new Game()
game.startGame()
console.log(game.board.cells)