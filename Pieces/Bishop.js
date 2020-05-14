class Bishop extends Piece{
    constructor(color,x,y){
        super(color,x,y,"♗","♝")
        super.drawPiece()
    }
    correctMovement(newX,newY){
        newX = parseInt(newX)
        newY = parseInt(newY)//changes to numbers
        if(Math.abs(this.x-newX) === Math.abs(this.y-newY)){
            return true
        }else{
            return false
        }
    }
}