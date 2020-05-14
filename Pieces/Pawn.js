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
            if(newX === this.x && newY === this.y-1){
                console.log("white pawn correct")
                //correct move
                return true
            }else{
                console.log("white pawn false")
                //incorrect move
                return false
            }
        }else{
            //black movement
            if(newX === this.x && newY === this.y+1){
                console.log("black pawn correct")
                //correct move
                return true
            }else{
                console.log("black pawn false")
                //incorrect move
                console.log(this.x,this.y,newX,newY)
                return false
            }
        }
    }
}