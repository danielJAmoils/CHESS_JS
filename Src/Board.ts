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
                td.setAttribute("data-x",j.toString())
                td.setAttribute("data-y",i.toString())
                const cell = new Cell(statusEnum.Empty,false)
                this.cells[i-1][j-1] = cell
                td.onclick = function() {cellClicked(td)};
                if (i%2 == j%2) {
                    td.className = "white";
                    //white tile
                } else {
                    td.className = "black";
                    //black tile
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }
}