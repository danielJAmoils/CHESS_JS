class Queen extends Piece{
    constructor(color,x,y){
        super(color,x,y,"♕","♛")
        super.drawPiece()
    }
    correctMovement(newX,newY){
        newX = parseInt(newX)
        newY = parseInt(newY)//changes to numbers
        if(Math.abs(this.x-newX) === Math.abs(this.y-newY)){//bishop like movement
            return true
        }else if((this.x === newX && this.y !== newY)||(this.x !== newX && this.y === newY)){//rook like movement
            return true
        }else{
            return false
        }
    }
}