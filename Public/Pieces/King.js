class King extends Piece{
    constructor(color,x,y){
        super(color,x,y,"♔","♚")
        super.drawPiece()
    }
    correctMovement(newX,newY){
        newX = parseInt(newX)
        newY = parseInt(newY)//changes to numbers
        if(Math.abs(this.x-newX) <= 1 && Math.abs(this.y-newY) <= 1 ){
            return true
        }else{
            return false
        }
    }
}