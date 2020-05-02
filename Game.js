class Game{
    constructor(){
        this.board = new Board(8,8)//can change board size
    }
    createPeice(type,color,symbol,x,y){
        const peice = new type(color,symbol,x,y)
        return peice
    }
    addPeiceToBoard(peice,x,y){
        const cell = this.board.cells[x][y]
        cell.status = statusEnum.Full
        cell.peice = peice
    }
    startGame(){
        for(let i =0;i<8;i++){
            this.addPeiceToBoard(this.createPeice(Pawn,"black",2,i),2,i)
        }
        for(let i =0;i<8;i++){
            this.addPeiceToBoard(this.createPeice(Pawn,"white",7,i),6,i)
        }
    }
}
