class Rook extends Piece{
    constructor(color,x,y){
        super(color,x,y,"♖","♜")
        this.castling = false
        super.drawPiece()
    }
    correctMovement(newX,newY){
        newX = parseInt(newX)//changes to numbers
        newY = parseInt(newY)
        //changes values to numbers
        if(this.castling){
            //castling
            this.castling = false
            return true
        }else{
            //not castling
            if(this.x === newX && this.y !== newY){
                if(this.y < newY){
                    //y moving down
                    for(let i = this.y;i<newY-2;i++){
                        if(game.board.cells[i][this.x-1].piece){                        
                            //piece blocking path y
                            return false
                        }else{
                            //path clear y
                        }
                    }
                    return true
                }else{
                    //y moving up
                    for(let i = newY;i<this.y-1;i++){
                        if(game.board.cells[i][this.x-1].piece){
                            //piece blocking path y
                            return false
                        }else{
                            //path clear y
                        }
                    }
                    return true
                }
            }else if(this.x !== newX && this.y === newY){
                if(this.x < newX){
                    //x moving down
                    for(let i = this.x;i<newX-2;i++){
                        if(game.board.cells[this.y-1][i].piece){                        
                            //piece blocking path x
                            return false
                        }else{
                            //path clear x
                        }
                    }
                    return true
                }else{
                    //x moving up
                    for(let i = newX;i<this.x-1;i++){
                        if(game.board.cells[this.y-1][i].piece){
                            //piece blocking path x
                            return false
                        }else{
                            //path clear x
                        }
                    }
                    return true
                }
            }else{
                return false
            }
        }
    }
}