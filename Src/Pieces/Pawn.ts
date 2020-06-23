class Pawn extends Piece{
    constructor(color:string,x:number,y:number){
        super(color,x,y,"♙","♟")
        super.drawPiece()
    }
    correctMovement(newX:number,newY:number){
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
                if(this.y === 7 && newY === this.y-2 && this.x === newX && !game.board.cells[this.y-2][this.x-1].piece){//double move check white
                    return true
                }
                if(newX === this.x && newY === this.y-1){
                    //correct move
                    if(newY === 1){//pawn to queen white
                        game.board.cells[this.y - 1][this.x - 1].piece = new Queen(this.color,this.x,this.y)
                    }
                    return true
                }else{
                    //incorrect move
                    return false
                }
            }else{
                //black movement
                if(this.y === 2 && newY === this.y+2 && this.x === newX && !game.board.cells[this.y][this.x-1].piece){//double move check white
                    return true
                }
                if(newX === this.x && newY === this.y+1){
                    //correct move
                    if(newY === 8){//pawn to queen black
                        game.board.cells[this.y - 1][this.x - 1].piece = new Queen(this.color,this.x,this.y)
                    }
                    return true
                }else{
                    //incorrect move
                    return false
                }
            }
        }
    }
}