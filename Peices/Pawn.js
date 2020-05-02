class Pawn extends Peice{
    constructor(color,x,y){
        console.log("pawn")
        super(color)
        const whiteSymbol = "\u2659",
        blackSymbol = "\u265f"
        if(color == "white"){
            this.symbol = whiteSymbol
        }else{
            this.symbol = blackSymbol
        }
        const table = document.getElementById("board"),
        row = table.getElementsByTagName("td"),
        location = ((8*(x-1))+y),
        cell = row.item(location)
        cell.innerText = this.symbol
        console.log(cell)

    }
}