class Board{
    constructor(x,y){
        this.cells = [[],[],[],[],[],[],[],[]]
        this.createBoard(x,y)
    }
    createBoard(x,y){
        //function for creating chess board layout
        const table = document.createElement("table");
        table.id = "board"
        for (let i = 1; i < x+1; i++) {
            //board rows
            const tr = document.createElement('tr');
            for (let j = 1; j < y+1; j++) {
                //board columns
                const td = document.createElement('td');
                if (i%2 == j%2) {
                    td.className = "white";
                    const cell = new Cell(statusEnum.Empty)
                    this.cells[i-1][j-1] = cell
                    //white tile
                } else {
                    td.className = "black";
                    const cell = new Cell(statusEnum.Empty)
                    this.cells[i-1][j-1] = cell
                    //black tile
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }
}