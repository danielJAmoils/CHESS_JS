let statusEnum = {
    Empty:1,
    Full:2
}

class Cell{
    status:number
    piece:any
    clicked:boolean
    constructor(status,clicked){
        this.status = status
        this.piece
        this.clicked = clicked
    }
}