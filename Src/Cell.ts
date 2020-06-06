let statusEnum = {
    Empty:1,
    Full:2
}

class Cell{
    status:number
    piece: Piece
    clicked:boolean
    constructor(status:number,clicked:boolean){
        this.status = status
        this.piece
        this.clicked = clicked
    }
}