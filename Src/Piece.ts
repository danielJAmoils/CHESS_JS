class Piece{
    color:string
    x:number
    y:number
    symbol:string
    castling?:boolean
    hasMoved?:boolean
    constructor(color:string,x:number,y:number,whiteSymbol:string,blackSymbol:string){
        this.color = color
        this.x = x
        this.y = y
        if(color == "white"){
            this.symbol = whiteSymbol
        }else{
            this.symbol = blackSymbol
        }
    }
    
    capture(piece2:Piece){
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
    correctMovement?(newX:number,newY:number):boolean{//dummy function to make pieces compatible with piece type
        return true
    }
    getOtherColorPieces():Piece[]{//returns all pieces of opposite color
        const pieces = []
        for(let i = 0;i<8;i++){//gets all other color pieces
            for(let j = 0;j<8;j++){
                const pieceChecked = game.board.cells[i][j].piece
                if(pieceChecked){//if piece exists
                    if(pieceChecked.color !== this.color){
                        pieces.push(pieceChecked)
                    }
                }
            }
        }
        return pieces
    }
}