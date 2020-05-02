class Game{
    constructor(){
        this.board = new Board(8,8)//can change board size
    }
    createPeice(type,color,symbol,x,y){
        const peice = new type(color,symbol,x,y)
        return peice
    }
    addPeiceToBoard(peice,x,y){
        const cell = this.board.cells[x-1][y-1]
        cell.status = statusEnum.Full
        cell.peice = peice
    }
    startGame(){
        this.addPeiceToBoard(this.createPeice(Pawn,"black",5,4),5,4)
    }
}
