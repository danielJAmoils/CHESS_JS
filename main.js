//new board line document.write('<br/><div style="background-color:#000000;float:left;">&nbsp</div>');
//black square document.write('<div style="background-color:#000000;float:left;">&nbsp</div>');    
//white square document.write('<div style="background-color:#FFFFFF;float:left;">&nbsp</div>');

console.log("Main js")


function cellClicked(cell){
    let pieceClicked = false,
    outsideI = 0,
    outsideJ = 0

    const x = cell.getAttribute("data-x"),
        y = cell.getAttribute("data-y") 


    for(let i = 0;i<8;i++){
        for(let j = 0;j<8;j++){
            if(game.board.cells[i][j].clicked){    
                console.log('check') 
                outsideI = i
                outsideJ = j
                pieceClicked = true               
            }
        }
    }

    if(cell.innerHTML == "" && pieceClicked){
        //if no piece in cell and piece has already been clicked,move piece
        console.log('movePiece')
        const pieceLocation = game.board.cells[outsideJ][outsideI]
        console.log(pieceLocation)
        game.board.cells[parseInt(x)-1][parseInt(y)-1].piece = pieceLocation.piece
        pieceLocation.piece = null
        pieceLocation.clicked = false

        //bug zone
        console.log(typeof(x),typeof(y))
        console.log(game.board.cells[parseInt(x)-1][parseInt(y)-1])

        game.board.cells[parseInt(x)-1][parseInt(y)-1].piece.x = parseInt(x-1)
        game.board.cells[parseInt(x)-1][parseInt(y)-1].piece.y = parseInt(y-1)
        game.board.cells[x-1][y-1].status = statusEnum.Full
        console.log(game.board.cells[x-1][y-1].piece)
        console.log(game.board.cells[x-1][y-1])
        game.board.cells[parseInt(x)-1][parseInt(y)-1].piece.drawPiece()
        cell.innerHTML = ''
        console.log("piece moved")
        pieceClicked = false
    }else if(cell.innerHTML == ""){
        //if no piece in cell
        console.log("clicked",cell)
    }else{
        //if piece in cell
        console.log(cell.innerHTML)
        pieceClicked = true
        console.log(x,y)
        game.board.cells[parseInt(x-1)][parseInt(y-1)].clicked = true
    }
    
}

const game = new Game()
game.startGame()
console.log(game.board.cells)