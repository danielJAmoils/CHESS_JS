class Pawn extends Piece{
    constructor(color,x,y){
        super(color,x,y,"♙","♟")
        super.drawPiece()
    }
    correctMovement(newX,newY){
        newX = parseInt(newX)
        newY = parseInt(newY)
        //changes values to numbers
        if(game.board.cells[newY-1][newX-1].piece){
            //when pawn capturing
            if(Math.abs(this.x-newX) === 1&& Math.abs(this.y-newY) === 1){//diagnol capture true
                return true
            }else{
                //dont move
                return false
            }
        }else{
            //when not capturing
            if(this.color == "white"){
                //white movement
                if(this.y === 7 && newY === this.y-2 && this.x === newX){//double move check white
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
                if(this.y === 2 && newY === this.y+2 && this.x === newX){//double move check white
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
}