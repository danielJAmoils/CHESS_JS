class Piece{
    constructor(color,x,y,whiteSymbol,blackSymbol){
        this.color = color
        this.x = x
        this.y = y
        if(color == "white"){
            this.symbol = whiteSymbol
        }else{
            this.symbol = blackSymbol
        }
    }
    isCaptured() {
        
    }
    capturing(target){

    }
    drawPiece(){
        const table = document.getElementById("board"),
        row = table.getElementsByTagName("td"),
        location = ((8*(this.y-1))+this.x-1),
        cell = row.item(location)
        cell.innerText = this.symbol
    }
}