class Game{
    constructor(){
        this.board = new Board(8,8)//can change board size
    }
    createPeice(type,color,symbol,x,y){
        const peice = new type(color,symbol,x,y)
        this.addPeiceToBoard(peice)
    }
    addPeiceToBoard(peice){
        const cell = this.board.cells[peice.x-1][peice.y-1]
        cell.status = statusEnum.Full
        cell.peice = peice
    }
    startGame(){
        for(let i =1;i<=8;i++){
            this.createPeice(Pawn,"black",2,i)
        }
        for(let i =1;i<=8;i++){
            this.createPeice(Pawn,"white",7,i)
        }
    }
}
