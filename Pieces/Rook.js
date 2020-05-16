class Rook extends Piece{
    constructor(color,x,y){
        super(color,x,y,"♖","♜")
        super.drawPiece()
    }
    correctMovement(newX,newY){
        newX = parseInt(newX)//changes to numbers
        newY = parseInt(newY)
        //changes values to numbers
        if(this.x === newX && this.y !== newY){
            if(this.y < newY){
                //y moving down
                for(let i = this.y;i<newY-2;i++){
                    console.log(this.y,newY)
                    if(game.board.cells[i][this.x-1].piece){                        
                        //piece blocking path y
                        console.log("full-down")
                        return false
                    }else{
                        //path clear y
                        console.log("free-down")
                    }
                }
                return true
            }else{
                //y moving up
                for(let i = newY;i<this.y-1;i++){
                    if(game.board.cells[i][this.x-1].piece){
                        //piece blocking path y
                        console.log('full-up')
                        return false
                    }else{
                        //path clear y
                        console.log('free-up')
                    }
                }
                return true
            }
        }else if(this.x !== newX && this.y === newY){
            console.log('x')
            if(this.x < newX){
                //x moving down
                for(let i = this.x;i<newX-2;i++){
                    console.log(this.x,newX)
                    if(game.board.cells[this.y-1][i].piece){                        
                        //piece blocking path x
                        console.log("full-right")
                        return false
                    }else{
                        //path clear x
                        console.log("free-right")
                    }
                }
                return true
            }else{
                //x moving up
                for(let i = newX;i<this.x-1;i++){
                    if(game.board.cells[this.y-1][i].piece){
                        //piece blocking path x
                        console.log('full-left')
                        return false
                    }else{
                        //path clear x
                        console.log('free-left')
                    }
                }
                return true
            }
        }else{
            return false
        }
    }
}