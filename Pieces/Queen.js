class Queen extends Piece{
    constructor(color,x,y){
        super(color,x,y,"♕","♛")
        super.drawPiece()
    }
    correctMovement(){
        return true
    }
}