class Bishop extends Piece{
    constructor(color:string,x:number,y:number){
        super(color,x,y,"♗","♝")
        super.drawPiece()
    }
    correctMovement?(newX:number,newY:number){
        if(Math.abs(this.x-newX) === Math.abs(this.y-newY)){//correct movment check
            if(this.x < newX&&this.y < newY){//moving down right
                for(let i = Math.abs(this.x-newX)-1;i>0;i--){
                    if(game.board.cells[this.y-1+i][this.x-1+i].piece){
                        return false//piece blocking
                    }
                }
                return true
            }else if(this.x < newX&&this.y > newY){//moving up right
                for(let i = Math.abs(this.x-newX)-1;i>0;i--){
                    if(game.board.cells[this.y-1-i][this.x-1+i].piece){
                        return false//piece blocking
                    }
                }
                return true
            }else if(this.x > newX && this.y < newY){//moving down left
                for(let i = Math.abs(this.x-newX)-1;i>0;i--){
                    if(game.board.cells[this.y-1+i][this.x-1-i].piece){
                        return false//piece blocking
                    }
                }
                return true
            }else if(this.x > newX && this.y > newY){//moving up left
                for(let i = Math.abs(this.x-newX)-1;i>0;i--){
                    if(game.board.cells[(this.y-1)-i][(this.x-1)-i].piece){
                        return false//piece blocking
                    }
                }
                return true
            }
        }
    }
}