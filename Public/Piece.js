class Piece{
    constructor(color,x,y,whiteSymbol,blackSymbol){
        this.color = color
        this.x = x
        this.y = y
        if(color == "white"){
            this.symbol = whiteSymbol
        }else{
            this.symbol = blackSymbol
        }
    }
    
    capture(piece2){
        const targetCell = game.board.cells[piece2.y-1][piece2.x-1],
            oldCell = game.board.cells[this.y-1][this.x-1]
            game.erasePiece(piece2.x,piece2.y)
            game.erasePiece(this.x,this.y)
            this.x = piece2.x
            this.y = piece2.y
            targetCell.piece = this
            oldCell.clicked = false
            oldCell.status = statusEnum.Empty
            this.drawPiece()

    }
    drawPiece(){
        const table = document.getElementById("board"),
        tableItems = table.getElementsByTagName("td"),
        location = ((8*(this.y-1))+this.x-1),
        cell = tableItems.item(location)
        cell.innerText = this.symbol
    }
}