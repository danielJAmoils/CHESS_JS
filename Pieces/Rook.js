class Rook extends Piece{
    constructor(color,x,y){
        super(color,x,y,"♖","♜")
        super.drawPiece()
    }
    correctMovement(newX,newY){
        newX = parseInt(newX)
        newY = parseInt(newY)
        //changes values to numbers
        if((this.x === newX && this.y !== newY)||(this.x !== newX && this.y === newY)){
            return true
        }else{
            return false
        }
    }
}