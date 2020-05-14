class Pawn extends Piece{
    constructor(color,x,y){
        super(color,x,y,"♙","♟")
        super.drawPiece()
    }
    correctMovement(newX,newY){
        newX = parseInt(newX)
        newY = parseInt(newY)
        //changes values to numbers
        if(this.color == "white"){
            //white movement
            if(this.y === 7 && newY === this.y-2){//double move check white
                return true
            }
            if(newX === this.x && newY === this.y-1){
                //correct move
                return true
            }else{
                //incorrect move
                return false
            }
        }else{
            //black movement
            if(this.y === 2 && newY === this.y+2){//double move check white
                return true
            }
            if(newX === this.x && newY === this.y+1){
                //correct move
                return true
            }else{
                //incorrect move
                return false
            }
        }
    }
}