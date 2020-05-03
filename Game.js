class Game{
    constructor(){
        this.board = new Board(8,8)//can change board size
    }
    createPiece(type,color,symbol,x,y){
        const piece = new type(color,symbol,x,y)
        this.addPieceToBoard(piece)
    }
    addPieceToBoard(piece){
        const cell = this.board.cells[piece.x-1][piece.y-1]
        cell.status = statusEnum.Full
        cell.piece = piece
    }
    startGame(){
        for(let i =1;i<=8;i++){
            this.createPiece(Pawn,"black",2,i)
        }
        for(let i =1;i<=8;i++){
            this.createPiece(Pawn,"white",7,i)
        }
    }
}
