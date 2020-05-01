class Board{
    constructor(x,y){
        this.createBoard(x,y)
    }
    createBoard(x,y){
        //function for creating chess board layout
        var table = document.createElement("table");
        for (var i = 1; i < x+1; i++) {
            //board rows
            var tr = document.createElement('tr');
            for (var j = 1; j < y+1; j++) {
                //board columns
                var td = document.createElement('td');
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