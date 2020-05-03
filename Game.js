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
        //peice starting positions
        for(let i =1;i<=8;i++){
            this.createPiece(Pawn,"white",7,i)
            //white pawns
        }
        for(let i =2;i<=7;i+=5){
            this.createPiece(Knight,"white",8,i)
            //white knight
        }
        for(let i =3;i<=6;i+=3){
            this.createPiece(Bishop,"white",8,i)
            //white bishop
        }
        for(let i =1;i<=8;i+=7){
            this.createPiece(Rook,"white",8,i)
            //white rook
        }
        this.createPiece(Queen,"white",8,4)
        //white queen
        this.createPiece(King,"white",8,5)
        //white king

        /**************************************/

        for(let i =1;i<=8;i++){
            this.createPiece(Pawn,"black",2,i)
            //black pawns
        }
        for(let i =2;i<=7;i+=5){
            this.createPiece(Knight,"black",1,i)
            //black knight
        }
        for(let i =3;i<=6;i+=3){
            this.createPiece(Bishop,"black",1,i)
            //black bishop
        }
        for(let i =1;i<=8;i+=7){
            this.createPiece(Rook,"black",1,i)
            //black rook
        }
        this.createPiece(Queen,"black",1,4)
        //black queen
        this.createPiece(King,"black",1,5)
        //black king
    }
}
